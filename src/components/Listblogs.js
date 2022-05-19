import {getLists} from '../components/getList'
import{useEffect, useState} from 'react'
import{removeList} from './getList'



function ListBlogs() {
   


  
    let [blogs , setLists] = useState([])
    useEffect(()=>{
        let list = getLists()
        setLists(getLists())
    },[blogs])
    function removeBlog(id) {
        
        console.log('Valeur de Id ',  id)
        
        removeList(id)

        console.log('list kudhkhdws' , getLists())
        setLists(getLists())
    }
 
    return (

        <div className='container mt-5'>
           <div className='row mx-0 mb-5'>
          
            { 
                blogs.map((item , index) => (
                    
                
                    <div  key={item.id} className=" col-12 col-sm-6 col-lg-4 col-xxl-4 mt-2 reservation-item">
                        <div className="bg-dark text-white p-2 rounded shadow-lg">
                           <button className='btn btn-info btn-sm ms-3'>TItre : {item.title}</button>
                            <div className='row mt-3'>
                                <div className='col-6'> <strong>{item.contenu}</strong></div>
                             
                            </div>
                         


                            <div className='row'>
                                <div className='col-6'> <strong>Categories: {item.categories} </strong></div>
                              
                            </div>

                            <div className='text-end mt-4'>
                            
                                <button className='btn btn-danger me-3' onClick={() => { removeBlog(item.id) }} >Annuler</button>
                                <button  >modifier</button>
                            
                            </div>
                         

                            
                        </div>
                    
                    </div>
                                    
                ))
            }
           </div>
           

        
       </div>
    

      
         
   
       
    )
  
}


export default ListBlogs