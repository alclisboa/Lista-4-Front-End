import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Novo Produto</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Imagem</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nome</label>
          <input type="text" placeholder="Vestido" />
        </div>
        <div className="addProductItem">
        <label>Descrição do Produto</label>
                  <input type="text" placeholder="Belle Vestido é um vestido azul incrivel..." />

                  <label>Preço inicial</label>
                  <input type="number" placeholder="R$ 279.95" />

                  <label>Preço com desconto</label>
                  <input type="number" placeholder="R$ 182.95" />
        </div>
        <button className="addProductButton">Criar</button>
      </form>
    </div>
  );
}
