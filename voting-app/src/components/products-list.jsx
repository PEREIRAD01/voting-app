import { useState } from "react";
import { AddProductForm } from "./add-product-form";
import { ProductItem } from "./product-item";
import { products as mock} from "../seed";

export function ProductsList() {
    const [products, setProducts] = useState(mock);
    return (
        <div>

            {/* < AddProductForm /> */}

            <div className="ui unstackable items">
            <button className="ui button">
                <i className="icon large caret down"></i>
                Ascendent
            </button>

            {products.map((product) =>  (<ProductItem 
            key={product.id}
            product={product}
            
            />
        ))}
 
            </div>
       </div>
    )
}