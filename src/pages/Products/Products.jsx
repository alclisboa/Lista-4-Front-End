import React from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'

const Products = () => {

  return (
    <div className='products'>
      <Navbar />
      <Announcement />
      <div className="productsPage">
        <div className="left">
          <div className="filterItem">
            <div className="filterCategory">
              <h2>Categorias:</h2>
              <div className="inputItem">
                <input type='checkbox' id="1" value={1} />
                <label htmlFor="1">Bermudas</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="2" value={2} />
                <label htmlFor="2">Blazeres</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="3" value={3} />
                <label htmlFor="3">Blusas</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="4" value={4} />
                <label htmlFor="4">Bodies</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="5" value={5} />
                <label htmlFor="5">Bolsas</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="6" value={6} />
                <label htmlFor="6">Blusões</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="7" value={7} />
                <label htmlFor="7">Bonés</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="8" value={8} />
                <label htmlFor="8">Cachecóis</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="9" value={9} />
                <label htmlFor="9">Calças</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="10" value={10} />
                <label htmlFor="10">Camisas</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="11" value={11} />
                <label htmlFor="11">Cardigans</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="12" value={12} />
                <label htmlFor="12">Carteiras</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="13" value={13} />
                <label htmlFor="13">Casacos</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="14" value={14} />
                <label htmlFor="14">Cintos</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="15" value={15} />
                <label htmlFor="15">Coletes</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="16" value={16} />
                <label htmlFor="16">Gorros</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="17" value={17} />
                <label htmlFor="17">Jaquetas</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="18" value={18} />
                <label htmlFor="18">Kimonos</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="19" value={19} />
                <label htmlFor="19">Legging</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="20" value={20} />
                <label htmlFor="20">Lenços</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="21" value={21} />
                <label htmlFor="21">Macacões</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="22" value={22} />
                <label htmlFor="22">Meias</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="23" value={23} />
                <label htmlFor="23">Polos</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="24" value={24} />
                <label htmlFor="24">Regatas</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="25" value={25} />
                <label htmlFor="25">Saias</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="26" value={26} />
                <label htmlFor="26">Shorts</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="27" value={27} />
                <label htmlFor="27">Shorts Saia</label>
              </div>

              <div className="inputItem">
                <input type='checkbox' id="28" value={28} />
                <label htmlFor="28">Vestidos</label>
              </div>

              <div className="filterItem">
                <h2>Cor:</h2>
                <div className="inputItem">
                  <input type='checkbox' id="amarelo" value={1} />
                  <label htmlFor="amarelo">Amarelo</label>
                </div>

                <div className="inputItem">
                  <input type='checkbox' id="alaranjado" value={1} />
                  <label htmlFor="alaranjado">Alaranjado</label>
                </div>

                <div className="inputItem">
                  <input type='checkbox' id="azul" value={1} />
                  <label htmlFor="azul">Azul</label>
                </div>

                <div className="inputItem">
                  <input type='checkbox' id="bege" value={1} />
                  <label htmlFor="bege">Bege</label>
                </div>

                <div className="inputItem">
                  <div className="searchContainer">
                    <input type='checkbox' id="marrom" value={1} />
                    <label htmlFor="marrom">Marrom</label>
                  </div>
                </div>

                <div className="inputItem">
                  <input type='checkbox' id="preto" value={1} />
                  <label htmlFor="preto">Preto</label>
                </div>

                <div className="inputItem">
                  <input type='checkbox' id="verde" value={1} />
                  <label htmlFor="verde">Verde</label>
                </div>

                <div className="inputItem">
                  <input type='checkbox' id="vermelho" value={1} />
                  <label htmlFor="vermelho">Vermelho</label>
                </div>
              </div>

              <div className="filterItem">
                <h2>Faixa de Preço:</h2>
                <div className="inputItem">
                  <span>1,99</span>
                  <input type='range' min={1.99} max={500} />
                  <span>500</span>
                </div>

              </div>
              <div className="filterItem">
                <h2>Ordenar Por:</h2>
                <div className="inputItem">
                  <input type="radio" id="asc" value="asc" name="price" />
                  <label htmlFor="asc">Preço (mais alto primeiro)</label>
                </div>
                <div className="inputItem">
                  <input type="radio" id="desc" value="desc" name="price" />
                  <label htmlFor="desc">Preço (mais baixo primeiro)</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img className='catImg' src="https://images.pexels.com/photos/3418400/pexels-photo-3418400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="productsList">
            <List />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Products
