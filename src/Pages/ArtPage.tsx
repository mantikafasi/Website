import Art from '../components/Art'
import "./ArtPage.css"
import { ArtEntity } from '../entities/ArtEntity'

function getImage(imageURL: string) {
    return require(`../images/${imageURL}`)
}

export default function ArtPage(props:any) {
    const artList: ArtEntity[] = [
        { ArtName: "Ven Dies", ArtDescription: "This art shows my hate to ven", ImageURL: getImage("venhate.png") },
        { ArtName: "Enes Hoca" , ArtDescription:"My drawing of my teacher",ImageURL: getImage("ehc.jpg")},
        
    
    ]

    return (
        <div className='ArtPage'>
            {artList.map(art => (<Art art={art} showArt={props.showArt}></Art>))}
        </div>
    )
}
