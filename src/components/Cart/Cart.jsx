import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

const Cart = () => {
    const data = [
        {
            id: 9,
            img: "https://img.ltwebstatic.com/images3_pi/2022/12/13/1670896822f8b6a5194258c256cc6b6ae244384549_thumbnail_900x.webp",
            title: "Brincos pendentes decoração de strass",
            desc: "Estes brincos longos de strass são elegantes e brilhantes, feitos de uma corrente fina e delicada em metal banhado a prata que se estende por cerca de 7 centímetros. Com strass cristalizados de alta qualidade dispostos em uma cascata de tamanhos e cortes variados, esses brincos criam um efeito de camadas de brilho e textura. Eles são leves, confortáveis de usar e possuem fechos de pressão seguros para garantir que fiquem no lugar durante todo o evento. Perfeitos para qualquer roupa formal ou de festa.",
            oldPrice: "R$30,78",
            price: "R$10,99",
        },
        {
            id: 9,
            img: "https://img.ltwebstatic.com/images3_pi/2022/10/10/1665389053984c8c378da165f44ab9b8593fb0f389_thumbnail_900x.webp",
            title: " Belle Vestido",
            desc: "O vestido Belle Cami apresenta um design moderno e elegante. Com uma bainha alta baixa e sobreposição de malha, este vestido é perfeito para eventos formais ou ocasiões especiais. A parte superior possui alças finas e um decote em V, enquanto a saia é fluida e delicada, proporcionando um movimento gracioso ao caminhar. O tecido é suave e confortável, e a cor azul celeste torna este vestido fácil de combinar com acessórios. Ideal para quem procura um look sofisticado e moderno.",
            oldPrice: "R$279,95",
            price: "R$182,95",
        },
    ]
    return (
        <div className='cart'>
            <h1>PRODUTOS DO SEU CARRINHO</h1>
            {data?.map((item) => (
                <div className="item" key={item.id} >
                    <img src={item.img} alt='imagem de um produto add ao carrinho' />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>1 x R${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className="delete" />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>R$193,94</span>
            </div>
            <div className="buttonsBag">
            <button className='button1'><a className='link' href="/seeCart">VER CARRINHO</a></button>
            <button className='button2'><a className='link' href="/checkout">FINALIZAR COMPRA</a></button>
            </div>
        </div>
    )
}

export default Cart
