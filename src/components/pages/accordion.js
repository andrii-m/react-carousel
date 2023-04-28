import { useState } from 'react'
import './Products.css'
import BookData from "./data.json"
import Searchbar from './searchbar'
import categories from './categories'

function Accordion(props) {
  console.log("accordion ", props);
  console.log(categories)
  const shownCategories = categories.subCategories;

  return (

    <div className='accordion'>
      {shownCategories.map((cat) => (
        <div className='item'>
          <div className='title' onClick={() => props.setCategory(cat.category)}>
            {cat.category}
            <span>{props.category === cat.category ? '-' : '+'}</span>
          </div>
          <div className={props.category === cat.category ? 'content.show' : 'content'}>
            {cat.subCategories
              .map((subCat) =>
                <newli key={subCat.category}>{subCat.category}</newli>
              )}
          </div>
        </div>
      ))}
      <Searchbar placeholder="Search" data={BookData} />
    </div>

  )
}

export default Accordion;
