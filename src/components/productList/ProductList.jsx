import "./productList.css";
import Product from "../product/Product";
import {products} from "./data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
      <h2 className="c-intro p-intro">Some of my Projects</h2>
        
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} desc={item.desc}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
