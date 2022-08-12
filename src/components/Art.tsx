import "./Art.css"

export default function Art(props:any) {

  return (
    <div className='ArtCard' onClick={()=>{props.showArt(props.art)}}>
      <img src={props.art.ImageURL} alt="art"  />
      <div className='container'>
        <h3>{props.art.ArtName}</h3>
        <p>{props.art.ArtDescription}</p>
      </div>  
    </div>
  )
}
