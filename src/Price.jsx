function Price({ oldPrice, newPrice }) {
    return (
        <div className="Price-container">
            <span className="old-price">{oldPrice}</span>
            <span className="new-price">{newPrice}</span>
        </div>
    );
}

export default Price;
