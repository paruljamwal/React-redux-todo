//action is a function which take obj which have excatky 2 keys 
//store and action 
//everytime give action to dispatch

//Action type


export const ADD_TODO="ADD_TODO";

//Action creater



// const addcount({type:ADD_COUNT,payload:data})


//action creater

export const TODO=(data)=>{
    return{
     type:ADD_TODO,
     payload:data,
    }
}