export default function Products({ products }) {
    return (
        <div className="product-list">
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
            </div>
    )
}