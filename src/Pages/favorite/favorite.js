import "./_favorite.scss"
import src from "../../assets/images/favorite.jpg"
import { Header } from "../../layout/header"
export const Favorite = (props) => {
    
    return (
        <div>
            <Header title={"FAVORITE"} src={src} />
            <div className="favorite">
                <div className="TABTITLE">
                {
                    props.tab.length ===0 ?
                    <></>
                    :
                    <>
                    <h6 className="text-white">images</h6>
                    <h6>PRODUCT</h6>
                    <h6>PRICE</h6>
                    <h6>QUANTITE</h6>
                    <h6>TOTAL</h6>
                    <h6>ADD</h6>
                    </>
                }
                </div>
                <div className="items">
                    {
                        props.tab.map((element, index) =>
                            <div className="borde">
                                <img src={element.src} alt="" />
                                <div className="item">
                                    <h3>{element.title}</h3>
                                    <h6>${element.price}.00</h6>
                                    <div className="add">
                                        <button onClick={() => { props.remove(element) }} disabled={props.redisabled}>-</button>
                                        <div><h1>{element.qnt}</h1></div>
                                        <button onClick={() => { props.add(element) }} disabled={props.disabled}>+</button>
                                    </div>
                                    <h6 className="text-red">${element.price*element.qnt}.00</h6>
                                    <button>Add</button>

                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}