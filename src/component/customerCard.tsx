import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../features/customerSlice'

interface CustomerCardType {
 id: string
 name: string
 food: string[]
}

export default function CustomerCard({ id, name, food} : CustomerCardType) {

  
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();

  return (
   <div className="customer-food-card-container">
     <h5>{name}</h5>
     <div className="customer-foods-container">
       <div className="customer-food"></div>
         {food.map(_food => {
           return <p>{_food}</p>
         })}
       <div className="customer-food-input-container">
         <input value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)}/>
         <button onClick={() =>{
          if (!customerFoodInput) return;
          dispatch(addFoodToCustomer({
           id,
           food: customerFoodInput
          }))
          setCustomerFoodInput("")
         }
         }>Add</button>
       </div>
     </div>
   </div>
  )
}
