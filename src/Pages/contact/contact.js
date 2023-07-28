import { Header } from "../../layout/header"
import "./_contact.scss"
import src from "../../assets/images/contact.jpg"
export const Contact = () => {
    return (
        <div>
            <Header title={"CONTACT"} src={src} />
            <div className="Contact ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.1328474915267!2d-7.709395925440605!3d33.57589984273431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d4a33900f835%3A0xb540923b5bdf10fb!2sMorocco%20Mall!5e0!3m2!1sfr!2sma!4v1690483324824!5m2!1sfr!2sma" width="400" height="380" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="champs ">
                    <h1>Send us your message</h1>
                    <form>
                        <input type="text" id="fname" name="fname" defaultValue="Full name" />
                        <br />
                        <input type="text" id="lname" name="lname" defaultValue="Phone number" />
                        <br />
                        <input type="text" id="fname" name="fname" defaultValue="Email" />
                        <br />
                        <textarea name="text" id="text"  rows="4" placeholder="send us a feadback"></textarea>
                        <br />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}