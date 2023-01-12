import React, { useEffect } from 'react'
import { useState } from 'react'
import Styles from "../Styles/BreedDetail.module.css"
const BreedDetail = () => {
    const [categoryData, setCategoryData] = useState([])
    let category=localStorage.getItem("category")
    // console.log("category",category)
    const[categoryName,setCategoryName]=useState(category)
      const getProductData = async (categoryName) => {
          try {
              let data = await fetch(`https://dog.ceo/api/breed/${categoryName}/images/random`)
              let res = await data.json()
              let datas=setCategoryData(res.message)
             }
          catch(err){
            console.log("error:", err);
          }
      }
      useEffect(() => {
          getProductData(categoryName)
      }, [categoryName])
    // console.log("categoryData",categoryData)
   
  return (
    <div >
       <h1>BreedDetails</h1>
      
       <div className={Styles.breeddiv}>
       <h3>{categoryName}</h3>
       <div className={Styles.imgdiv}>
  <img src={categoryData} alt={categoryName} />
  </div>
  </div>
      </div> 
    
  )
}

export default BreedDetail