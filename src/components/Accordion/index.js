import { useState } from "react";
import "@assets/css/Products.css";
import Searchbar from "@components/SearchBar";
import categories from "@data/categories";

function Accordion(props) {
  const shownCategories = categories.subCategories;

  return (
    <div className="accordion">
      {shownCategories.map((cat) => (
        <div className="item" key={cat.category}>
          <div
            className="title"
            onClick={() => props.setCategory(cat, 'category')}
          >
            {cat.category}
            <span>{props.category === cat.category ? "-" : "+"}</span>
          </div>
          <div
            className={
              props.category === cat.category ? "content.show" : "content"
            }
          >
            {cat.subCategories.map((subCat) => (
              <div className="new-li" key={subCat.category}>
                {subCat.category}
              </div>
            ))}
          </div>
        </div>
      ))}
      <Searchbar placeholder="Search" data={[]} />
    </div>
  );
}

export default Accordion;
