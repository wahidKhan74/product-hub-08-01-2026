export default function Product({ product }) { 
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
        </div>
    )
}