import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {addLists} from '../components/getList'







function Ajoutblocs () {
    
    let [inputs, setInputs] =useState ({})
    let navigate = useNavigate()
  
    function handeleOnchange(event) {
        let name = event.target.name
        let value = event.target.value
        setInputs(inputs=>({...inputs, [name] : value}))
    }

        function handelOnsubmit(event) {
            event.preventDefault();
            console.log(inputs)
            addLists(inputs)
            navigate('/listblogs')
         
        
    }

    return (
        <form onSubmit= {handelOnsubmit} >
            <div className='form-group mt-2'>
                <label className='form-label'>Titre</label>
                <input className='form-control' type='text' name='title' onChange={handeleOnchange}></input> 

            </div>
            <div className='form-group mt-2'>
                <label className='form-label'>Contenu</label>
                <textarea className='form-control' type='text' name='contenu' onChange={handeleOnchange}></textarea> 

            </div>
            <div className="form-group mt-2">
                   <label className="form-label">categorie</label>
                   <select className="form-control" name = "categories" onChange={handeleOnchange} >
                   <option value="1">Modele</option>
                   <option value="2">web</option>
                   <option value="3">frontEnd</option>
                   <option value="4">Backend</option>
                        
                   </select>
               </div>
               <div className="mt-4">
               <button className="btn btn-primary">Ajouet</button>
          
               

               
                 
               </div>
        </form>

    )
}
export default Ajoutblocs