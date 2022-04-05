import { Mainlayout } from "../../Components/MainLayout"
import {ArticleMenu} from "../../Components/ArticleMenu"
import {HeaderContent} from '../../Components/HeaderContent'
import image from '../../Images/PNG/1.png'
import Logo from '../../img/logo.svg'
import { useEffect, useState } from "react"
import { getProductCategories, getAllProducts } from "../../Redux/nameStore/action"
import { useDispatch } from "react-redux"

import logo from '../../img/logo.svg'
import basket from '../../img/icon/basket_light.svg'
import article1 from "../../img/article/article1.png"
import article2 from "../../img/article/article2.png"
import article3 from "../../img/article/article3.png"
import article4 from "../../img/article/article4.png"
import article5 from "../../img/article/article5.png"
import article6 from "../../img/article/article6.png"


export const  Article = () => {
  const [currentArticle, setCurrentArticle] = useState(2)
  const [name, setName] = useState('Ваше имя')
  const [email, setEmail] = useState('Ваш e-mail')
  const [message, setMessage] = useState('Задайте вопрос нашим специалистам')
  const dispatch = useDispatch()

  const changeArticle = (value) => {
    setCurrentArticle(value)
  }

  useEffect(() => {
    console.log(666);
    // dispatch(getProductCategories())
    dispatch(getAllProducts())

  }, [])

  return (
    <html lang="ru">
    <body>
        <HeaderContent/>
        <section>
            <div class="container breadcrumb">
                <div class="row">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Статьи</a></li>
    
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container">
                <div class="row name-row">
                    <div class="name-row-item">
                        <h1>Статьи</h1>
                    </div>
                    <div class="row-search">
                        <form class="form search" action="" id="form-1">
    
                            <input class="text-field w-input" name="" placeholder="Введите запрос" type="text"/>
    
                            <select name="category">
                                <option>Категории</option>
                                <option value="Товарный бетон">Товарный бетон</option>
                                <option value="Цементные растворы">Цементные растворы</option>
                                <option value="Цементные смеси">Цементные смеси</option>
    
                            </select>
                            <button type="submit" class="btn search form-btn"></button>
                        </form>
                    </div>
                </div>
                <hr/>
            </div>
        </section>
        <section class="content-body">
            <div class="container">
                <div class="row content-article">
    
                    <div class="article_item-row br bg-wh">
                        <div><img src={article1} class=""/></div>
                        <div>
                            <div class="article_item-row-name">Применение бетона</div>
                            <div class="article_item-row-sub">2 статьи</div>
                        </div>
    
                        <div class="view"></div>
                    </div>
                    <div class="article_item-row br bg-wh">
                        <div><img src={article2} class=""/></div>
                        <div>
                            <div class="article_item-row-name">Применение песка</div>
                            <div class="article_item-row-sub">3 статьи</div>
                        </div>
    
                        <div class="view"></div>
                    </div>
                    <div class="article_item-row br bg-wh">
                        <div><img src={article3} class=""/></div>
                        <div>
                            <div class="article_item-row-name">Щебень</div>
                            <div class="article_item-row-sub">4 статьи</div>
                        </div>
    
                        <div class="view"></div>
                    </div>
                    <div class="article_item-row br bg-wh">
                        <div><img src={article4} class=""/></div>
                        <div>
                            <div class="article_item-row-name">Гравий</div>
                            <div class="article_item-row-sub">1 статья</div>
                        </div>
    
                        <div class="view"></div>
                    </div>
                    <div class="article_item-row br bg-wh">
                        <div><img src={article5} class=""/></div>
                        <div>
                            <div class="article_item-row-name">Арматура</div>
                            <div class="article_item-row-sub">3 статьи</div>
                        </div>
    
                        <div class="view"></div>
                    </div>
                    <div class="article_item-row br bg-wh">
                        <div><img src={article6} class=""/></div>
                        <div>
                            <div class="article_item-row-name">Для снабженцев </div>
                            <div class="article_item-row-sub">3 статьи</div>
                        </div>
    
                        <div class="view"></div>
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