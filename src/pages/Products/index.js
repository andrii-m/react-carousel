import React, { useState, useEffect } from "react";
import "@assets/css/Products.css";
import Slider from "@components/Slider";
import Accordion from "@components/Accordion";
import product_img_menu from "@data/product_img_menu";
import categories, { categoryByQualifiedName } from "@data/categories";

const Products = () => {
  const [category, setCategory] = useState(categories.qualifiedName);
  const [listItems, setListItems] = useState([]);

  const [path, setPath] = useState(["UTRUSTNING"]);

  useEffect(() => {
    setListItems(product_img_menu.filter((item) => item.category === category));
  }, [category]);

  const handleChangeCategory = (item, type) => {
    if (type === "category") {
      const parents = item.parents;
      setPath([...parents, item.category]);
      setCategory(item.category);
    } else {
      const pathList = [item.product_name];
      let productCategory = item.category;
      while (productCategory !== "UTRUSTNING") {
        const parent = product_img_menu.find(
          (product) => product.product_name === productCategory
        );
        pathList.unshift(parent.product_name);
        productCategory = parent.category;
      }
      pathList.unshift("UTRUSTNING");
      setPath(pathList);
      setCategory(item.product_name);
    }
  };

  const handlePathChange = (category) => {
    if (category === "UTRUSTNING") {
      setCategory(category);
      setPath([category]);
    } else {
      const item = product_img_menu.find(
        (product) => product.product_name === category
      );
      handleChangeCategory(item, "path");
    }
  };

  return (
    <div className="Products">
      <Slider></Slider>
      <div id="productContainer">
        <Accordion
          category={category}
          setCategory={handleChangeCategory}
        ></Accordion>
        <div id="product-card">
          <div className="productheader">
            <div className="productheader_menu">
              {path.map((p, index) => {
                if (index === 0) {
                  return (
                    <span key={p} onClick={() => handlePathChange(p)}>
                      {p}
                    </span>
                  );
                } else {
                  return (
                    <React.Fragment key={p}>
                      <span className="mx-1">&gt;</span>
                      <span onClick={() => handlePathChange(p)}>{p}</span>
                    </React.Fragment>
                  );
                }
              })}
            </div>
            <div className="main_content">
              {listItems.map((item) => (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => handleChangeCategory(item, "product")}
                >
                  <div className="card_img">
                    <img src={item.thumb} alt="test" />
                  </div>
                  <div className="card_header">
                    <h2>{item.product_name}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
