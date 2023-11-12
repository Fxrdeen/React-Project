import React from 'react'
import data from '../db/data'
import { useParams } from 'react-router-dom'
import AnotherCard from '../components/AnotherCard'
import './OneProduct.css'
export const OneProduct = () => {
    const {id} = useParams();
    const objId = parseInt(id, 10);
    const selectedObj = data.find(obj => obj.id === objId);
    return (
    <div>
        <h1>Product: {objId}</h1>
        <AnotherCard
          id = {selectedObj.id}
          key={selectedObj.id}
          img={selectedObj.img}
          title={selectedObj.title}
          star={selectedObj.star}
          reviews={selectedObj.reviews}
          prevPrice={selectedObj.prevPrice}
          newPrice={selectedObj.newPrice}
        />

    </div>
  )
}
