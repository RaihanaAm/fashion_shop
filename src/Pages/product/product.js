import { Header } from "../../layout/header"
import { BiSearchAlt } from "react-icons/bi";
import "./_product.scss"
import src from "../../assets/images/bg.jpg"
import { ComponentProduit } from "../Home/components/produit/compenentProduit";

export const Product = (props) => {
    return (
        <div>
            <Header title={"PRODUCT"} src={src} />

            <div className="Product">
                <div className="product">
                    <div className="tabs ">
                        <div className="left">
                            <h1>Categories</h1>
                            <div className="list-group" id="list-tab" role="tablist">
                                <a
                                    className="lists active"
                                    id="list-home-list"
                                    data-bs-toggle="list"
                                    href="#list-home"
                                    role="tab"
                                    aria-controls="list-home"
                                >
                                    All
                                </a>
                                <a
                                    className="lists "
                                    id="list-profile-list"
                                    data-bs-toggle="list"
                                    href="#list-profile"
                                    role="tab"
                                    aria-controls="list-profile"
                                >
                                    Women
                                </a>
                                <a
                                    className="lists "
                                    id="list-messages-list"
                                    data-bs-toggle="list"
                                    href="#list-messages"
                                    role="tab"
                                    aria-controls="list-messages"
                                >
                                    Men
                                </a>
                                <a
                                    className="lists "
                                    id="list-settings-list"
                                    data-bs-toggle="list"
                                    href="#list-settings"
                                    role="tab"
                                    aria-controls="list-settings"
                                >
                                    Kids
                                </a>
                            </div>
                            <input type="text" placeholder="Search product" />
                            <button><BiSearchAlt /></button>
                        </div>
                        <div className="right">
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="prod tab-pane fade show active"
                                    id="list-home"
                                    role="tabpanel"
                                    aria-labelledby="  list-home-list"
                                >
                                    <div className="tableu">
                                        {
                                            props.AllProducts.map((element, index) =>
                                                <>
                                                    <ComponentProduit src={element.src} price={element.price} title={element.title} type={element.type} />
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                                <div
                                    className="prod tab-pane fade"
                                    id="list-profile"
                                    role="tabpanel"
                                    aria-labelledby="list-profile-list"
                                >
                                    <div className="tableu">
                                        {
                                            props.AllProducts.map((element, index) =>
                                                element.categorie === "women" ?
                                                    <>
                                                        <ComponentProduit src={element.src} price={element.price} title={element.title} type={element.type} />
                                                    </>
                                                    :
                                                    <></>
                                            )
                                        }
                                    </div>
                                </div>
                                <div
                                    className="prod tab-pane fade"
                                    id="list-messages"
                                    role="tabpanel"
                                    aria-labelledby="list-messages-list"
                                >
                                    <div className="tableu">
                                        {
                                            props.AllProducts.map((element, index) =>
                                                element.categorie === "men" ?
                                                    <>
                                                        <ComponentProduit src={element.src} price={element.price} title={element.title} type={element.type} />
                                                    </>
                                                    :
                                                    <></>
                                            )
                                        }
                                    </div>
                                </div>
                                <div
                                    className="prod tab-pane fade"
                                    id="list-settings"
                                    role="tabpanel"
                                    aria-labelledby="list-settings-list"
                                >
                                       <div className="tableu">
                                        {
                                            props.AllProducts.map((element, index) =>
                                                element.categorie === "kids" ?
                                                    <>
                                                        <ComponentProduit src={element.src} price={element.price} title={element.title} type={element.type} />
                                                    </>
                                                    :
                                                    <></>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}