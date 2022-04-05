import { HeaderContent } from "../../Components/HeaderContent"

import widget from '../../img/icon/widget.svg'

import union from '../../img/icon/union.svg'
import product1 from '../../img/product/1.png'
import product2 from '../../img/product/2.png'
import product3 from '../../img/product/3.png'

import polygon from '../../img/icon/polygon-1.svg'
import { useSelector } from "react-redux"
import { useState } from "react"
import { ProductItem } from "../../Components/ProductItem"
import classNames from "classnames"

export const Category = () => {
    const produts = useSelector(state => state.allProducts)
    const [currentItem, setCurrentItem] = useState(0)
    const [currentCategory, setCurrentcategory] = useState(0)


  return (
    <html lang="ru">
    
    <body>
        <HeaderContent/>
    
        <section>
            <div className="container breadcrumb">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Каталог</a></li>
                            <li className="breadcrumb-item"><a href="#">Товарный бетон</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Бетон на гравийном щебне</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container">
                <div className="row name-row">
                    <div className="name-row-item">
                        <h1>Товарный бетон <span className="num">(47)</span></h1>
                    </div>
                </div>
                <hr/>
                <div className="row category-row">
                    <div className={classNames("category-row-item br r", {'active': currentCategory === 0})} onClick={() => setCurrentcategory(0)}>Бетон на гравийном щебне
                        <span>100 товаров</span>
                    </div>
                    <div className={classNames("category-row-item br r", {'active': currentCategory === 1})} onClick={() => setCurrentcategory(1)}>Бетон на гравийном щебне
                        <span>78 товаров товаров</span>
                    </div>
                    <div className={classNames("category-row-item br r", {'active': currentCategory === 2})} onClick={() => setCurrentcategory(2)}>Керамзитобетон
                        <span>94 товаров товаров</span>
                    </div>
                    <div className={classNames("category-row-item br r", {'active': currentCategory === 3})} onClick={() => setCurrentcategory(3)}>Мостовой бетон
                        <span>45 товаров</span>
                    </div>
                </div>
                <hr/>
            </div>
    
        </section>
        <section className="catalog-body">
            <div className="container">
    
                <div className="row justify-content-between">
                    <div className="col-sidbar-left">
                        <div className="sidbar-left-name"><img src={widget} alt="" />Каталог</div>
                        {/* <div className="sidbar-left-item active br">Товарный бетон</div> */}
                        <div className={ classNames("sidbar-left-item br", {'active': currentItem === 0})} onClick={() => setCurrentItem(0)}>Товарный бетон</div>
                        <div className={ classNames("sidbar-left-item br", {'active': currentItem === 1})} onClick={() => setCurrentItem(1)}>Цементные растворы</div>
                        <div className={ classNames("sidbar-left-item br", {'active': currentItem === 2})} onClick={() => setCurrentItem(2)}>Цементные смеси</div>
                        <div className={ classNames("sidbar-left-item br", {'active': currentItem === 3})} onClick={() => setCurrentItem(3)}>Аренда техники</div>
                        <div className={ classNames("sidbar-left-item br", {'active': currentItem === 4})} onClick={() => setCurrentItem(4)}>Сыпучие материалы</div>
                        <div className={ classNames("sidbar-left-item br", {'active': currentItem === 5})} onClick={() => setCurrentItem(5)}>Рассчитать стоимость доставки</div>
                    </div>
                    <div className="col-content">
                        <div className="content-filtr"><img src={union} alt="" />По умолчанию <span>(возрастание)<img src={polygon} alt="" /></span>
                        </div>
    
                        <hr/>
                        <div className="row catalog_produkt">
                            {produts.map((item) => {
                                return (
                                    <>
                                        <ProductItem item={item}/>
                                    </>
                                )
                            })}
                         
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