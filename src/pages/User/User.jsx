import React from 'react'
import "./User.scss"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import SideBarUser from '../../components/SideBarUser/SideBarUser'

const User = () => {
    const data = [
        {
            id: 9,
            img: "https://img.ltwebstatic.com/images3_pi/2022/12/13/1670896822f8b6a5194258c256cc6b6ae244384549_thumbnail_900x.webp",
            title: "Brincos pendentes decoração de strass",
            desc: "Estes brincos longos de strass são elegantes e brilhantes, feitos de uma corrente fina e delicada em metal banhado a prata que se estende por cerca de 7 centímetros. Com strass cristalizados de alta qualidade dispostos em uma cascata de tamanhos e cortes variados, esses brincos criam um efeito de camadas de brilho e textura. Eles são leves, confortáveis de usar e possuem fechos de pressão seguros para garantir que fiquem no lugar durante todo o evento. Perfeitos para qualquer roupa formal ou de festa.",
            oldPrice: "R$30,78",
            price: "R$10,99",
        },
    ]
    const data2 = [
        {

            id: 9,
            img: "https://img.ltwebstatic.com/images3_pi/2022/10/10/1665389053984c8c378da165f44ab9b8593fb0f389_thumbnail_900x.webp",
            title: "Belle Vestido Cami - Azul Celeste",
            desc: "O vestido Belle Cami apresenta um design moderno e elegante. Com uma bainha alta baixa e sobreposição de malha, este vestido é perfeito para eventos formais ou ocasiões especiais. A parte superior possui alças finas e um decote em V, enquanto a saia é fluida e delicada, proporcionando um movimento gracioso ao caminhar. O tecido é suave e confortável, e a cor azul celeste torna este vestido fácil de combinar com acessórios. Ideal para quem procura um look sofisticado e moderno.",
            oldPrice: "R$279,95",
            price: "R$182,95",
        },
    ]
    return (
        <div className='user'>
            <Navbar />
            <Announcement />
            <div className="userPage">
                <div className="left">
                    <SideBarUser />
                </div>
                <div className="right">
                    <div className="meuPerfil">
                        <h3>Minhas informações</h3>
                        <h4>Edite suas informações se assim desejar</h4>
                        <form>
                            <input placeholder="Nome: (User)" />
                            <input placeholder="Sobrenome: (Sobrenome do user)" />
                            <input placeholder="Nome de usuário: (UserName)" />
                            <input placeholder="E-mail: (E-mail do user) " />
                            <input placeholder="Senha: (Senha do user)" />
                            <input placeholder="Confirme sua senha para altera-la" />

                            <button><a className='link' href="/">EDITAR</a></button>
                        </form>
                    </div>

                    <div className="meusPedidos">
                        <h3>Meus Pedidos</h3>
                        <div className="produtosComprados">
                            <p className="dataPedido">28 Janeiro 2023 13:31:28</p>
                            {data?.map((item) => (
                                <div className="item" key={item.id}>
                                    <img src={item.img} alt='imagem de um produto add ao carrinho' />
                                    <div className="details">
                                        <h1>{item.title}</h1>
                                        <div className='price'>R${item.price}</div>
                                        <p>Quantidade: 1 unidade</p>
                                        <p>Status: Entregue</p>
                                        <a href='/product/:id'>Detalhes do Produto</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="produtosComprados">
                            <p className="dataPedido">10 Janeiro 2023 11:57:28</p>
                            {data2.map((item) => (
                                <div className="item" key={item.id}>
                                    <img src={item.img} alt='imagem de um produto add ao carrinho' />
                                    <div className="details">
                                        <h1 className='title'>{item.title}</h1>
                                        <div className='price'>R${item.price}</div>
                                        <p>Quantidade: 1 unidade</p>
                                        <p>Status: Entregue</p>
                                        <a href='/product/:id'>Detalhes do Produto</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default User
