function Product(x)
{

    return(
        <div className="bg-amber-300 p-10 m-5 flex-wrap">
            <p>{x.products.productId}</p>
            <p>{x.products.name}</p>
            <p>{x.products.price}</p>
            <p>{x.products.brand}</p>
            <p>{x.products.description}</p>
            <img src={x.products.image} alt="" />
        </div>
    )

}

export default Product