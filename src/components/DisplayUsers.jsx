import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import {removeUsers} from "../store/slices/UserSlice";
const DisplayUsers = () => {
    const dispatch=useDispatch();
    //fetching  the state of user from store
    // //In store we have  write users: userSlice,  means userSlice state will be users so if we want to fecth 
    // the state of userSlice then we will get the state from store which is users(we will get using useSelector)
    const data=useSelector((state)=>{
       return state.users;
    })
    console.log(data);

    const deleteUser=(id)=>{
      dispatch(removeUsers(id))
    }
  return (
    <div>
        {data.map((user,id)=>{
            return <>
            <table class="table table-bordered">
  <thead>
    <tr>
      
      
    </tr>
  </thead>
  <tbody>
   
    <tr>
      <td colspan="2" key={id}>{user}</td>
     
      <td style={{float: "right !important"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className=' btn-delete' onClick={()=>deleteUser(id)}><MdDeleteForever className='delete-icon'/></button></td>
    </tr>
  </tbody>
</table>
            <hr></hr>
            </>
        })}
       
    </div>
  )
}

export default DisplayUsers