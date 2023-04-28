import { useState } from 'react';
import './Products.css'
import Slider from '../Slider/Slider';
import Accordion from './accordion';
import product_img_menu from './product_img_menu';
import categories from './categories';





const Products = () => {
  const [category, setCategory] = useState(categories.qualifiedName);
  const [product, setProduct] = useState(null);



  console.log(category);
  console.log(product_img_menu);


  const listItems = product_img_menu
    .filter((item) => item.category === category)
    .map((item) =>
      <div className="card" key={item.id} onClick={() => setCategory(item.product_name)}>
        <div className="card_img">
          <img src={item.thumb} alt="test" />
        </div>
        <div className="card_header">
          <h2>{item.product_name}</h2>
        </div>
      </div>
    );

    const productElement = <div>{product}</div>


  return (
    <div className='Products'>
      <Slider></Slider>
      <div id="productContainer">
        <Accordion category={category} setCategory={setCategory}></Accordion>

        <div id='product-card'>
          <div className="productheader">

            <div className='productheader_menu'>{category}</div>
            <div className='p_header'>Hos oss hyr du utrustning och teknik till ditt event</div>
            <div className='text'>SLDRS hyr ut teknisk utrustning för alla sorters event:</div>
            <div className="main_content">
              {product ? productElement : listItems}
            </div>
        
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
