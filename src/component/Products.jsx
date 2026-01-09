import Product from "./Product";

export default function Products({ products }) {

    const isLoading = false;
    return (
        <div className="product-list">

                {  isLoading && <p> Loading products...</p> } <br></br>

                {  !isLoading &&
                    products.map((product) => (
                       <Product key={product.id} product={product} />
                    ))
                }
            </div>
    )
}