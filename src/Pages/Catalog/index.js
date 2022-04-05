import { getProductCategories, getAllProducts } from "../../Redux/nameStore/action"
import '../../css/style.css'
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { HeaderContent } from "../../Components/HeaderContent"

import calk from '../../img/catalog/calk.png'
import catalog1 from '../../img/catalog/catalog1.png'
import catalog2 from '../../img/catalog/catalog2.png'
import catalog3 from '../../img/catalog/catalog3.png'
import catalog4 from '../../img/catalog/catalog4.png'
import catalog5 from '../../img/catalog/catalog5.png'

export const Catalog = () => {
  const dispatch = useDispatch()
  const productCategories = useSelector(data => data.productCategories)

  console.log(productCategories);

  useEffect(() => {
    dispatch(getProductCategories())
  }, [])

  return (
    <>
<body>
    <HeaderContent/>
<section>
    <div className="container breadcrumb">
        <div className="row">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Каталог</a></li>
                </ol>
            </nav>
        </div>
    </div>
    <div className="container">
        <div className="row name-row">
            <div className="name-row-item">
                <h1>Каталог</h1>
            </div>
            <div className="row-search">
                <form className="form search" action="" id="form-1">

                    <input className="text-field w-input" name="" placeholder="Введите запрос" type="text"/>

                    <select name="category">
                        <option>Категории</option>
                        <option value="Товарный бетон">Товарный бетон</option>
                        <option value="Цементные растворы">Цементные растворы</option>
                        <option value="Цементные смеси">Цементные смеси</option>
                    </select>
                    <button type="submit" className="btn search form-btn"></button>

                </form>
            </div>
        </div>
        <hr/>
    </div>

</section>
<section className="content-body">
    <div className="container">
        <div className="row content-article">

            <div className="article_item-row br bg-wh">
                <div><img src={catalog1} className=""/></div>
                <div>
                    <div className="article_item-row-name">Бетон</div>
                    <div className="article_item-row-sub">19 товаров</div>
                </div>

                <div className="view"></div>
            </div>
            <div className="article_item-row br bg-wh">
                <div><img src={catalog2} className=""/></div>
                <div>
                    <div className="article_item-row-name">Песок</div>
                    <div className="article_item-row-sub">4 товара</div>
                </div>

                <div className="view"></div>
            </div>
            <div className="article_item-row br bg-wh">
                <div><img src={catalog3} className=""/></div>
                <div>
                    <div className="article_item-row-name">Щебень</div>
                    <div className="article_item-row-sub">16 товаров</div>
                </div>

                <div className="view"></div>
            </div>
            <div className="article_item-row br bg-wh">
                <div><img src={catalog4} className=""/></div>
                <div>
                    <div className="article_item-row-name">Гравий</div>
                    <div className="article_item-row-sub">3 товара</div>
                </div>

                <div className="view"></div>
            </div>
            <div className="article_item-row br bg-wh">
                <div><img src={catalog5} className=""/></div>
                <div>
                    <div className="article_item-row-name">Арматура</div>
                    <div className="article_item-row-sub">18 товаров</div>
                </div>

                <div className="view"></div>
            </div>
            <div className="article_item-row calk-item br bg-wh">
                <div><img src={calk} className=""/></div>
                <div>
                    <div className="article_item-row-name">Рассчитать стоимость доставки </div>
                    <div className="article_item-row-sub">Онлайн-калькулятор</div>
                </div>

                <div className="view"></div>
            </div>


        </div>
    </div>
</section>
</body>
    </>
  )


}