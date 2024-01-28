import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUsers } from '../../features/userSlice.action';

const SessionsList = () => {
    const dispatch = useDispatch();
  return (
    <div>
        SessionList
        <button className='bg-red-500  rounded-md p-2 m-2 left-0' onClick={()=>dispatch(logoutUsers())}>LogOut</button>
    </div>
  )
}

export default SessionsList