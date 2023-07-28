import "./_header.scss"
import "./_header_respo.scss"
import banner from "../../../../assets/images/master-slide-02.jpg"
import banner1 from "../../../../assets/images/master-slide-03.jpg"
export const Header = () => {
    return (
        <section className="header">
            <div className="carrousel">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner1} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <h1>LEATHER BAGS !</h1>
                <p>New collection</p>
                <button>Shop now</button>
            </div>
        </section>
    )
}