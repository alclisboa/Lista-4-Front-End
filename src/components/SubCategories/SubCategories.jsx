import React from 'react'
import { Link } from "react-router-dom";
import "./SubCategories.scss";

const SubCategories = () => {
    return (
        <div className='Subcategories'>
            <div className="container">
                <div className="imgSubCategories">
                    <img
                        src="https://images.pexels.com/photos/944761/pexels-photo-944761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
                <div className="infoCategories">
                    <h2 className="titleInfo">BOLSAS E ACESSORIOS </h2>
                    <button>
                        <Link className="link" to="/products/5">
                            COMPRE AGORA
                        </Link>
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="imgSubCategories">
                    <img
                        src="/img/sapato.png"
                        alt=""
                    />
                </div>
                <div className="infoCategories">
                    <h2 className="titleInfo">SAPATOS</h2>
                    <button>
                        <Link className="link" to="/products/4">
                            COMPRE AGORA
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubCategories
