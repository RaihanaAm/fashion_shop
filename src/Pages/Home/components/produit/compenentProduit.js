import "./_produit.scss"
import { MdFavoriteBorder } from "react-icons/md";

import img from "../../../../assets/images/blog-01.jpg"
import { Link, NavLink } from "react-router-dom"
export const ComponentProduit = (props) => {
    return (
        <div className="Component">
            <div>
                <NavLink className="nav-link" to={`/product/${props.title}`}>
                    <img src={props.src} alt="" />
                </NavLink>
            </div>
            <div className="type">
                <p className={props.type === "sold" ? "bg-red" : props.type === "new" ? "bg-green" : "bg-warning"}>{props.type}</p>
            </div>
            <div className="icon">
                <p><MdFavoriteBorder /></p>
            </div>
            <div className="add ">
                <button onClick={() => {
                    props.addStock(props.index)
                }}>Add to cart</button>
            </div>
            <div className="text">
                <h3>{props.title}</h3>
                <div className="tt">
                    <h6 className={props.type === "sold" ? "text-decoration-line-through" : ""}>${props.price}.00 </h6>
                    {props.type === "sold" ?
                        <h6 className="text-red" >${Math.round(props.price * 0.4)}.00</h6>
                        : <></>
                    }

                </div>
            </div>
        </div>

    )
}