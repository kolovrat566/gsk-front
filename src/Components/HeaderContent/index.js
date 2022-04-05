// import './HeaderContent.scss'
import logo from '../../img/logo.svg'
import basket from '../../img/icon/basket_light.svg'

export const HeaderContent = ({path, title, isSearch = false}) => {

  return (
    <header class="content-head">
    <div class="container">
        <nav class="navbar navbar-expand-lg ">
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a class="nav-link" href="/about">О компании</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/catalog">Каталог товаров</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/price">Цены</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/arcticle">Статьи</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="top-rh">
            <button class="btn sidb d-inline-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="sr-only"></span>
            </button>
            <a href="#" class="d-flex align-items-center">
                <img class="logo" src={logo} alt=""/>
            </a>
            <a href="#" class="d-flex align-items-center basket">
                <img class="" src={basket} alt="" onClick={() => window.location='/basket'}/>
            </a>
        </div>
    </div>
</header>
  )
}