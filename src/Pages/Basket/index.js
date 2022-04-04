import { HeaderContent } from "../../Components/HeaderContent"
import { Mainlayout } from "../../Components/MainLayout"
import { ReactComponent as BigBasket } from '../../Images/SVG/BigBasket.svg';
import './Basket.scss'

export const Basket = () => {

  const EmptyBasket = () => {
    return (
      <div className="emptyBasket">
        <BigBasket/>
        <div className="emptyBasket_tittle">Ваша корзина пуста</div>
        <div className="emptyBasket_text">Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку “В корзину”</div>
        <div className="emptyBasket_buttons">
          <button>Заказать звонок</button>
          <button>Перейти в каталог</button>
        </div>
      </div>
    )
  }

  return (
    <Mainlayout>
      <div className='bascket_container'>
        <HeaderContent title='Корзина' path='Корзина'/>
        <EmptyBasket/>
      </div>
    </Mainlayout>

  )
}