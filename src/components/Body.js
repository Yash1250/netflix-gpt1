import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { auth } from './utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from './utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {email , displayName , uid} = user;
      dispatch(addUser({
        email : email,
        displayName : displayName,
        uid : uid,
      }))

    } else {
      dispatch(removeUser());
    }
  });
    const browserRouter = createBrowserRouter([
        {
            path : '/',
            element : <Login/>
        },
        {
            path : '/browse',
            element : <Browse/>
        }
    ])
  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default Body
