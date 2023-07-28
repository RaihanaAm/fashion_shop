import "./_produit.scss"
import { MdFavoriteBorder } from "react-icons/md";

import img from "../../../../assets/images/blog-01.jpg"
export const ComponentProduit = (props) => {
    return (
        <div className="Component">
            <div>
                <img src={props.src} alt="" />
            </div>
            <div className="type">
                <p className={props.type==="sold"? "bg-red" : props.type==="new"?"bg-green":"bg-warning"}>{props.type}</p>
            </div>
            <div className="icon">
                <p><MdFavoriteBorder /></p>
            </div>
            <div className="add d-none">
                <button>Add to cart</button>
            </div>
            <div className="text">
                <h3>{props.title}</h3>
                <h6>${props.price}.00</h6>
            </div>
        </div>
    )
}