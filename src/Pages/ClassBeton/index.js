

export const ClassBeton = () => {

  return (
    <html lang="ru">
    
    <body>
    
        <header class="content-head">
    
    
            <div class="container">
    
                <nav class="navbar navbar-expand-lg ">
    
    
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link" href="#about">О компании</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#uslugi">Каталог товаров</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#tab3">Цены</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#tab3">Статьи</a>
                            </li>
                        </ul>
    
                    </div>
    
                </nav>
                <div class="top-rh">
                    <button class="btn sidb d-inline-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="sr-only"></span>
                    </button>
    
                    <a href="#" class="d-flex align-items-center">
                        <img class="logo" src="img/logo.svg" alt=""/>
                    </a>
                    <a href="#" class="d-flex align-items-center basket">
                        <img class="" src="img/icon/Basket_light.svg" alt=""/>
                    </a>
                </div>
            </div>
        </header>
    
    
        <section class="articles">
      
            <div class="container">
                <div class="row name-row">
                    <div class="name-row-item">
                        <h1>Статьи /   Применение бетона</h1>
                    </div>
                </div>
                <hr/>
                <div class="row  justify-content-between row-cols-1 row-cols-sm-2 row-cols-md-2 ">
                    <div class="article">
                        <div class="article-title"> Как определяется класс бетона?</div>
                        <img src="img/atc1.png" class="img-article" alt="" />
                        <div class="article-footer">
                            <div class="article-t">Классы бетона</div>
                            <button class="btn org">Читать полностью</button>
                        </div>
                    </div>
                    <div class="article">
                        <div class="article-title"> Как определяется класс бетона?</div>
                        <img src="img/atc2.png" class="img-article" alt="" />
                        <div class="article-footer">
                            <div class="article-t">Классы бетона</div>
                            <button class="btn org">Читать полностью</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="slick/slick.js" charset="utf-8"></script>
        <script src="dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/main.js"></script>
        <script src="dist/jquery.fancybox.min.js"></script>
        <script src="dist/js/popper.min.js"></script>
    </body>
    
    </html>
  )
}