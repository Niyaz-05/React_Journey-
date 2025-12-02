function ProductCard ({productname, price, rating, image}){
    return(
        <div>
            <h2>Product Name: {productname}</h2>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <img src={image} alt={productname} width="150"/>
        </div>
    );
}

export default ProductCard;