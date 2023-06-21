import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
 
      <div className="top">
        <div className="item">
          <h1>Categorias</h1>
          <span href="">Home</span>
          <span>Feminino</span>
          <span>Masculino</span>
          <span>Sapatos</span>
          <span>Acessorios</span>
          <span>Novidades</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Como Pedir</span> 
          <span>Devolução</span>
          <span>Como Rastrear</span>
          <span>Guia de tamanhos</span>
          <span>Política de Frete</span>
          <span>Politicas de Privacidade e Cookies</span>
        </div>
        <div className="item">
          <h1>Sobre</h1>
          <span>
          ALCLISBOA. é um E-commerce que foi fundado em 2023 por duas estudantes do 3º semestre de engenharia de software da UCB: Ana Luísa e Ana Gabrielle. O site foi criado com o objetivo de oferecer uma experiência de compra única para aqueles que buscam roupas femininas, masculinas e infantis de alta qualidade a preços acessíveis.
          </span>
        </div>
        <div className="item">
          <h1>Contato</h1>
          <span>
            End: Brasília, DF, BR
            <br/>
            <br/>
            Tel:(61) 99XXX-XXX7
            <br/>
            <br/>
            E-mail: analuisacarneirolisboa@gmail.com
            <br/>
            <br/>
            Quem disse que dinheiro não traz felicidade não sabia onde ir as compras compre em ALCLISBOA.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ALCLISBOA.</span>
          <span className="copyright">
            © Copyright 2023. Todos os direitos reservados
          </span>
        </div>
        <div className="right">
          <img src="/img/mastercard.png" alt="imagem das formas de pagamentos aceitas" />
          <img src="/img/boleto.png" alt="imagem das formas de pagamentos aceitas" />
          <img src="/img/caixa.png" alt="imagem das formas de pagamentos aceitas" />
          <img src="/img/elo.png" alt="imagem das formas de pagamentos aceitas" />
          <img src="/img/paypal.png" alt="imagem das formas de pagamentos aceitas" />
          <img src="/img/pix.png" alt="imagem das formas de pagamentos aceitas" />
          <img src="/img/visa.png" alt="imagem das formas de pagamentos aceitas" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
