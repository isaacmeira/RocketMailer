import React, { Component } from "react";
// LIB para Formulário da rocketseat
import { Form, Input } from "@rocketseat/unform";

// Usa validação por meio do YUP
import schema from "../../Validators/index";

// Componente estilizado criado com Styled-components
import { Container } from "./style.js";

// Logo
import logo from "../../Assets/logo.png";

// Modal sweet alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Modal = withReactContent(Swal);

// Módulo principal

export default class List extends Component {
  handleSubmit = () => {
    Modal.fire({
      type: "success",
      title: "Email enviado com sucesso !",
      showConfirmButton: true,
      onClose: () => {
        window.location.reload();
      }
    });
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <div id="main">
          <Form id="form" schema={schema} onSubmit={this.handleSubmit}>
            <Input name="nome" placeholder="Seu Nome" />
            <Input
              name="email"
              type="email"
              placeholder="Insira teu Email aqui"
            />
            <Input
              name="email"
              type="email"
              placeholder="Insira o Email do destinatário"
            />
            <Input name="phone" placeholder="Seu Telefone (DDD)" />
            <Input name="nome" placeholder="Assunto" />
            <Input multiline id="message" name="message" placeholder="Mensangem " />

            <button type="submit">Enviar</button>
          </Form>
        </div>
      </Container>
    );
  }
}
