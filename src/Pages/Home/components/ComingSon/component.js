import "./_coming_soon.scss"
import "./_coming_respo.scss"
import img from ".././../../../assets/images/blog-02.jpg"
export const OneComing = (props) => {
    return (
        <div className="OneComing">
            <div>
                <img src={props.src}alt="" />
            </div>
            <div className="btnn">
                <button>COMING SOON</button>
            </div>

        </div>
    )

}