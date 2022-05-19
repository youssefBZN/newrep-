import {useState , useEffect} from "react";



function UEffect() {


  

   
  

    const [cont , setCont]= useState(0)
    useEffect(() => {
        setTimeout(() => {
            if(cont === 10) {
                alert('c 10')
            }
            setCont((cont) => cont + 1)
           
        },1000)
       
    

    } ,[cont])
  
 
   return <h1>i've rendered {cont}</h1>

}
export default UEffect
