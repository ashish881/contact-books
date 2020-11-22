import { ADD_CONTACT, CLEARALL_CONTACT, DELETEALL_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SELECTALL_CONTACT, SELECTONE_CONTACT, UPDATE_CONTACT } from "../constant/addContact";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    contacts :[
        {
         id:uuidv4(),
          Name: "Ashish",
          Phone: 1124567895,
          Email: "rjdon54@gmail.com",
        },
        {
            id:uuidv4(),
             Name: "Amir",
             Phone: 112867895,
             Email: "amir54@gmail.com",
           },
       
        ],
        contact:null,
        selectAll:[],
        selectone:null
    
}

 const addreducer = (state=initialState,action) =>{
            switch(action.type){
                case ADD_CONTACT:
                return{
                   ...state, contacts: [action.payload, ...state.contacts]
                }
                
                case EDIT_CONTACT:
                  let arr = state.contacts.find((contact) => contact.id === action.payload)
                  // arr = arr.values();
                  // for(let val of arr){
                  //   arr = val
                  // }  
                  console.log(arr)
                   return {...state,
                    contact:arr
                  }
                  
                  case UPDATE_CONTACT :
                    return {
                      ...state, contact:action.payload   
                      // ...state, contacts: state.contacts.map(contact=> contact.id === action.payload ? action.payload : contact )
                    }

                    case DELETE_CONTACT:
                      return{
                        ...state,contacts: state.contacts.filter(contact=> contact.id !== action.payload)
                      }

                      case DELETEALL_CONTACT:
                        return{
                          ...state, contacts:[]
                        }
                       case SELECTALL_CONTACT :
                         return{
                           ...state,
                           selectAll:action.payload
                         }

                         case CLEARALL_CONTACT:
                           return{
                             ...state,
                             selectAll:[]
                           }
                           case SELECTONE_CONTACT:
                             let selectArr = state.contacts.find(contact=> contact.id === action.payload)
                             return{
                               ...state,
                                selectone: selectArr
                             }
            default:
            return state;
}
            }


export default addreducer;