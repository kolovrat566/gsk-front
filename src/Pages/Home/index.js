import { HeaderContent } from "../../Components/HeaderContent"

import widget from '../../img/icon/widget.svg'
import phone from '../../img/icon/phone.svg'
import message from '../../img/icon/message.svg'
import map from '../../img/icon/map.svg'

import r1 from '../../img/r1.png'
import r2 from '../../img/r2.png'
import r3 from '../../img/r3.png'
import r4 from '../../img/r4.png'

import builder from '../../img/builder.png'
import atc1 from '../../img/atc1.png'
import atc2 from '../../img/atc2.png'

import image6 from '../../img/image6.png'
import image7 from '../../img/image7.png'
import image8 from '../../img/image8.png'
import image9 from '../../img/image9.png'

export const Home = () => {

  return (
    <html lang="ru">
    
    <body>
    <HeaderContent/>
        <section class="top">
            <div class="container ">
                <div class="row ">
                    <div class="col-lg-12 ">
                        <h1>Главная Строительная Компания</h1>
                        <div class="dscr">Главная строительная компания, входит в Graal.group Специализируется на продаже бетона и чего-то там Доставляем и то се пятое десятое</div>
                        <button class="btn org" onClick={() => window.location='/catalog'}>Заказать бетон</button>
                    </div>
                </div>
            </div>
        </section>
    
        <section id="card">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
                    <div class="col p-0">
                        <div class="card">
                            <div class="card-body flex-column d-flex justify-content-center align-items-center">
                                <p class="card-text">40<span>+</span>
                                </p>
                                <small class="text-muted">Happy Clients</small>
                            </div>
                        </div>
                    </div>
    
    
                    <div class="col p-0">
                        <div class="card">
                            <div class="card-body flex-column d-flex justify-content-center align-items-center">
                                <p class="card-text">540<span>+</span>
                                </p>
                                <small class="text-muted">Projects Completed</small>
                            </div>
                        </div>
                    </div>
    
                    <div class="col p-0">
                        <div class="card">
                            <div class="card-body flex-column d-flex justify-content-center align-items-center">
                                <p class="card-text">300
                                </p>
                                <small class="text-muted">Dedicated Members</small>
                            </div>
                        </div>
                    </div>
    
                    <div class="col p-0">
                        <div class="card">
                            <div class="card-body flex-column d-flex justify-content-center align-items-center">
                                <p class="card-text">25<span>+</span>
                                </p>
                                <small class="text-muted">Awards Won</small>
                            </div>
                        </div>
                    </div>
    
    
                </div>
    
            </div>
        </section>
        <section id="kupit">
            <div class="container">
    
                <div class="row">
                    <div class="col">
                        <h2 class="center form-title wh">Хотите купить бетон?</h2>
                        <div class="dscr center wh">Оставьте свои контакты и наши специалисты свяжутся с вами.</div>
    
                        <form class="form" action="" method="post" id="form-1">
                            <div class="row-form">
                                <div>
                                    <input class="text-field w-input" name="name" placeholder="Ваше имя" type="text"/>
                                </div>
                                <div>
                                    <input class="phone-input text-field w-input" name="phone" placeholder="Ваш телефон" required="required" type="tel"/>
                                    <button type="submit" class="btn blk form-btn">Заказать звонок</button>
                                </div>
                            </div>
                        </form>
                    </div>
    
                </div>
            </div>
        </section>
        <section id="price">
            <h2 class="center cover-bg blk">Актуальный прайс на продукцию ГСК</h2>
            <div class="container-fluid">
    
                <div class="row tabel-block">
                    <div class="col-tab price">
                        <div class="price-tabel-block">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active br" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">Товарный бетон</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link br" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">Цементные растворы</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link br" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">Цементные смеси</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link br" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4" aria-selected="false">Аренда строительной техники</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link br" id="tab5-tab" data-bs-toggle="tab" data-bs-target="#tab5" type="button" role="tab" aria-controls="tab5" aria-selected="false">Сыпучие материалы</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                    <div class="price-top br"> Бетон на гравийном щебне</div>
                                    <table class="table">
                                        <thead class="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
    
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button class="btn org cartblock-btn lgx">Смотреть весь список</button>
                                </div>
                                <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                    <div class="price-top br">Цементные растворы</div>
                                    <table class="table">
                                        <thead class="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button class="btn org cartblock-btn lgx">Смотреть весь список</button>
                                </div>
                                <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                    <div class="price-top br">Цементные смеси</div>
                                    <table class="table">
                                        <thead class="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button class="btn org cartblock-btn lgx">Смотреть весь список</button>
                                </div>
                                <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                                    <div class="price-top br"> Аренда строительной техники</div>
                                    <table class="table">
                                        <thead class="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button class="btn org cartblock-btn lgx">Смотреть весь список</button>
                                </div>
                                <div class="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
                                    <div class="price-top br">Сыпучие материалы</div>
                                    <table class="table">
                                        <thead class="br">
                                            <tr>
                                                <th scope="col">Марка/Класс</th>
                                                <th scope="col">Наименование</th>
                                                <th scope="col">Цена с НДС</th>
                                                <th scope="col">Количество кубов</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="flex" scope="row"><span>М100</span><span> В7,5</span></th>
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button class="btn org lgx">Смотреть весь список</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="left-cartblock br">
                                <div class="cartblock-body">
                                    <div class="cartblock-top">
                                        Ваш заказ
                                    </div>
                                    <form>
                                        <div class="cartblock-item">Общий объём
                                            <input type="text" class="br" value="0 m3"/>
                                            <div>
                                                <div class="cartblock-item">Стоимость
                                                    <input type="text" class="br lg" value="0 ₽"/>
                                                    <div>
                                                        <div class="cartblock-footer">
                                                            <div>
                                                                <button class="btn org cartblock-btn lg">В корзину</button>
                                                                <input type="reset" class="btn  cartblock-btn trash"/>
                                                            </div>
    
                                                            <button type="button" class="btn org cartblock-btn" data-bs-toggle="modal" data-bs-target="#modal">Оформить в один клик</button>
                                                            <button class="btn grey cartblock-btn">Рассчитать доставку</button>
                                                        </div>
                                                    </div>
    
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    
    
        <section id="calk-banner" class="bg-wh">
            <div class="container">
                <div class="banner org br">
                    <div class="bannerbody-calk">
                        Рассчёт цены бетона с доставкой на карте
                        <button class="btn wh" onClick={() => window.location='/calc'}>Калькулятор доставки</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="raboti" class="bg-wh">
            <div class="container">
                <h2>Работы, выполненные ГСК</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
                    <a href="img/r1.png" data-fancybox="gallery" data-caption="">
                        <img src={r1} class="raboti-img" alt="" />
                    </a>
                    <a href="img/r2.png" data-fancybox="gallery" data-caption="">
                        <img src={r2} class="raboti-img" alt="" />
                    </a>
                    <a href="img/r3.png" data-fancybox="gallery" data-caption="">
                        <img src={r3} class="raboti-img" alt="" />
                    </a>
                    <a href="img/r4.png" data-fancybox="gallery" data-caption="">
                        <img src={r4} class="raboti-img" alt="" />
                    </a>
                </div>
           </div>
        </section>
        <section id="about">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 ">
                    <div class=""> <img src={builder} alt="" /></div>
                    <div class="d-flex flex-column justify-content-center">
                        <h2>О ГСК</h2>
                        <div class="dscr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="poraydok" class="bg-wh">
            <div class="container">
                <div class="row">
                    <h2 class="center">Порядок работы
                    </h2>
                    <div class="dscr center">Процесс реализации вашего заказа от начала и до конца.
                    </div>
                </div>
    
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
                    <div class="pr-item">
                        <div class="pr-item-title">
                            <span class="pr-item-top">Заявка</span>
                            <span class="pr-item-num">1</span>
                        </div>
                        <div class="pr-item-text">Оставьте заявку любым <br/>удобным для вас способом –<br/> по e-mail, по телефону <br/>или закажите обратный<br/> звонок на сайте.</div>
                    </div>
                    <div class="pr-item">
                        <div class="pr-item-title active">
                            <span class="pr-item-top">Расчёт</span>
                            <span class="pr-item-num">2</span>
                        </div>
                        <div class="pr-item-text">Наши специалисты<br/> рассчитают стоимость<br/> бетона и доставки, сделают<br/> счет или коммерческое<br/> предложение.</div>
                    </div>
                    <div class="pr-item">
                        <div class="pr-item-title">
                            <span class="pr-item-top">Оплата</span>
                            <span class="pr-item-num">3</span>
                        </div>
                        <div class="pr-item-text">Наличный и безналичный<br/> расчет. Предварительная<br/> оплата для юридических лиц.<br/> Скидки и особые условия<br/> для постоянных клиентов.</div>
                    </div>
                    <div class="pr-item">
                        <div class="pr-item-title">
                            <span class="pr-item-top">Производство</span>
                            <span class="pr-item-num">4</span>
                        </div>
                        <div class="pr-item-text">Изготовление бетонной<br/> смеси или раствора<br/> на нашем РБУ, погрузка<br/> в автобетоносмеситель.<br/> Контрольный звонок<br/> от диспетчера.</div>
                    </div>
                    <div class="pr-item">
                        <div class="pr-item-title">
                            <span class="pr-item-top">Доставка и разгрузка</span>
                            <span class="pr-item-num">5</span>
                        </div>
                        <div class="pr-item-text">Доставка производится<br/> миксерами от 7 до 10 м3.<br/> Дополнительные условия<br/> поставки обговариваются<br/> заранее.</div>
                    </div>
    
                </div>
            </div>
        </section>
    
        <section id="articles" class="bg-wh">
            <div class="container">
                <div class="row">
                    <h2>Актульные статьи</h2>
                </div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 ">
                    <div class="article">
                        <div class="article-title"> Как определяется класс бетона?</div>
                        <img src={atc1} class="img-article" alt="" />
                        <div class="article-footer">
                            <div class="article-t">Классы бетона</div>
                            <button class="btn org">Читать полностью</button>
                        </div>
                    </div>
                    <div class="article">
                        <div class="article-title"> Как определяется класс бетона?</div>
                        <img src={atc2} class="img-article" alt="" />
                        <div class="article-footer">
                            <div class="article-t">Классы бетона</div>
                            <button class="btn org">Читать полностью</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="partners" class="bg-wh">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="title-block">25+<span>Партнёры ГСК</span></div>
                        <div class="dscr">Партнёров Главной Строительной компании. Короткий екст про сотрудничество и совместные проекты
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row row-cols-partners">
                            <div class="item-partners"><img src={image7} class="img-partners" alt="" /></div>
                            <div class="item-partners"><img src={image8} class="img-partners" alt="" /></div>
                            <div class="item-partners"><img src={image6} class="img-partners" alt="" /></div>
                            <div class="item-partners"><img src={image9} class="img-partners" alt="" /></div>
    
                        </div>
                    </div> </div> </div>
        </section>
        <footer id="contact">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                    <div class="contact-left">
                        <h2>Контакты</h2>
                        <h3>Собственные бетонные заводы</h3>
                        <div class="map">
                            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab0ee60b21686b4da578f3ebe97659a70d16aae2fbaa14c153f4b44b2d59868b1&amp;width=100%25&amp;height=355&amp;lang=ru_RU&amp;scroll=true"></script>
                        </div>
                    </div>
                    <div class="contact-right">
    
                        <div class="contact-title">Наш адрес</div>
                        <div class="contact-row">
                            <img src={map} class="img-icon" alt="" /><span>125438, Москва, ул. Автомоторная 5, стр.3</span>
                        </div>
                        <div class="contact-title">Телефоны для связи</div>
                        <div class="contact-row">
                            <img src={phone} class="img-icon" alt="" /><span><a href="tel:+74951288380">+7 (495) 128-83-80</a></span>
                        </div>
                        <div class="contact-row">
                            <img src={phone} class="img-icon" alt="" /><span><a href="tel:+74951288380">+7 (495) 128-83-80</a></span>
                        </div>
                        <div class="contact-title">E-mail по всем вопросам</div>
                        <div class="contact-row">
                            <img src={message} class="img-icon" alt="" /><span><a href="mailto:zakaz@site.ru">zakaz@site.ru</a></span>
                        </div>
                    </div>
                </div>
                <div class="row col footer">
                    <h2 class="center form-title">Не нашли ответ на вопрос?</h2>
                    <div class="dscr center">Оставьте свои контакты и наши специалисты свяжутся с вами.</div>
    
                    <form class="form" action="" method="post" id="form-1">
                        <div class="row-form">
                            <div>
                                <input class="text-field w-input" name="name" placeholder="Ваше имя" type="text"/>
                            </div>
                            <div>
                                <input class="phone-input text-field w-input" name="phone" placeholder="Ваш телефон" required="required" type="tel"/>
                                <button type="submit" class="btn blk form-btn">Заказать звонок</button>
                            </div>
                        </div>
                    </form>
                </div>
    
            </div>
        </footer>
    
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
                            <input type="checkbox" checked id="cb1"/><label for="cb1">Я согласен на <a href="#">обработку персональных данных</a></label>
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