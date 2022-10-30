import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import Input from "../../components/Input";
import SideNav from "../../components/SideNav";
import TextArea from "../../components/TextArea";
import * as S from "./styles";
import { collectionCreationSchema } from "../../validators/CollectionCreation";
import { ChangeEvent, useEffect } from "react";
import { useIpfs } from "../../hooks/useIpfs";
import { CID } from "ipfs-core/dist/src/block-storage";
import { Contract } from "ethers";
import addresses from "../../contracts/addresses";
import abis from "../../contracts/abis";
import { useContractFunction } from "@usedapp/core";
import { toast } from "react-toastify";

export default function MainPage() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(collectionCreationSchema) });

  const { ipfs, isIpfsReady, ipfsError } = useIpfs();

  const contract = new Contract(addresses.cloneFactory, abis.cloneFactory);
  const { state, send, events } = useContractFunction(contract, "createNewCollection");

  useEffect(() => {
    switch (state.status) {
      case "PendingSignature":
        toast("Autorize a transação na Metamask.");
    }
  }, [state]);

  const handleIpfsUpload = async (content: ArrayBuffer | string): Promise<CID | undefined> => {
    if (ipfsError) {
      console.error(ipfsError);
      throw new Error("Error during IPFS initialization.");
    } else if (ipfs && isIpfsReady) {
      const fileToAdd = {
        content: content,
      };

      const file = await ipfs.add(fileToAdd);

      console.log(`Preview: https://ipfs.io/ipfs/${file.cid}`);
      return file.cid;
    } else {
      throw new Error("IPFS is loading, try again.");
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

  const submitForm = async (data: FieldValues) => {
    try {
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
      const txnReceipt = await send(data.collectionName, "NFT", "ipfs://" + tokenMetadataCid);
      console.log("txnReceipt", txnReceipt);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const validateFileType = (event: ChangeEvent<HTMLInputElement>) => {
    const filePath = event.target.value;
    const allowedFiles = new RegExp(/(\.png|\.jpeg|\.jpg|\.gif)$/i);

    if (!allowedFiles.test(filePath)) {
      event.target.value = "";
      alert("You must provide a png, jpeg, jpg, or gif file.");
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
                <S.ConfirmButton type="submit">Confirmar criação</S.ConfirmButton>
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
