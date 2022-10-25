import * as yup from "yup";

export const collectionCreationSchema = yup.object().shape({
  collectionName: yup.string().required("Insira o nome da coleção."),
  collectionDesc: yup.string().required("Insira a descrição da coleção."),
  collectibleName: yup.string().required("Insira o nome do colecionável."),
  collectibleDesc: yup.string().required("Insira a descrição do colecionável."),
});
