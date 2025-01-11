import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
    const oldPrices = ["12,999", "25,000", "1,599", "999"];
    const newPrices = ["14,999", "28,000", "1,999", "599"];
    const descriptions = [
        ["8000 DPI", "5 programmable buttons"],
        ["Best Tablet", "Top-notch Display"],
        ["Designed for iPad Pro", "Best in class"],
        ["Best Performance", "Slimmest One"]
    ];

    return (
        <div className="Product">
            <h2>{title}</h2>
            <p>{descriptions[idx][0]}</p>
            <p>{descriptions[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;
