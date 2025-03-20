export function ProductItem({ product }) {
    const handleVote = () => {
        console.log("registered vote!");
    };

    return (
        <div className="item">
            <div className="image">
                <img src={product.productsImageURL} alt="Product image" /> 
            </div>
        <div className="middle aligned content">
            <div className="header">
                <button className="ui button icon" onClick={handleVote}>
                <i className="large caret up icon"></i>
                </button>
                {product.votes}
                <button className="ui button icon" onClick={handleVote}>
                <i className="large caret down icon"></i>
                </button>
            </div>
            <div className="description">
                <a href={product.url}> {product.title}</a>
                <p>{product.description}</p>
            </div>
            <div className="extra">
                <span>Submited by:</span>
                <img src={product.submitterAvatarUrl} alt="avatar image" className="ui avatar image"/>
            </div>
        </div>

        </div>
    )
}