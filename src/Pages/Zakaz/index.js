import logo from '../../img/logo.svg'
import basket from '../../img/icon/basket_light.svg'

export const Zakaz = () => {

  return (
    <html lang="ru">
    <body>
        <header class="content-head">
            <div class="container">
                <nav class="navbar navbar-expand-lg">
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
                        <img class="logo" src={logo} alt=""/>
                    </a>
                    <a href="#" class="d-flex align-items-center basket">
                        <img class="" src={basket} alt=""/>
                    </a>
                </div>
            </div>
        </header>
    
    
        <section>
            <div class="container breadcrumb">
                <div class="row">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Оформление заказа</a></li>
    
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container">
                <div class="row name-row">
                    <div class="name-row-item">
                        <h1>Оформление заказа</h1>
                    </div>
                </div>
                <hr/>
    
            </div>
    
        </section>
        <section class="zakaz-body">
    
            <div class="container">
    
                <div class="row justify-content-between">
    
                    <div class="col-content">
                        <div class="row-form">
                            <div class="zakaz-block tip-p br">
                                <span class="label-zakaz">Тип покупателя</span>
                                <input type="radio" checked id="cb1" name="tip-p"/> <label for="cb1">Физическое лицо</label>
    
                                <input type="radio" id="cb2" name="tip-p"/> <label for="cb2">Юридическое лицо</label>
                            </div>
                            <div class="zakaz-block oplata br">
                                <span class="label-zakaz">Способ оплаты</span>
                                <div class="zakaz-block-row">
                                    <div>
                                        <input type="radio" checked id="cb3" name="oplata"/> <label for="cb3">Наличными или картой водителю</label>
    
                                        <input type="radio" id="cb4" name="oplata"/> <label for="cb4">Счёт</label>
                                    </div>
                                    <div><span class="txt-zakaz">
                                            Оплата производится наличными деньгами или банковской картой, в момент получения заказа. Подтверждением вашей оплаты является фискальный кассовый чек, вручаемый во время получения и оплаты заказа.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row-form">
                            <div class="zakaz-block br">
    
                                <div class="zakaz-block-row">
    
                                    <div class="zakaz-block-col"><span class="label-zakaz">Рассчёт доставки</span>
                                        <div class="col-form">
                                            <span class="label-zakaz">Адрес доставки:</span>
                                            <input class="text-field w-input br" name="adres" maxlength="256" type="text"/>
                                        </div>
                                        <div class="col-form">
                                            <span class="label-zakaz">Расстояние (км):</span>
                                            <input class="text-field w-input br" name="rasst" maxlength="256" placeholder="Введите расстояние" type="text"/>
                                        </div>
                                        <div class="col-form itog-dostavka">
                                            <span class="label-zakaz "><b>Стоимость доставки:</b><span>4 000 ₽</span></span>
    
                                        </div>
    
                                    </div>
                                    <div class="map zakaz">
                                        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab0ee60b21686b4da578f3ebe97659a70d16aae2fbaa14c153f4b44b2d59868b1&amp;width=100%25&amp;height=355&amp;lang=ru_RU&amp;scroll=true"></script>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        <div class="row-form">
                            <div class="zakaz-block br pokupatel">
                                <span class="label-zakaz">Покупатель</span>
    
    
                                <div class="zakaz-block-col">
                                    <div class="col-form">
                                        <span class="label-zakaz">Имя<span class="required">*</span></span>
                                        <input class="text-field w-input br" required name="name" maxlength="256" type="text"/>
                                    </div>
                                    <div class="col-form">
                                        <span class="label-zakaz"> E-mail<span class="required">*</span></span>
                                        <input class="text-field w-input br" required name="email" maxlength="256" type="email"/>
                                    </div>
                                    <div class="col-form">
                                        <span class="label-zakaz"> Телефон<span class="required">*</span></span>
                                        <input class="text-field w-input br" required name="phone" maxlength="256" type="tel"/>
                                    </div>
                                    <div class="col-form">
                                        <span class="label-zakaz">Дата и время доставки</span>
                                        <input class="text-field w-input br" name="date" maxlength="256" type="date"/>
                                    </div>
                                    <div class="col-form">
                                        <span class="label-zakaz">Город</span>
                                        <input class="text-field w-input br" name="gorod" maxlength="256" type="text"/>
                                    </div>
                                    <div class="col-form">
                                        <span class="label-zakaz">Адрес доставки</span>
                                        <input class="text-field w-input br" name="adres" maxlength="256" type="text"/>
                                    </div>
                                    <div class="col-form">
                                        <span class="label-zakaz">Комментарии к заказу</span>
                                        <textarea class="text-field w-input br" name="comment" maxlength="256"></textarea>
                                    </div>
    
                                </div>
    
    
    
                            </div>
                        </div>
                        <div class="row-form">
                            <div class="zakaz-block br p-0 zakaz-cart">
                                <span class="label-zakaz">Товары в корзине</span>
                                <table class="table cart-m">
                                    <thead class="br">
                                        <tr>
                                            <th scope="col">Марка/Класс</th>
                                            <th scope="col">Наименование</th>
                                            <th scope="col">Цена с НДС</th>
                                            <th scope="col">Количество</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
    
                                            <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                            <td>3 310 ₽</td>
                                            <td class="no-br">
                                                1 м3
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="cart_produkt name-row">
                                    <div>
                                        <div class="product_item-row">
                                            <div class="cart-col">Наименование</div>
                                            <div class="cart-col">Цена</div>
                                            <div class="cart-col">Кол-во</div>
                                            <div class="cart-col">Стоимость</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cart_produkt">
                                    <div>
                                        <div class="product_item-row br">
                                            <div class="product_item-row-name cart-col">Кладочная сместь М50</div>
                                            <div class="product_item-row-price cart-col">2 420 ₽/м3 </div>
    
    
                                            <div class="kol-vo cart-col">
                                                1 м3
                                            </div>
    
    
                                            <div class="price cart-col">2 420 ₽ </div>
    
                                        </div>
                                    </div>
                                </div>
                                <div class="cart_produkt">
                                    <div>
                                        <div class="product_item-row br">
                                            <div class="product_item-row-name cart-col">Бетон М100 В7,5 F100 W4 (Гравий)</div>
                                            <div class="product_item-row-price cart-col">3 310 ₽/м3 </div>
    
    
                                            <div class="kol-vo cart-col">
                                                1 м3
                                            </div>
    
    
                                            <div class="price cart-col">3 310 ₽ </div>
    
                                        </div>
                                    </div>
                                </div>
    
    
    
                            </div>
    
    
                        </div>
                        <form class="itog">
                            <div class="row cart-row ">
                                <div>
                                    <div class="cart_item-row br bg-wh">
                                        <input type="text" class="cart_item text-field br" placeholder="Введите промокод на скидку"/>
                                        <div class="cart_item-row-itog">ИТОГО:<span>5 730 ₽</span></div>
    
    
    
                                    </div>
                                </div>
                            </div>
    
                            <div class="row cart-row-bottom">
                                <div><input type="checkbox" checked id="cb10"/> <label for="cb10">Я согласен на <a href="#">обработку персональных данных</a></label>
    
                                    <button class="btn org complete">Оформить заказ</button>
    
                                </div>
                            </div>
                        </form>
    
    
                    </div>
                </div>
    
            </div>
        </section>
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
    
            <div class="modal-dialog">
                <div class="modal-content">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    
                    <div class="modal-title">Купить в один клик</div>
                    <div class="modal-descriptor">Заполните форму, и наш специалист свяжется с вами в ближайшее время</div>
                    <div class="form-wrapper w-form">
                        <form class="form" action="" method="post" id="form-2">
                            <input class="text-field w-input" data-name="Имя" name="name" maxlength="256" placeholder="Имя" type="text"/>
                            <input class="phone-input text-field w-input" name="phone" maxlength="256" placeholder="Телефон" required="required" type="tel"/>
                            <input class="text-field w-input" name="email" maxlength="256" placeholder="E-mail*" type="text"/>
    
                            <input type="checkbox" checked id="cb1"/> <label for="cb1">Я согласен на <a href="#">обработку персональных данных</a></label>
                            <button type="submit" class="btn org  main-btn form-btn">Отправить</button>
    
    
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
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