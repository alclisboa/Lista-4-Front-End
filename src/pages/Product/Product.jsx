import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Cart from '../../components/Cart/Cart';
import React, { useState } from 'react';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://img.ltwebstatic.com/images3_pi/2022/12/13/1670896822f8b6a5194258c256cc6b6ae244384549_thumbnail_900x.webp",
    "https://img.ltwebstatic.com/images3_pi/2022/12/13/16708968231869add00cea799e87ee126cbccc1b82_thumbnail_900x.webp",
  ];

  const [open, setOpen] = useState(false)
  return (
    <div className='product'>
      <Navbar />
      <Announcement />
      <div className='productPage'>
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
            <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>Brincos decoração de strass</h1>
          <span className='price'>R$10,99</span>
          <p>
            Adicione um toque de brilho e elegância à sua aparência com estes deslumbrantes brincos longos de strass!
          </p>
          <div className="quantity">
            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
            {quantity}
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>

          <div className="cartIcon" onClick={()=>setOpen(!open)}>
          <button className="add">
            <AddShoppingCartIcon /> ADICIONE AO CARRINHO
          </button>
          {open && <Cart/>}
          </div>

          <div className="linkAdd">
            <a className='link' href="/wishlist">
              <div className="item">
                <FavoriteIcon /> ADICIONE A LISTA DE DESEJOS
              </div>
            </a>
          </div>

          <div className="info">
            <span>Vendedor: Elizabete Shein</span>
            <span>Tipo de Produto: Acessório</span>
            <span>Tag: Acessorio, Feminino, Brinco</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIÇÃO E INFORMAÇÔES ADICIONAIS: </span>
            <p>
              Estes brincos longos de strass são elegantes e brilhantes, feitos de uma corrente fina e delicada em metal banhado a prata que se estende por cerca de 7 centímetros. Com strass cristalizados de alta qualidade dispostos em uma cascata de tamanhos e cortes variados, esses brincos criam um efeito de camadas de brilho e textura. Eles são leves, confortáveis de usar e possuem fechos de pressão seguros para garantir que fiquem no lugar durante todo o evento. Perfeitos para qualquer roupa formal ou de festa.
            </p>
          </div>
        </div>

      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Product
