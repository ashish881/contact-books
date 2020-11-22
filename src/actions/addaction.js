import { ADD_CONTACT, CLEARALL_CONTACT, DELETEALL_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SELECTALL_CONTACT, SELECTONE_CONTACT, UPDATE_CONTACT } from "../constant/addContact";

export const addContact = (contact) => (dispatch) =>{
      dispatch({
          type: ADD_CONTACT,
          payload: contact
      })
    //   localStorage.setItem('contact',JSON.stringify(getState().contact.contacts));
}

// Edit 

export const editContact = (id) => (dispatch)=> {
      dispatch({
          type:EDIT_CONTACT,
          payload:id
      })
     
}

export const updateContact = (id) => (dispatch)=> {
    dispatch({
        type:UPDATE_CONTACT,
        payload:id
    })
}
export const deleteContact = (id) => (dispatch)=> {
    dispatch({
        type:DELETE_CONTACT,
        payload:id
    })
    // localStorage.setItem('contact',JSON.stringify(getState().contacts));
}
    export const deleteallContact = (id) => (dispatch)=> {
        dispatch({
            type:DELETEALL_CONTACT,
            payload:id
        })
}

export const selectallContact = (id) => (dispatch)=> {
    dispatch({
        type:SELECTALL_CONTACT,
        payload:id
    })
}


export const clearallContact = () => (dispatch)=> {
    dispatch({
        type:CLEARALL_CONTACT,
    })
}

export const selectoneContact = (id) => (dispatch)=> {
    dispatch({
        type:SELECTONE_CONTACT,
        payload: id
    })
}






