
 export const UPDATE_REQUEST_SUCCESS ='UPDATE_REQUEST_SUCCESS';



    export const upDateForm=(data,key)=>{
      console.log("sssssssssucess",data );
      return{ type:UPDATE_REQUEST_SUCCESS,
                payload:key,

      }
    }
