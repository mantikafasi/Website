import Art from "../components/Art"
import "./Popup.css"

export default function ArtPopUp(props: any) {
    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={()=>props.setArt(undefined)}>&times;</span>
                <Art art={props.art}></Art>
            </div>
        </div>
    )
}
