import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./Wishlist.scss"
import {Link} from "react-router-dom"
import SideBarUser from '../../components/SideBarUser/SideBarUser'
import Card from '../../components/Card/Card'

const Wishlist = () => {
  const data2 = [{
    id: 5,
    img: "https://img.ltwebstatic.com/images3_pi/2022/10/10/1665389053984c8c378da165f44ab9b8593fb0f389_thumbnail_900x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/10/10/1665389055ad543abdf266caa5ccdee52641831f57_thumbnail_900x.webp",
    title: "Belle Vestido",
    oldPrice: "R$279,95",
    price: "R$182,95",
},

{
    id: 6,
    img: "https://img.ltwebstatic.com/images3_pi/2022/12/13/1670896822f8b6a5194258c256cc6b6ae244384549_thumbnail_900x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/12/13/16708968231869add00cea799e87ee126cbccc1b82_thumbnail_900x.webp",
    title: "Brincos pendentes decoração de strass",
    oldPrice: "R$30,78",
    price: "R$10,99",
},

{
    id: 7,
    img: "https://img.ltwebstatic.com/images3_pi/2023/04/04/168060207049612c1418c0577818288707bcd67f98_thumbnail_900x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2023/04/04/16806020653549947655dbbdfb71938994613fd25d_thumbnail_900x.webp",
    title: "CUCCOO Trending Bombas",
    oldPrice: "R$185,50",
    price: "R$132,90",
},

{
    id: 8,
    img: "https://img.ltwebstatic.com/images3_pi/2022/08/29/16617380401ce8367a31c962750f04703e2dd2a678_thumbnail_900x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/08/29/1661738106754899c93b974729b8eadf58af741f22_thumbnail_900x.webp",
    title: "Mini decoração de strass Bolsa de noite cadeia Saco de caixa",
    oldPrice: "R$730,97",
    price: "R$476,95",
},

{
    id: 9,
    img: "https://img.ltwebstatic.com/images3_pi/2022/11/24/166928175256ffdee31d62dfcc832f3dc143830f7c_thumbnail_900x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2022/11/24/1669281754c333e5e4cff01a6ec729e372dacd864d_thumbnail_900x.webp",
    title: "Anel de punho com design de folha decorativa de zircônia cúbica",
    oldPrice: "R$10,78",
    price: "R$8,90",
},

{
  id: 10,
  img: "https://img.ltwebstatic.com/images3_pi/2023/02/08/167582144424d9b62a777d7a099d836634c6da4167_thumbnail_900x.webp",
  img2: "https://img.ltwebstatic.com/images3_pi/2023/02/08/16758214407cc4cfcc81dd5213a96377a1dbf8fcd9_thumbnail_900x.webp",
  title: "Gargantilha vidro decoração de predas azuis",
  oldPrice: "R$8,59",
  price: "R$6,99",
},
]

  return (
    <div className='wishlist'>
      <Navbar />
      <Announcement />
      <h1>MINHA LISTA DE DESEJOS</h1>
      <div className="wishlistDiv">
        <div className="left">
          <SideBarUser />
        </div>
        <div className="right">
        <Link className="link" to={`/product/:id`}>
          <div className="productsList">
          {data2.map(item => (
            <FavoriteBorderOutlinedIcon className="Icon"/>,
            <Card item={item} key={item.id} />
            ))}
          </div>
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Wishlist
