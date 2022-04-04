import { Mainlayout } from "../../Components/MainLayout"
import {ArticleMenu} from "../../Components/ArticleMenu"
import {HeaderContent} from '../../Components/HeaderContent'
import image from '../../Images/PNG/1.png'
import './Article.scss'
import { useState } from "react"

export const  Article = () => {
  const [currentArticle, setCurrentArticle] = useState(2)
  const [name, setName] = useState('Ваше имя')
  const [email, setEmail] = useState('Ваш e-mail')
  const [message, setMessage] = useState('Задайте вопрос нашим специалистам')

  const changeArticle = (value) => {
    setCurrentArticle(value)
  }

  return (
    <Mainlayout>
      <div className="article">
        <HeaderContent path='Статьи / Классы бетона' title='Как определяется класс бетона?'/>
        <div className="article_content">
          <ArticleMenu currentArticle={currentArticle} changeArticle={changeArticle}/>

          <div className="article_content_container">
            <div className="article_content_container_title">Что такое класс бетона?</div>
            <div className="article_content_text_image">
              {/* <span className="article_content_container_text"></span> */}
              <span className="article_content_container_text">Покупая товарный бетон, обратите внимание  на важный технический показатель его прочности, так как от этого зависит надежность, прочность  и долговечность готовой монолитной конструкции. При подборе подходящего цементного раствора специалисты обращают внимание на классы и марки жидкого бетона, которые помогают понять, насколько материал подходит для проведения конкретных монолитных строительных работ. Хотя другие параметры готовой бетонной смеси БСГ (огнеупорность, водонепроницаемость, морозостойкость, подвижность) не менее значительные, отходят  на второй план.</span>
              <img src={image}/>
            </div>
            <div className="article_content_container_text">
            Покупая жидкий бетон для заливки фундаментов, возведения монолитных конструкций или строительные смеси для проведения кладочных или штукатурных работ, важно помнить, что марка ― это лабораторная характеристика прочности. Для практических целей чаще всего используются растворы М100-М400, хотя ассортимент доступных разновидностей намного шире. Более точной характеристикой по прочности является класс бетона. Он обозначается буквой B в диапазоне от B3.5 до B60. В цифровой части указано максимально допустимое давление, которое затвердевший материал (монолитная конструкция) выдерживает не менее чем в 95% случаев. Оно выражено в МПа.
            <div> </div>
            У марки и класса различный шаг измерений. Соотношение данных параметров описаны  в ГОСТ 26633-91. Этот документ содержит таблицу тяжёлых классов бетона БСТ и марок по прочности. Изучая ее, можно заметить, что, например, М150 соответствует и B10 и B12,5. Это не ошибка, просто класс бетона ГОСТ более точно указывает характеристики материала.
            </div>
            <div className="article_content_container_title article_content_container_title_2">Как выбрать класс бетонной смеси?</div>
            <div className="article_content_container_text">Нужную строительную смесь можно приготовить самостоятельно, но лучше заказать ту, что изготовлена в производственных условиях, где строго соблюдаются все пропорции, рецептура, а также технология производства. Обратившись к менеджерам РБУ, можно заказать бетонную смесь класса от B3.5 до B55. Среди разнообразия БСТ наиболее приобретаемыми являются следующие виды классов раствора:</div>
            <div className="article_content_container_list_container">

              <div className="article_content_container_list">

                <div className="article_content_container_list_element">
                  <div className="article_content_container_list_item_cube"/>
                  <div className="article_content_container_list_item_text">
                    В7.5. Используется при проведении подготовительных бетонных работ.
                  </div>
                </div>

                <div className="article_content_container_list_element">
                  <div className="article_content_container_list_item_cube"/>
                  <div className="article_content_container_list_item_text">
                    В12.5. Подходит для заливки ленточного фундамента, но чаще применяется в качестве подготовительного материала для организации тротуаров, стяжки полов.
                  </div>
                </div>

                <div className="article_content_container_list_element">
                  <div className="article_content_container_list_item_cube"/>
                  <div className="article_content_container_list_item_text">
                    В15. Применим для создания свайно-ростверковых, плитных, ленточных фундаментов, монолитных площадок, лестниц.                
                  </div>
                </div>

                <div className="article_content_container_list_element">
                  <div className="article_content_container_list_item_cube"/>
                  <div className="article_content_container_list_item_text">
                    В20. Находит применение в заливке фундаментов, а также в производстве подпорных стен, малонагруженных плит перекрытия.                
                  </div>
                </div>

                <div className="article_content_container_list_element">
                <div className="article_content_container_list_item_cube"/>
                <div className="article_content_container_list_item_text">
                  В22.5. Универсальный класс поверхности бетона, который благодаря прочностным характеристикам и доступной цене подойдет практически для любых строительных нужд.                
                </div>
                </div>

                <div className="article_content_container_list_element">
                <div className="article_content_container_list_item_cube"/>
                <div className="article_content_container_list_item_text">
                  В25. Этот материал используется в создании колонн, балок, несущих стен, ЖБИ.                
                </div>
                </div>

                <div className="article_content_container_list_element">
                  <div className="article_content_container_list_item_cube"/>
                  <div className="article_content_container_list_item_text">
                    В30. Раствор применяют для заливки чаши бассейнов, создании цокольных этажей, конструкций мостов.                
                  </div>
                </div>

                <div className="article_content_container_list_element">
                  <div className="article_content_container_list_item_cube"/>
                  <div className="article_content_container_list_item_text">
                    В35. Высокий класс прочности позволяет создавать гидротехнические сооружения, высоконагруженные мосты и банковские хранилища.                
                  </div>
                </div>
              </div>
            </div>

            <div className="article_content_container_form">
              <div className="article_content_container_title article_content_container_title_3">Остались вопросы?</div>
              <div className="article_content_container_text_2">Если вы не нашли ответ на свой вопрос на нашем сайте, то можете написать его нашим специалистам.</div>
              
              <div className="article_content_container_inputs">
                <input 
                className="article_content_container_inputHalf"
                onChange={e => setName(e.target.value)}
                value={name}
                />
                <input 
                className="article_content_container_inputHalf"
                onChange={e => setEmail(e.target.value)}
                value={email}
                />
              </div>
              <input 
              className="article_content_container_inputFull"
              onChange={e => setMessage(e.target.value)}
              value={message}
              />
              <div className="article_content_container_sendMessage">
                <div className="article_content_container_sendMessage_checkbox">

                </div>
                <button className="article_content_container_sendMessage_btn">Отправить письмо</button>

              </div>

            
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  )

}