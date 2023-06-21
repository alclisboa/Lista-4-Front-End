import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">

            <div className="container">
                <div className="imgCategories">
                    <img
                        src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                </div>
                <div className="infoCategories">
                    <h2 className="titleInfo">FEMININO</h2>
                    <button>
                        <Link className="link" to="/products/1">
                            COMPRE AGORA
                        </Link>
                    </button>
                </div>
            </div>
            
            <div className="container">
                <div className="imgCategories">
                    <img
                        src="/img/infantil.png"
                        alt=""
                    />
                </div>
                <div className="infoCategories">
                    <h2 className="titleInfo">INFANTIL</h2>
                    <button>
                        <Link className="link" to="/products/1">
                            COMPRE AGORA
                        </Link>
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="imgCategories">
                    <img
                        src="https://hering.vtexassets.com/arquivos/ids/530832-800-auto?v=638065871830770000&width=800&height=auto&aspect=true"
                        alt=""
                    />
                </div>
                <div className="infoCategories">
                    <h2 className="titleInfo">MASCULINO</h2>
                    <button>
                        <Link className="link" to="/products/1">
                            COMPRE AGORA
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        
    );
};

export default Categories;