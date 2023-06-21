import React from 'react'
import "./List.scss"
import Card from '../Card/Card'

const List = () => {
    const data = [{
        id: 1,
        img: "https://img.ltwebstatic.com/images3_pi/2022/10/10/1665389053984c8c378da165f44ab9b8593fb0f389_thumbnail_900x.webp",
        img2: "https://img.ltwebstatic.com/images3_pi/2022/10/10/1665389055ad543abdf266caa5ccdee52641831f57_thumbnail_900x.webp",
        title: " Belle Vestido",
        oldPrice: "R$279,95",
        price: "R$182,95",
    },

    {
        id: 2,
        img: "https://img.ltwebstatic.com/images3_pi/2023/04/01/1680319095d0178f7a09bcbddf2c40461bf415f268.webp",
        img2: "https://img.ltwebstatic.com/images3_pi/2023/04/01/1680319098ecb1c9d506ddd876b1b8e4642d42d262.webp",
        title: "Vestido impressão floral",
        oldPrice: "R$375,50",
        price: "R$231,90",
    },

    {
        id: 3,
        img: "https://img.ltwebstatic.com/images3_pi/2022/08/09/1660025269dd05585e86b5c3e5a04cbde9d8ceba37.webp",
        img2: "https://img.ltwebstatic.com/images3_pi/2022/08/09/16600252715bc5d1960ae466d5c42ff3af3be349be_thumbnail_900x.webp",
        title: "Vestido Cami",
        oldPrice: "R$241,90",
        price: "R$112,99",
    },

    {
        id: 4,
        img: "https://img.ltwebstatic.com/images3_pi/2022/09/06/1662445403c94323032163057124618ec5f4dabfaa.webp",
        img2: "https://img.ltwebstatic.com/images3_pi/2022/09/06/1662445404d2f78303d4e3e4c97493918f2be569e3.webp",
        title: "Simplee Mais Vestidos Manga da lanterna",
        oldPrice: "R$230,90",
        price: "R$112,99",
    },

    ]

    const data2 = [{
        id: 5,
        img: "https://img.ltwebstatic.com/images3_pi/2023/01/30/167504124636c1c72b5d3037ed21f2aa696ba2e6cc.webp",
        img2: "https://img.ltwebstatic.com/images3_pi/2023/01/30/16750412486aee28c48f149b6f7b45aeaebe31d8c3_thumbnail_900x.webp",
        title: "DAZY homens Camisa",
        oldPrice: "R$137,95",
        price: "R$91,95",
    },

    {
        id: 6,
        img: "https://img.ltwebstatic.com/images3_pi/2023/02/17/1676620298282a7e5ff7c5882545acc284a8a76513_thumbnail_900x.webp",
        img2: "https://img.ltwebstatic.com/images3_pi/2023/02/17/1676620303c15e880281d2fa50dc7bcad22800b8ae.webp",
        title: "Meninas da criança Vestido",
        oldPrice: "R$241,90",
        price: "R$78,99",
    },

    {
        id: 7,
        img: "https://img.ltwebstatic.com/images3_pi/2023/04/20/168196032287e161927c789cd777fa09e84e9f9a5e_thumbnail_900x.webp",
        img2: "https://img.ltwebstatic.com/images3_pi/2023/04/20/16819603259c8c9bba3fdadc8889121969a558153e_thumbnail_900x.webp",
        title: "ROMWE Street Life rapazes",
        oldPrice: "R$275,50",
        price: "R$111,90",
    },

    {
        id: 8,
        img: "https://img.ltwebstatic.com/images3_pi/2022/07/18/165813774333533985c632c1e9366e3d968ee05ab9_thumbnail_900x.webp",
        img2: "https://img.ltwebstatic.com/images3_pi/2022/07/18/1658137747c576add40d2170a939353db77911d452_thumbnail_900x.webp",
        title: "Bebê 3D Camisola de dormir Flanela",
        oldPrice: "R$130,97",
        price: "R$72,99",
    },

    {
        id: 9,
        img: "https://img.ltwebstatic.com/images3_pi/2022/12/13/1670896822f8b6a5194258c256cc6b6ae244384549_thumbnail_900x.webp",
        img2: "https://img.ltwebstatic.com/images3_pi/2022/12/13/16708968231869add00cea799e87ee126cbccc1b82_thumbnail_900x.webp",
        title: "Brincos pendentes decoração de strass",
        oldPrice: "R$30,78",
        price: "R$10,99",
    },
    ]

    return (
        <div className='list'>
            {data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
            {data2.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List
