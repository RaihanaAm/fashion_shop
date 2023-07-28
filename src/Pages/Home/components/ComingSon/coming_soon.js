import { OneComing } from "./component"
import "./_coming_soon.scss";
import img1 from "../../../../assets/images/item-02.jpg"
import img3 from "../../../../assets/images/item-05.jpg"
import img2 from "../../../../assets/images/item-cart-02.jpg"


export const ComingSoon = () => {
    let images = [img1, img2, img3]
    return (
        <div className="coming d-lg-flex justify-content-center align-items-center ">
            {
            images.map((src,index)=>
            <div key={index}>
                <OneComing  src={src} />
            </div>
            )
        }
        </div>
    )
}