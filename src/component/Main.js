import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { clearallContact, deleteallContact, deleteContact, selectallContact } from '../actions/addaction';



export default function Main() {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contact.contacts)
    const [SelectAll, setSelectAll] = useState(false)
    console.log(SelectAll);
    const did = contacts.map(contact=> contact.id);
    
    const DeleteHandler = () =>{ 
        dispatch(deleteallContact(did))

    }

    useEffect(() => {
       if(SelectAll){
           dispatch(selectallContact(did))
       }else{
           dispatch(clearallContact())
       }
        
    }, [SelectAll,did,dispatch])

    return (
        <>
         {did.length ===0 ? null : SelectAll ? <span onClick={DeleteHandler} className="delete-all">Delete</span> : null}
            
            {/* {SelectAll ? <span onClick={DeleteHandler} className="delete-all">Delete</span> : null}  */}
            <main>
         
                <table>
                    <tbody>
                  {did.length >0 ?   <tr>
                      <th><label htmlFor="check-box"></label>
                      <input type="checkbox" id="check-box" value={SelectAll} onChange={()=> setSelectAll(!SelectAll)} /></th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Actions</th>
                  </tr> : null}
                    
                      
                        {contacts.map((contact)=>{
                                  let {id} = contact;
                                  return(
                                  <tr>
                                      <td key={id}><label htmlFor="checkbox2"></label>
                                      <input type="checkbox" id="checkbox2" checked={SelectAll}  onChange={()=> setSelectAll(!SelectAll)}/></td>
                                      <td>{contact.Name}</td>
                                      <td>{contact.Phone}</td>
                                      <td>{contact.Email}</td>
                                      <td>  <Link to={`/editcontact/${id}`}><i className="fad fa-pencil-alt actionicon"></i></Link>
                                          <Link to="/"><i onClick={()=> dispatch(deleteContact(id))} className="fad fa-trash actionicon"></i></Link></td>
                                  </tr>)
                        })}

                        
                            
                           
                        
                    </tbody>
                </table>
            </main>
        </>
    )
}
