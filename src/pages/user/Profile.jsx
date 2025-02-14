import React from 'react'
import { useFetchCartsQuery } from '../../store/api/cart'

function Profile() {
      const {data,isLoading} = useFetchCartsQuery()
      // console.log(data.data.items);
      
  return (
    <div>Profile</div>
  )
}

export default Profile