import "./product.css";

const Product = ({img,link,desc}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <h3>{desc}</h3>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="1" className="p-img" />
      </a>

     
    </div>
    
  );
};

export default Product;
