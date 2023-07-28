import "./_produit.scss"
import { ComponentProduit } from "./compenentProduit"
export const Produit = (props) => {
    return (
        <div className="Produit">
            <div className="title">
                <h1>OUR PRODUCTS</h1>
            </div>
            {/* tabs */}
            <div className="tabs">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="btnn active" id="pills-Best_seller-tab" data-bs-toggle="pill" data-bs-target="#pills-Best_seller" type="button" role="tab" aria-controls="pills-Best_seller" aria-selected="true">Best seller</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="btnn" id="pills-New-tab" data-bs-toggle="pill" data-bs-target="#pills-New" type="button" role="tab" aria-controls="pills-New" aria-selected="false">New</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="btnn" id="pills-Sale-tab" data-bs-toggle="pill" data-bs-target="#pills-Sale" type="button" role="tab" aria-controls="pills-Sale" aria-selected="false">Sale</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="btnn " id="pills-Old-tab" data-bs-toggle="pill" data-bs-target="#pills-Old" type="button" role="tab" aria-controls="pills-Old" aria-selected="false">Old</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane  fade show active" id="pills-Best_seller" role="tabpanel" aria-labelledby="pills-Best_seller-tab" tabIndex="0">
                        <div className="items">
                            {
                                props.best.map((element, index) =>
                                        <>
                                            <ComponentProduit src={element.src} price={element.price} title={element.title} type={element.type} />
                                        </>
                                )
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-New" role="tabpanel" aria-labelledby="pills-New-tab" tabIndex="0">
                        <div className="items">
                            {
                                props.AllProducts.map((element, index) =>
                                    element.type === "new" ?
                                        <>
                                            <ComponentProduit src={element.src} price={element.price} title={element.title} type={element.type} />
                                        </>
                                        :
                                        <></>
                                )
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Sale" role="tabpanel" aria-labelledby="pills-Sale-tab" tabIndex="0">
                        <div className="items">
                            {
                                props.AllProducts.map((element, index) =>
                                    element.type === "sold" ?
                                        <>
                                            <ComponentProduit src={element.src} price={element.price} title={element.title} type={element.type} />
                                        </>
                                        :
                                        <></>
                                )
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Old" role="tabpanel" aria-labelledby="pills-Old-tab" tabIndex="0">
                        <div className="items">
                            {
                                props.AllProducts.map((element, index) =>
                                    element.type === "old" ?
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

            {/* AllProducts={props.AllProducts}  women={props.women}  men={props.men} kids={props.kids} */}
        </div>
    )
}