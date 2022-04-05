import { HeaderContent } from "../../Components/HeaderContent"

import closeRing from '../../img/icon/close_ring.svg'
import widget from '../../img/icon/widget.svg'
import phone from '../../img/icon/phone.svg'
import message from '../../img/icon/message.svg'
import map from '../../img/icon/map.svg'


export const Cart = () => {

  return (
    <html lang="ru">
    
    <body>
    <HeaderContent/>
        <section>
            <div class="container breadcrumb">
                <div class="row">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Корзина</a></li>
    
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container">
                <div class="row name-row">
                    <div class="name-row-item">
                        <h1>Корзина</h1>
                    </div>
                </div>
                <hr/>
    
            </div>
    
        </section>
        <section class="catalog-body">
            <div class="container container-cart">
    
    
                <div class="row cart-row">
                    <div>
                        <div class="cart_item-row br bg-wh">
                            <div class="cart_item-row-name">В корзине 2 товара</div>
                            <div class="cart_item-row-clean">Очистить<img src={closeRing} alt="" /></div>
    
    
    
                        </div>
                    </div>
                </div>
    <table class="table cart-m">
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
                                                
                                                <td>Бетон M100 B7,5 F100 W4 (Гравий)</td>
                                                <td>3 310 ₽</td>
                                                <td class="no-br">
                                                    <div class="number" data-step="1" data-min="1" data-max="100">
                                                        <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
    
                                                        <a href="#" class="number-plus">+</a>
                                                    </div>
                                                </td>
                                            </tr></tbody></table>
                <div class="row cart_produkt">
                    <div>
                        <div class="product_item-row br">
                            <div class="product_item-row-name">Кладочная сместь М50</div>
                            <div class="product_item-row-price">2 420 ₽/м3 </div>
    
    
                            <div class="number" data-step="1" data-min="1" data-max="100">
                                <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                <a href="#" class="number-plus">+</a>
                            </div>
    
    
                            <div class="price">2 420 ₽ </div>
                            <img src={closeRing} alt="cart-del" />
                        </div>
                    </div>
                </div>
                <div class="row cart_produkt">
                    <div>
                        <div class="product_item-row br">
                            <div class="product_item-row-name">Бетон М100 В7,5 F100 W4 (Гравий)</div>
                            <div class="product_item-row-price">3 310 ₽/м3 </div>
    
    
                            <div class="number" data-step="1" data-min="1" data-max="100">
                                <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                                <a href="#" class="number-plus">+</a>
                            </div>
    
    
                            <div class="price">3 310 ₽ </div>
                            <img src={closeRing} alt="cart-del" />
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
                        <div>
                            <button class="btn grey call" data-bs-toggle="modal" data-bs-target="#modal">
                                Заказать звонок
                            </button>
                            <button type="button" class="btn grey" data-bs-toggle="modal" data-bs-target="#modal">Быстрый заказ</button>
                            <button class="btn org complete">Оформить заказ</button>
    
                        </div>
                    </div>
                </form>
          <div class="contact-cart">
    
                       
                        <div class="contact-row">
                            <img src={phone} class="img-icon" alt="" /><span><a href="tel:+74951288380">+7 (495) 128-83-80</a></span>
                        </div>
                        <div class="contact-row">
                            <button class="btn grey call" data-bs-toggle="modal" data-bs-target="#modal">
                                Заказать звонок
                            </button>
                        </div>
                        
                        <div class="contact-row">
                            <img src={message} class="img-icon" alt="" /><span><a href="mailto:novikov@gmail.com">novikov@gmail.com</a></span>
                        </div>
              <div class="contact-row">
                            <img src={map} class="img-icon" alt="" /><span class="adr">125438, Москва, ул. Автомоторная 5, стр.3</span>
                        </div>
                    </div>
            </div>
        </section>
    </body>
    
    </html>
  )
}