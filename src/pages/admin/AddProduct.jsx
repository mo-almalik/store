import React from 'react'
import ProductForm from '../../components/admin/form/ProductForm'

function AddProduct() {
  const onSubmit = (data) =>{
  console.log(data);
  
  }
  return (
    <div>AddProduct
    
     <ProductForm onSubmit={onSubmit} />
    </div>
  )
}

export default AddProduct