import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import Input from "../../components/Input";
import SideNav from "../../components/SideNav";
import TextArea from "../../components/TextArea";
import * as S from "./styles";
import { collectionCreationSchema } from "../../validators/CollectionCreation";
import { useIpfs } from "../../hooks/useIpfs";
import { CID } from "ipfs-core/dist/src/block-storage";
import { Contract } from "ethers";
import addresses from "../../contracts/addresses";
import abis from "../../contracts/abis";
import { useContractFunction, useEthers } from "@usedapp/core";
import { Id, toast } from "react-toastify";
import { PageContext } from "../../providers/PageProvider";
import { ConfirmationContext } from "../../providers/ConfirmationProvider";

export default function MainPage() {
  const [loadingToastId, setLoadingToastId] = useState<Id>("");
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(collectionCreationSchema) });

  const { ipfs, isIpfsReady, ipfsError } = useIpfs();
  const { chainId } = useEthers();

  const contract = new Contract(addresses.cloneFactory, abis.cloneFactory);
  const { state, send, events } = useContractFunction(contract, "createNewCollection");

  const { setPageToRender } = useContext(PageContext);
  const { setCloneEvent } = useContext(ConfirmationContext);

  useEffect(() => {
    if (events) {
      setCloneEvent(events);
      setPageToRender("confirmationPage");
    }

    switch (state.status) {
      case "PendingSignature":
        toast.info("Autorize a transação na Metamask.");
        break;
      case "Mining":
        const miningToastId = toast.loading("Minerando.");
        setLoadingToastId(miningToastId);
        break;
      case "Success":
        toast.update(loadingToastId, { render: "Transação confirmada.", type: "success", isLoading: false, autoClose: 5000 });
        break;
      case "Fail":
        toast.error(`Erro na transação: ${state.errorMessage}`);
        setButtonDisabled(false);
        break;
      case "Exception":
        toast.error(`Erro ao processar a transação: ${state.errorMessage}`);
        setButtonDisabled(false);
        break;
    }
  }, [state, events]);

  const handleIpfsUpload = async (content: ArrayBuffer | string): Promise<CID | undefined> => {
    if (ipfsError) {
      console.error(ipfsError);
      throw new Error("Erro durante a inicialização do IPFS.");
    } else if (ipfs && isIpfsReady) {
      const fileToAdd = {
        content: content,
      };

      const file = await ipfs.add(fileToAdd);

      console.log(`Preview: https://ipfs.io/ipfs/${file.cid}`);
      return file.cid;
    } else {
      throw new Error("IPFS está carregando, tente novamente.");
    }
  };

  const readImageFile = (file: File): Promise<ArrayBuffer | string> => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new Error("Erro ao processar o arquivo inserido."));
      };

      reader.onloadend = () => {
        resolve(reader.result!);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const checkChain = () => {
    if (chainId !== 5) {
      toast.warn("Você deve usar a rede Goerli.", { icon: "⚠️" });
      return false;
    }
    return true;
  };

  const submitForm = async (data: FieldValues) => {
    try {
      if (checkChain() === false) {
        return;
      }
      setButtonDisabled(true);

      const image = data.collectibleImage[0];

      let tokenMetadata: { name: string; description: string; image?: string } = {
        name: data.collectibleName,
        description: data.collectibleDesc,
      };

      if (image) {
        const imageBuffer = await readImageFile(image);
        const imageCid = await handleIpfsUpload(imageBuffer);
        tokenMetadata.image = "ipfs://" + String(imageCid);
      }

      const tokenMetadataCid = await handleIpfsUpload(JSON.stringify(tokenMetadata));
      await send(data.collectionName, "NFT", "ipfs://" + tokenMetadataCid);
      setButtonDisabled(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Erro: " + error.message);
      }
    }
  };

  const validateFileType = (event: ChangeEvent<HTMLInputElement>) => {
    const filePath = event.target.value;
    const allowedFiles = new RegExp(/(\.png|\.jpeg|\.jpg|\.gif)$/i);

    if (!allowedFiles.test(filePath)) {
      event.target.value = "";
      toast.warning("Apenas arquivos png, jpeg, jpg, ou gif são suportados.");
    }
  };

  return (
    <S.MainPageWrapper>
      <SideNav />
      <S.CreationSection>
        <S.TextContainer>
          <h1>🛠️ Criação</h1>
          <p>Preencha os campos abaixo de acordo com os colecionáveis que deseja criar.</p>
        </S.TextContainer>
        <S.FormContainer>
          <form onSubmit={handleSubmit(submitForm)}>
            <S.CollectionContainer>
              <h2>Coleção</h2>
              <Input
                name="collectionName"
                placeholder="Insira o nome da sua coleção"
                label="Nome da coleção"
                register={register}
                error={errors}
                isRequired={true}
              />
              <TextArea
                name="collectionDesc"
                placeholder="Insira a descrição da sua coleção"
                label="Descrição da coleção"
                register={register}
                error={errors}
                isRequired={true}
              />
              <S.ConfirmSection>
                <p>Revise os campos antes de confirmar.</p>
                <S.ConfirmButton type="submit" disabled={isButtonDisabled}>
                  Confirmar criação
                </S.ConfirmButton>
              </S.ConfirmSection>
            </S.CollectionContainer>
            <S.CollectibleContainer>
              <h2>Colecionáveis</h2>
              <Input
                name="collectibleName"
                placeholder="Insira o nome do item"
                label="Nome do item"
                register={register}
                error={errors}
                isRequired={true}
              />
              <Input
                name="collectibleDesc"
                placeholder="Insira a descrição do item"
                label="Descrição do item"
                register={register}
                error={errors}
                isRequired={true}
              />
              <Input
                name="collectibleImage"
                placeholder="Insira a imagem do item"
                label="Imagem do item (png, jpeg, jpg, ou gif)"
                register={register}
                error={errors}
                isRequired={false}
                type="file"
                onChange={validateFileType}
              />
            </S.CollectibleContainer>
          </form>
        </S.FormContainer>
      </S.CreationSection>
    </S.MainPageWrapper>
  );
}
