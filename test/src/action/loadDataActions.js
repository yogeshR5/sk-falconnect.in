import peopleData from '../people_5.json'

 export const  LOAD_REQUEST ='LOAD_REQUEST', LOAD_REQUEST_SUCCESS ='LOAD_REQUEST_SUCCESS';


    export const loadInitialData=()=>{
      return{ type:LOAD_REQUEST_SUCCESS,
                payload: peopleData

      }
    }
