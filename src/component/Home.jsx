import Products from "./Products";

export default function Home() {
    const products = [
        { id: 1, name: "Apple Laptop", description: "Apple Laptop Description" },
        { id: 2, name: "Apple ipod", description: "Apple ipod Description" },
        { id: 3, name: "Apple Watch", description: "Apple Watch Description" },
    ]; 

    function handleAddProduct() {
        // Logic to add a new product
        console.log("Add New Product button clicked...");
        products.push({ id: products.length + 1, name: "New Product", description: "New Product Description" });
        console.log(products);
    }

    return (
        <main className="home">
            <h2>Product List</h2>
            <button onClick={handleAddProduct} >Add New Product</button>
            <Products products={products} />
            
        </main>
    )
}