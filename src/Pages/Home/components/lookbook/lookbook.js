import "./_lookbook.scss"
import { BsPlayFill } from "react-icons/bs";
import bg from "../../../../assets/images/background.jpg"
export const LookBook = () => {
    return (
        <div className="lookbook">
            <div className="lookbook">
                <img src={bg} alt="" />
            </div>
            <div className="text">
                <h3>THE BEAUTY</h3>
                <h1>LOOKBOOK</h1>
                <p><BsPlayFill /> play video</p>

            </div>

        </div>
    )
}

