import * as Yup from "yup";

const errorStyle = {
  requiredOne: "Este Campo não pode estar vazio ",
  invalidOne: "Insira um email válido"
};

const schema = Yup.object().shape({
  nome: Yup.string().required(`${errorStyle.requiredOne}`),
  email: Yup.string()
    .email(`${errorStyle.invalidOne}`)
    .required(`${errorStyle.requiredOne}`),
  phone: Yup.string().required(`${errorStyle.requiredOne}`),
  message: Yup.string().required(`${errorStyle.requiredOne}`)
});

export default schema;
