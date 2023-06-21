import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import "./About.scss"
const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <Announcement />
      <div className="aboutPage">
        <h1>Sobre a ALCLISBOA. </h1>

        <p>
          Bem-vindo ao ALCLISBOA, o seu destino online para moda de alta qualidade a preços acessíveis! Fundado em 2023 por duas estudantes do 3º semestre de Engenharia de Software da UCB, Ana Luísa e Ana Gabrielle, nosso E-commerce foi criado com a visão de proporcionar uma experiência de compra única para todos os amantes da moda.
        </p>

        <p>
          Na ALCLISBOA, acreditamos que vestir-se bem e expressar seu estilo pessoal não deve ser uma tarefa difícil ou onerosa. Nossa equipe está empenhada em selecionar cuidadosamente as melhores peças de vestuário feminino, masculino e infantil, de modo a oferecer a você uma ampla variedade de opções, sempre com a garantia de qualidade e preço justo.
        </p>

        <p>
          Nossa plataforma online é intuitiva e fácil de usar, projetada para tornar sua experiência de compra o mais agradável e conveniente possível. Você pode navegar por nossas categorias de produtos, explorar as últimas tendências, filtrar por tamanho, cor ou estilo e encontrar exatamente o que procura em apenas alguns cliques.

        </p>

        <p>
          Temos orgulho de trabalhar com marcas renomadas e fornecedores confiáveis, garantindo que cada peça em nosso estoque atenda aos mais altos padrões de qualidade. Desde roupas casuais e elegantes até roupas de festa e acessórios, temos uma ampla gama de opções para atender a todos os estilos e ocasiões.
        </p>

        <p>
          Além de oferecer produtos de qualidade, estamos comprometidos em fornecer um excelente atendimento ao cliente. Nossa equipe de suporte está pronta para ajudá-lo em todas as etapas da sua jornada de compra, desde a seleção do produto até a entrega rápida e segura em sua porta. Valorizamos cada cliente e trabalhamos arduamente para garantir a sua satisfação total.
        </p>

        <p>
          Para tornar sua experiência ainda mais agradável, oferecemos opções flexíveis de pagamento e envio. Aceitamos diversas formas de pagamento, incluindo cartões de crédito, transferências bancárias e pagamentos eletrônicos, para que você possa escolher a opção mais conveniente para você. Além disso, colaboramos com parceiros logísticos confiáveis para garantir que seus produtos sejam entregues com segurança e pontualidade.
        </p>

        <p>
          Estamos constantemente atualizando nossa coleção com novas tendências e estilos para que você possa sempre encontrar algo novo e emocionante toda vez que visitar nosso E-commerce. Acreditamos que a moda é uma forma de expressão e autoconfiança, e queremos ajudar você a encontrar sua própria voz através do estilo.
        </p>

        <p>
          Explore o ALCLISBOA hoje mesmo e descubra uma maneira nova e emocionante de comprar roupas de alta qualidade a preços acessíveis. Estamos ansiosos para atendê-lo e proporcionar uma experiência de compra excepcional. Junte-se a nós e deixe-nos ajudá-lo a expressar seu estilo único com confiança!
        </p>

      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default About
