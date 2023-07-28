import "./_navbar.scss"
import { Link, NavLink } from "react-router-dom"
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
export const Nav = () => {
    return (

        <nav className="navitem  ">
            <div className="logo">
                <NavLink to={"/"} className="nav-link">
                    <h1>Fashion<span>.</span></h1>
                </NavLink>
            </div>
            <div className="items d-none d-md-flex ">
                <ul>
                    <li>
                        <NavLink to={"/"} className="item">Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/product"} className="item" >Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className="item" >About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"} className="item" >Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="icons d-none d-md-flex">
                <NavLink to={"/favorite"}>
                    <div className="coeur">
                        <h5 ><MdFavoriteBorder /></h5>
                    </div>
                </NavLink>
                <div className="hr">|</div>
                <NavLink to={"/panier"}>
                    <div className="basket">
                        <h5><AiOutlineShopping /></h5>
                        <div className="number"><p>1</p></div>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}