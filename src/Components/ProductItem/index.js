import product1 from '../../img/product/1.png'


export const ProductItem = ({item}) => {
  console.log(item);


  return (
    <div class="product_item">
    <div class="product_img">
        <img src={product1} alt="" />
        <div class="top_img">
            <div class="prod_label new"></div>
        </div>
        <div class="bottom_img">
            <div class="prod_icon favorite"></div>
            <div class="prod_icon info"></div>
        </div>
    </div>
    <div class="inf">
        <div class="cat">Товарный бетон</div>
        <div class="tittle_product">{item.name}</div>
        <div class="prod_row">
            <div class="price">{item.price} ₽<span>/м3</span></div>
            <div class="rating-mini">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span></span>
            </div>
        </div>
        <div class="prod_row">
            <div class="number" data-step="1" data-min="1" data-max="100">
                <a href="#" class="number-minus">−</a><input class="number-text" type="text" name="count" value="0"/>
                <a href="#" class="number-plus">+</a>
            </div>
            <button class="btn in_cart">
                В корзину
            </button>
        </div>
    </div>
</div>
  )
}