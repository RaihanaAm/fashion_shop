import { useParams } from "react-router-dom"
import "./_description.scss"
export const Description = (props) => {
    const { id } = useParams()
    return (
        <>
            {
                props.AllProducts.map((element, index) =>
                    <>
                        {
                            id === element.title ?
                                <div className="ProductInfo ">
                                    <div className="items ">
                                        <div >
                                            <img src={element.src} alt="" />
                                        </div>
                                        <div className="item">
                                            <div className="tag">
                                                <h1>{element.title}</h1>
                                                <p className={element.type === "sold" ? "bg-red" : element.type === "new" ? "bg-green" : "bg-warning"}> {element.type}</p>
                                            </div>
                                            <p>{element.title} sit amet consectetur adipisicing elit. Corporis, sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur harum et esse alias exercitationem omnis suscipit enim similique asperiores nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempora dolores architecto illo quos non laudantium dolor {element.title}</p>
                                            <div className="price">
                                                <div className="sold">
                                                    <h4 className={element.type === "sold" ? "text-secondary text-decoration-line-through" : "text-red"}>${element.price}.00</h4>
                                                    {
                                                        element.type === "sold" ?
                                                            <h4 className="text-red">${Math.round(element.price * 0.6)}.00</h4>
                                                            :
                                                            <></>
                                                    }
                                                </div>
                                                <div className="add">
                                                    <button onClick={() => { props.remove(element) }} disabled={props.redisabled}>-</button>
                                                    <div><h1>1</h1></div>
                                                    <button onClick={() => { props.add(element) }} disabled={props.disabled}>+</button>
                                                </div>
                                            </div>
                                            {/* <div className="addToCard">
                                            <button >Add to card</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                        }
                    </>
                )
            }

        </>
    )
}