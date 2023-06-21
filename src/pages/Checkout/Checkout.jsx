import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import "./Checkout.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Checkout = () => {
    const [quantity, setQuantity] = useState(1);
    const data3 = [{
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
        <div className='Checkout'>
            <Navbar />
            <Announcement />
            <div className="CheckoutPag">
                <div className="checkout-header">
                    <h2>FINALIZAÇÃO DE COMPRA</h2>
                </div>
                <div className="checkout-content">
                    <form>
                    <h3>Resumo do Pedido</h3>
                        <div className="order-summary">
                            {data3.map((item) => (
                                <div className="item" key={item.id} >
                                    <img className="imgProduct" src={item.img} alt='imagem de um produto add ao carrinho' />
                                    <div className="details">
                                        <h1>{item.title}</h1>
                                        <p>{item.desc}</p>
                                        <div className="quantity">
                                            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                                            {quantity}
                                            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                                        </div>
                                        <div className='price'>1 x R${item.price}</div>
                                    </div>
                                    <DeleteOutlinedIcon className="delete" />
                                </div>
                            ))}
                        </div>
                        
                        <h3>Informações de Entrega</h3>
                        <div className="form-group">
                            <label htmlFor="name">Nome completo:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Endereço:</label>
                            <input type="text" id="address" name="address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">Cidade:</label>
                            <input type="text" id="city" name="city" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">CEP:</label>
                            <input type="text" id="zip" name="zip" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefone:</label>
                            <input type="text" id="phone" name="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" />
                        </div>

                        <h3>Método de Entrega</h3>
                        <div className="form-group">
                            <label htmlFor="shipping">Opções de envio:</label>
                            <select id="shipping" name="shipping">
                                <option value="standard">Entrega Padrão</option>
                                <option value="express">Entrega Expressa</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="notes">Notas adicionais:</label>
                            <textarea id="notes" name="notes" rows="4"></textarea>
                        </div>

                        <h3>Informações de Pagamento</h3>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Número do Cartão de Crédito:</label>
                            <input type="text" id="cardNumber" name="cardNumber" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardHolder">Nome do Titular do Cartão:</label>
                            <input type="text" id="cardHolder" name="cardHolder" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiration">Data de Validade:</label>
                            <input type="text" id="expiration" name="expiration" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV:</label>
                            <input type="text" id="cvv" name="cvv" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="billingAddress">Endereço de Cobrança:</label>
                            <input type="text" id="billingAddress" name="billingAddress" />
                        </div>

                        <br />
                        <button type="submit">Finalizar Pedido</button>
                    </form>
                </div>

            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Checkout
