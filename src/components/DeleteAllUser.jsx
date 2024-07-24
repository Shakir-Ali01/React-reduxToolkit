import React from "react";
import {clearAllUsers} from "../store/slices/UserSlice";
import { useDispatch} from 'react-redux'
export const DeleteAllUser = () => {
    const dispatch=useDispatch();
const deleteAllUser=(()=>{
  alert();
  dispatch(clearAllUsers());
})
 return <div><button className=' btn-delete' onClick={()=>deleteAllUser()}>DeleteAllUser</button></div>;
};