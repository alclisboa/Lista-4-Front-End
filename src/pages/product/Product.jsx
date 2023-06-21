import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Produtos</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Criar</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Vendas" title="Performance de vendas"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://img.ltwebstatic.com/images3_pi/2022/10/10/1665389055ad543abdf266caa5ccdee52641831f57_thumbnail_900x.webp" alt="" className="productInfoImg" />
                  <span className="productName">Belle Vestido</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">vendas:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">em stock:</span>
                      <span className="productInfoValue">sim</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nome do Produto</label>
                  <input type="text" placeholder="Belle Vestido" />
                  
                  <label>Descrição do Produto</label>
                  <input type="text" placeholder="Belle Vestido é um vestido azul incrivel..." />

                  <label>Preço inicial</label>
                  <input type="number" placeholder="R$ 279.95" />

                  <label>Preço com desconto</label>
                  <input type="number" placeholder="R$ 182.95" />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://img.ltwebstatic.com/images3_pi/2022/10/10/1665389055ad543abdf266caa5ccdee52641831f57_thumbnail_900x.webp" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Atualizar</button>
              </div>
          </form>
      </div>
    </div>
  );
}
