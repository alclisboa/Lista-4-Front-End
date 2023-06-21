import "./SideBarUser.scss";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const SideBarUser = () => {

    return (
        <div className='sideBarUser'>
            <div class="sidebar  has-scrollbar" data-mobile-menu>
                <div class="sidebar-category">
                    <div class="sidebar-top">
                        <h2 class="sidebar-title">Centro Pessoal</h2>
                        <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                        </button>
                    </div>

                    <ul class="sidebar-menu-category-list">
                        <li class="sidebar-menu-category">
                            <button class="sidebar-accordion-menu" data-accordion-btn>
                                <div class="menu-title-flex">
                                    <p class="menu-title">Minha Conta</p>
                                </div>

                                <div className='icons'>
                                    <AddIcon name="add-outline" class="add-icon" />
                                    <RemoveIcon name="remove-outline" class="remove-icon"/>
                                </div>

                            </button>

                            <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name">Meu Perfil</p>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name">Livro De Endereços</p>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name">Gerenciar Minha Conta</p>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="sidebar-menu-category">

                            <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <p class="menu-title">Meus Pedidos</p>
                                </div>

                                <div className='icons'>
                                    <AddIcon name="add-outline" class="add-icon" />
                                    <RemoveIcon name="remove-outline" class="remove-icon"/>
                                </div>

                            </button>

                            <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name">Todos Os Pedidos</p>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name">Pedidos Não Pagos</p>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name">Processando Pedidos</p>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name">Pedidos Enviados</p>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name"> Revisão De Pedidos</p>
                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name">Devolução De Pedidos</p>
                                    </a>
                                </li>
                            </ul>

                        </li>

                        <li class="sidebar-menu-category">

                            <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <p class="menu-title">Minha Lista de Desejos</p>
                                </div>

                                <div className='icons'>
                                    <AddIcon name="add-outline" class="add-icon" />
                                    <RemoveIcon name="remove-outline" class="remove-icon"/>
                                </div>

                            </button>

                            <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name"><a href="/wishlist">Lista De Desejos</a></p>

                                    </a>
                                </li>

                            </ul>

                        </li>

                        <li class="sidebar-menu-category">

                            <button class="sidebar-accordion-menu" data-accordion-btn>

                                <div class="menu-title-flex">
                                    <p class="menu-title">Política</p>
                                </div>

                                <div className='icons'>
                                    <AddIcon name="add-outline" class="add-icon" />
                                    <RemoveIcon name="remove-outline" class="remove-icon"/>
                                </div>

                            </button>

                            <ul class="sidebar-submenu-category-list" data-accordion>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name"><a href="/shippingPolicy">Política De Envio</a></p>

                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name"><a href="/returnPolicy" >Política De Devolução</a></p>

                                    </a>
                                </li>

                                <li class="sidebar-submenu-category">
                                    <a href="#" class="sidebar-submenu-title">
                                        <p class="product-name"><a href="/politic" >Política De Privacidade E Cookies</a></p>

                                    </a>
                                </li>
                           </ul>
                        </li>
                    </ul>
                    <a href="/login" class="sairEcomerce"><h3>SAIR</h3></a>
                </div>
            </div>
            
        </div>
    )
}

export default SideBarUser
