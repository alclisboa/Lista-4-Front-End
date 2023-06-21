import React from 'react'
import "./Politic.scss"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import SideBarUser from '../../components/SideBarUser/SideBarUser'
const Politic = () => {
    return (
        <div className='politic'>
            <Navbar />
            <Announcement />
            <div className="politicPage">
                <div className="left">
                    <SideBarUser />
                </div>
                <div className="right">
                    <h1>Política de Privacidade</h1>
                    <p>A proteção da privacidade dos nossos clientes é uma das principais prioridades da ALCLISBOA. Por isso, desenvolvemos esta política de privacidade para explicar como coletamos, usamos, compartilhamos e protegemos as informações dos nossos clientes. Ao visitar ou utilizar o nosso site, você concorda com as práticas descritas nesta política.</p>

                    <h2>1. Informações Coletadas</h2>

                    <p>Para realizar compras em nosso e-commerce, coletamos as seguintes informações:</p>

                    <ul>
                        <li>Nome completo</li>
                        <li>Endereço de e-mail</li>
                        <li>Endereço de entrega</li>
                        <li>Informações de pagamento, como número do cartão de crédito e data de validade</li>
                        <li>Informações de cobrança, como o endereço associado ao cartão de crédito</li>
                    </ul>

                    <p>Além disso, coletamos automaticamente informações sobre a navegação do cliente em nosso site, como endereço IP, tipo de navegador, tempo de visita e páginas visitadas. Usamos cookies e outras tecnologias de rastreamento para personalizar a experiência do cliente e melhorar a funcionalidade do nosso site.</p>

                    <h2>2. Uso das Informações</h2>
                    <p>Usamos as informações coletadas para:</p>

                    <ul>
                        <li>Processar pedidos e realizar entregas</li>
                        <li>Fornecer suporte ao cliente</li>
                        <li>Enviar comunicações de marketing, como promoções e ofertas especiais</li>
                        <li>Melhorar a experiência do cliente em nosso site</li>
                        <li>Cumprir com obrigações legais e regulatórias</li>
                    </ul>

                    <h2>3. Compartilhamento de Informações</h2>

                    <p>Não compartilhamos as informações dos nossos clientes com terceiros, exceto em circunstâncias limitadas, como quando exigido por lei ou para cumprir com uma ordem judicial.</p>

                    <p>Trabalhamos com provedores de serviços terceirizados para processar pagamentos, enviar e-mails e fornecer suporte ao cliente. Esses provedores de serviços terceirizados têm acesso limitado às informações dos nossos clientes, apenas para realizar as suas funções. Nós exigimos que esses provedores de serviços terceirizados cumpram com as leis e regulamentos aplicáveis de proteção de dados.</p>

                    <h2>4. Proteção de Informações</h2>

                    <p>Tomamos medidas de segurança técnicas e organizacionais apropriadas para proteger as informações dos nossos clientes contra perda, uso indevido, acesso não autorizado, divulgação, alteração ou destruição. Isso inclui o uso de criptografia para proteger informações de pagamento e o armazenamento de informações em servidores seguros.</p>

                    <h2>5. Cookies e Tecnologias de Rastreamento</h2>

                    <p>Usamos cookies e outras tecnologias de rastreamento para personalizar a experiência do cliente e melhorar a funcionalidade do nosso site. Os clientes podem gerenciar suas preferências de cookies em nosso site. Além disso, usamos ferramentas de análise de terceiros para monitorar o desempenho do nosso site e melhorar a sua funcionalidade.</p>

                    <h2>6. Links para Sites de Terceiros</h2>

                    <p>Nosso site pode conter links para sites de terceiros, como provedores de pagamento e redes sociais. Esses sites têm suas próprias políticas de privacidade e não somos responsáveis pelo conteúdo ou práticas desses sites. Recomendamos que os nossos clientes leiam atentamente as políticas de privacidade desses sites antes de compartilhar informações pessoais.</p>

                    <h2>7. Alterações na Política</h2>

                    <p>Reservamos o direito de atualizar ou modificar esta política de privacidade a qualquer momento. Notificaremos os nossos clientes sobre quaisquer alterações significativas nesta política, publicando um aviso em destaque em nosso site ou enviando uma notificação por e-mail. Recomendamos que os nossos clientes revisem esta política de privacidade periodicamente para se manterem informados sobre como estamos protegendo suas informações pessoais.</p>

                    <p>Se você tiver alguma dúvida ou preocupação sobre esta política de privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco através do e-mail contato@alclisboa.com. Faremos o possível para resolver suas dúvidas ou preocupações o mais rápido possível.</p>

                    <div className="buttonContact">
                        <button><a href="mailto:contato@alclisboa.com">Entre em contato</a></button>
                    </div>

                    <p><br /></p>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Politic
