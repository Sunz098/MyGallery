import { useState } from 'react'
import './App.css'
import Appnavbar from './components/Appnavbar'
import AppSearch from './components/AppSearch';
import ItemPost from './components/ItemPost';
import PicItem from './components/PicItem';
import pics from './data/Pics'

function App() {
  


  const [selectedPic , setSelectedpic] = useState(null);
  const [searchText , setSearchText] = useState("");

  function onPicOpenClick(thepic){
    setSelectedpic(thepic);
  }

  function onPicCloseClick(){
    setSelectedpic(null)
  }

  const fillterPic = pics.filter((pic)=>{
    return pic.title.includes(searchText);
  })

  const picElement = fillterPic.map((pic , index)=>{
    return <PicItem key={index} pic={pic} onPicClick={onPicOpenClick} />
  });

  let picPost = null;
  if(!!selectedPic){
    picPost = <ItemPost pic={selectedPic} onBgClick={onPicCloseClick}/>
  }

  return (
    <div className="App">
      <Appnavbar/>
      <section className='app-section'>
          <div className='app-container'>
            <AppSearch value={searchText} onValueChange={setSearchText}/>
          </div>
          <div className='app-grid'>
            {picElement}
          </div>
      </section>
      {picPost}
      
    </div>
  )
}

export default App
