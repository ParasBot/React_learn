import Product from "./Product";

function ProductTab() {
    return (
        <div className="ProductTab-container">
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple iPad Pro" idx={1} />
            <Product title="Zebronics Zeb-Transformer" idx={2} />
            <Product title="Apple Mac" idx={3} />
        </div>
    );
}

export default ProductTab;
