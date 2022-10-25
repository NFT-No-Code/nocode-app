import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import Input from "../../components/Input";
import SideNav from "../../components/SideNav";
import TextArea from "../../components/TextArea";
import * as S from "./styles";
import { collectionCreationSchema } from "../../validators/CollectionCreation";
import { ChangeEvent } from "react";
import { useIpfs } from "../../hooks/useIpfs";

export default function MainPage() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(collectionCreationSchema) });

  const { ipfs, isIpfsReady, ipfsError } = useIpfs();

  const uploadToIpfs = async (content: ArrayBuffer) => {
    if (ipfsError) {
      alert("Error during IPFS initialization.");
      console.error(ipfsError);
      return;
    } else if (ipfs && isIpfsReady) {
      const fileToAdd = {
        content: content,
      };

      const file = await ipfs.add(fileToAdd);

      console.log(`Preview: https://ipfs.io/ipfs/${file.cid}`);
    } else {
      alert("IPFS is loading, try again.");
    }
  };

  const submitForm = (data: FieldValues) => {
    try {
      console.log(data);

      if (data.collectibleImage[0]) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(data.collectibleImage[0]);
        reader.onloadend = async () => {
          if (reader.result) {
            await uploadToIpfs(reader.result as ArrayBuffer);
          } else {
            throw new Error("Erro ao processar o arquivo inserido.");
          }
        };
      }
    } catch (error) {
      alert(error);
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
