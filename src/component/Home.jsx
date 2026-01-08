import Products from "./Products";

export default function Home() {
    const products = [
        { id: 1, name: "Apple Laptop", description: "Apple Laptop Description" },
        { id: 2, name: "Apple ipod", description: "Apple ipod Description" },
        { id: 3, name: "Apple Watch", description: "Apple Watch Description" },
    ]; 

    return (
        <main className="home">
            <h2>Product List</h2>
            <Products products={products} />
        </main>
    )
}