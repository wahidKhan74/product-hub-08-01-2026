export default function Products({ products }) {

    const isLoading = false;
    return (
        <div className="product-list">

                {  isLoading && <p> Loading products...</p> } <br></br>

                {  !isLoading &&
                <>
                    <div className="product-card">
                        <h3>{products[0].name}</h3>
                        <p>{products[0].description}</p>
                    </div>
                    <div className="product-card">
                        <h3>{products[1].name}</h3>
                        <p>{products[1].description}</p>
                    </div>
                    <div className="product-card">
                        <h3>{products[2].name}</h3>
                        <p>{products[2].description}</p>
                    </div>
                </>
            }
            </div>
    )
}