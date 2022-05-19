


import Ajoutblocs from './components/Ajouterblogs'
import ListBlogs from './components/Listblogs'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import UEffect from './components/UseEffect'
import Updatefunct from './components/VariableUpdate'



function App() {
  return (
  
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ajoutblocs/>}></Route>
        <Route path="/listblogs" element={<ListBlogs/>}></Route>
        <Route path="/usefect" element={<UEffect/>}></Route>
        <Route path="/Update" element={<Updatefunct/>}></Route>
      </Routes>
    </BrowserRouter>

  
   
  );
}

export default App;
