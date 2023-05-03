
//function to update backupDetails state with backupdata to be used in buiding app on load

export function updateBackupDetails(state,payload){
    console.log("payload",payload)
    return{
        ...state,
        backupDetails:{
            ...state.backupDetails,
            ...payload,
        }
    }
}