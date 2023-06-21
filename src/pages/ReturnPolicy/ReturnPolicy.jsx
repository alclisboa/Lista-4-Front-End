import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import "./ReturnPolicy.scss"
import SideBarUser from '../../components/SideBarUser/SideBarUser'

const ReturnPolicy = () => {
    return (
        <div className='ReturnPolicy'>
            <Navbar />
            <Announcement />
            <div className="ReturnPolicyPage">
            <div className="left">
                    <SideBarUser />
            </div>
            <div className="right">
                <h1>Política de Devolução da ALCLISBOA.</h1>
                <p>Na ALCLISBOA., a satisfação do cliente é nossa prioridade número um. Se por qualquer motivo você não estiver completamente satisfeito com sua compra, oferecemos uma política de devolução fácil e sem complicações.</p>
             
                <h2>Devoluções</h2>
                <p>Aceitamos devoluções dentro de 30 dias após a data de entrega. O item deve estar em sua condição original, com todas as etiquetas e tags ainda fixadas.</p>

                <h2>Trocas</h2>
                <p>Aceitamos trocas dentro de 60 dias após a data de entrega. O item deve estar em sua condição original, com todas as etiquetas e tags ainda fixadas.</p>
               
                <h2>Reembolsos</h2>
                <p>Processamos reembolsos dentro de 7 dias úteis após recebermos o item devolvido. O valor total do item será reembolsado, incluindo os custos de envio originais. No entanto, não reembolsamos os custos de envio de devolução.</p>
              
                <h2>Troca de Tamanho</h2>
                <p>Se você precisar trocar um item por um tamanho diferente, entre em contato conosco e teremos prazer em ajudá-lo a encontrar o tamanho certo.</p>
             
                <h2>Itens Danificados ou Defeituosos</h2>
                <p>Se o item que você recebeu estiver danificado ou defeituoso, entre em contato conosco imediatamente. Você pode escolher entre um reembolso ou uma troca pelo mesmo item.</p>
                <p>Lembre-se de que a política de devolução da ALCLISBOA. está sujeita a alterações sem aviso prévio. Para obter mais informações sobre como devolver um item ou solicitar uma troca, entre em contato conosco por e-mail ou telefone. Teremos prazer em ajudá-lo com qualquer dúvida ou problema que possa ter.</p>
            </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ReturnPolicy
