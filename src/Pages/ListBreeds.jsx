import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from "../Styles/ListBreeds.module.css"
const ListBreeds = () => {
    const[data,setData] =useState([])
    const getData=async()=>{
     try{
         let data=await fetch(`https://dog.ceo/api/breeds/list`)
         let res=await data.json()
        
         let datas=setData(res.message)
     }
     catch (err) {
         console.log("error:", err);
       }
    }
    useEffect(() => {
     getData();
 }, [])
 function handleClick(el){
     localStorage.setItem("category",el)
    //  console.log(el)
   }
//  console.log("breed",data)
function handleLogout(){
    localStorage.clear();

}
  return (
    <div>
        <h2>ListBreeds</h2>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <Link to="/details"><div className={Styles.listcont}>{data.map((el,id) => (
        <h3 onClick={()=>handleClick(el)}>
         {el}
        </h3>
      ))} </div></Link>
    </div>
  )
}

export default ListBreeds