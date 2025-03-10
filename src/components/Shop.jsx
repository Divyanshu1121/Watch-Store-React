import "./Shop.css";

const products = [
    { id: 1, name: "Rolex Submariner", price: "$10,500", image: "/images/watch1.jpg" },
    { id: 2, name: "Omega Speedmaster", price: "$7,200", image: "/images/watch2.jpg" },
    { id: 3, name: "Tag Heuer Carrera", price: "$5,500", image: "/images/watch3.jpg" },
    { id: 4, name: "Breitling Navitimer", price: "$6,800", image: "/images/watch4.jpeg" },
    { id: 5, name: "Seiko Presage", price: "$850", image: "/images/watch5.jpeg" },
    { id: 6, name: "Casio G-Shock", price: "$150", image: "/images/watch6.jpg" },
    { id: 7, name: "Rolex Submariner", price: "$1563", image: "/images/watch7.jpg" },
    { id: 8, name: "Fossil Watch", price: "$250", image: "/images/watch8.jpg" },
    { id: 9, name: "Tag Heuer Carrera", price: "$869", image: "/images/watch9.webp" },
    { id: 10, name: "Rolex Submariner", price: "$999", image: "/images/watch10.jpeg" },
];

function Shop() {
    return (
        <div className="shop-page">
            <h2>Shop Premium Watches</h2>
            <p>Find the best luxury and stylish watches here.</p>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p className="price">{product.price}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;
