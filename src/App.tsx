import './App.css';
import ArtPage from './Pages/ArtPage';
import ArtPopUp from './popups/ArtPopUp';
import { ArtEntity } from './entities/ArtEntity';
import { useState } from 'react';



function App(this: any) {
  const [art,setArt] = useState<ArtEntity>()
  
  const showArt = (art:ArtEntity) => {
    console.log("setting art",art)
    
    setArt(art)
  }
  return (

    <div className="App">
      <header className="App-header">
        <h1>MY GLORIOUS ARTS</h1>
        <ArtPage showArt={showArt}/>
      </header>
      {art ? <ArtPopUp setArt={showArt} art={art}/> : <></>}

    </div>
  );
}

export default App;


