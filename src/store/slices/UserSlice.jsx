import {createSlice} from "@reduxjs/toolkit";
const userSlice=createSlice({
   name:"user",
   initialState:[],
   reducers:{
      addUser(state, action){
         state.push(action.payload);
         console.log(action.payload)
      },
      removeUsers(state, action){
         console.log("This Id "+ action.payload +"   Data Is Deleted " );
         state.splice(action.payload, 1)
      
      },
      clearAllUsers(state, action){
         //delete All the element from the array which is saving in initial state
          return [];
      },
   },
});

console.log(userSlice.actions);
console.log(userSlice);

export default userSlice.reducer;
//export our action creator (add user ,removeUsers,deleteUsers)
export const {addUser,removeUsers,clearAllUsers} =userSlice.actions;
// export const {removeUsers} =userSlice.actions;