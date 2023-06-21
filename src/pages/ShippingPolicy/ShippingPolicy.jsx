import React from 'react'
import "./ShippingPolicy.scss"
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import Announcement from '../../components/Announcement/Announcement'
import Navbar from '../../components/Navbar/Navbar'
import SideBarUser from '../../components/SideBarUser/SideBarUser'

const ShippingPolicy = () => {
    return (
        <div className='ShippingPolicy'>
            <Navbar/>
            <Announcement/>
            <div className="ShippingPolicyPage">
            <div className="left">
                    <SideBarUser />
            </div>
            <div className="right">
            <h1>Política de envio da ALCLISBOA.:</h1>
            <p>Na ALCLISBOA., nossa equipe está comprometida em oferecer aos nossos clientes uma experiência de compra excepcional. Isso inclui garantir que seus pedidos sejam enviados com segurança e cheguem no prazo esperado. Para garantir uma experiência de envio suave e confiável, oferecemos as seguintes opções de envio:</p>
           
            <ul>
                <li>Envio Padrão: Oferecemos envio padrão para todo o Brasil. Os pedidos serão processados em até 2 dias úteis e entregues em até 7 dias úteis, dependendo da localização. Os custos de envio variam de acordo com o peso e a dimensão do pacote, e são exibidos no momento da finalização da compra.</li>
                <li>Envio Expresso: Oferecemos envio expresso para todo o Brasil. Os pedidos serão processados em até 2 dias úteis e entregues em até 3 dias úteis, dependendo da localização. Os custos de envio variam de acordo com o peso e a dimensão do pacote, e são exibidos no momento da finalização da compra.</li>
                <li>Envio Internacional: Oferecemos envio internacional para países selecionados. Os pedidos serão processados em até 2 dias úteis e entregues em até 14 dias úteis, dependendo da localização. Os custos de envio variam de acordo com o peso e a dimensão do pacote, bem como o destino, e são exibidos no momento da finalização da compra.</li>
            </ul>
            
            <p>Nós nos orgulhamos de trabalhar com transportadoras confiáveis ​​para garantir que seus pedidos sejam entregues com segurança e no prazo previsto. Todos os pacotes são enviados com seguro e rastreamento para sua tranquilidade.</p>
            <p>O prazo de entrega pode ser afetado por fatores externos, como condições climáticas, feriados e atrasos no serviço postal. Envidaremos nossos melhores esforços para entregar seu pedido no prazo previsto, mas não nos responsabilizamos por atrasos além do nosso controle.</p>
            <p>Os custos de envio são calculados com base no peso e nas dimensões do pacote, bem como no destino do envio. Eles serão exibidos no momento da finalização da compra e podem variar de acordo com a opção de envio selecionada.</p>
            <p>Lembre-se de que a política de envio da ALCLISBOA. está sujeita a alterações sem aviso prévio. Para obter mais informações sobre o envio de pedidos ou para rastrear o status do seu pedido, entre em contato conosco por e-mail ou telefone. Teremos prazer em ajudá-lo com qualquer dúvida ou problema que possa ter.</p>
            <p>Esperamos que você tenha uma ótima experiência de compra conosco!</p>
        </div>
        </div>
        <Newsletter/>
        <Footer/>
        </div>
    )
}

export default ShippingPolicy
