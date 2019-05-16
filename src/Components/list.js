import React, { Component } from "react";
import { Form, Input, Textarea } from "@rocketseat/unform";
import * as Yup from "yup";
import { Container } from "./style.js";

const errorStyle = {
  requiredOne: "Esse Campo é obrigatório ",
  missingOne: "Esse Campo não pode estar vazio",
  invalidOne: "Insira um email válido"
};

const schema = Yup.object().shape({
  nome: Yup.string().required(`${errorStyle.requiredOne}`),
  email: Yup.string()
    .email(`${errorStyle.invalidOne}`)
    .required(`${errorStyle.requiredOne}`),
  phone: Yup.string().required(`${errorStyle.requiredOne}`)
});

export default class List extends Component {
  handleSubmit = data => {
    console.log(data);
    alert("Email enviado !");
    window.location.reload();
  };

  render() {
    return (
      <Container>
        <div id="main">
          <Form id="form" schema={schema} onSubmit={this.handleSubmit}>
            <Input name="nome" placeholder="Seu Nome" label="Nome : " />
            <Input
              name="email"
              type="email"
              placeholder="Insira teu Email aqui"
              label="Seu Email : "
            />
            <Input
              name="email"
              type="email"
              placeholder="Email do destinatário"
              label="Email do destinatário : "
            />
            <Input
              name="phone"
              placeholder="Somente números"
              label="Telefone : "
            />
            <Textarea id="message" name="message" label="Mensagem : " />
            <button type="submit">Enviar</button>
          </Form>
        </div>
      </Container>
    );
  }
}
