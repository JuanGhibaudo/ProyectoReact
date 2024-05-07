import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

import CharacterList from "./components/CharacterList"
import  {CharacterDetail}  from "./components/CharacterDetail"
function App(){
  return <div className="bg-black text-white">
      <img className="w-100" src="https://steemitimages.com/640x0/https://images.store.hmv.com/app_/responsive/HMVStore/media/content/rick_morty_internal_hero_panel.jpg?w=1060" alt="RickAndMortyImage" />
<BrowserRouter>
<Routes>
    <Route path="/" element ={<CharacterList/>} /> 
    <Route path ="/character/:id" element ={<CharacterDetail/>}/>
</Routes>
</BrowserRouter>
    </div>
}

export default App
