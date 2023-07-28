import "./_about.scss"
import ala9a from "../../assets/images/about.jpg"
import src from "../../assets/images/aboutus.jpg"
import { Header } from "../../layout/header"
export const About = () => {
    return (
        <div className="ABOUT">
            <Header title={"ABOUT"} src={src} />
            <div className="about ">
                <div className="">
                    <img src={ala9a} alt="" />
                </div>
                <div className="texts">
                    <div className="text">
                        <h1>OUR STORY</h1>
                        <p> The clothes store, named <b>"Fashion,"</b> was tucked away in a narrow alley, covered with ivy and adorned with twinkling lights that seemed to beckon customers from afar. It was said that those who entered the store never left empty-handed and that the clothes they purchased from Madame Elara had an otherworldly charm.
                            One sunny morning, a young woman named Lily, who had recently moved to Evergreen Valley, decided to explore the town. As she wandered through the alleys, she caught sight of the mystical clothes store. Drawn by its allure, she stepped inside and was greeted warmly by Madame Elara.
                            Madame Elara was a kind and elegant woman with sparkling eyes and a gentle smile. She showed Lily around the store, presenting an array of garments that seemed to possess a life of their own. Each piece had a unique story, woven into the fabric, making them one-of-a-kind creations.
                        </p>
                    </div>
                    <div className="tex">
                        <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something.
                        It seemed obvious to them after a while.<span> - Steve Job’s</span></p>
                    </div>
                </div>
            </div>

        </div>

    )
}