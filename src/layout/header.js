import "./_header.scss"

export const Header =(props)=>{
    return(
        <div className="headers">
        <img src={props.src} alt="" />
            <div className="text">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}