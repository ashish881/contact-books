import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {editContact, updateContact} from "../actions/addaction"
// import { v4 as uuidv4 } from 'uuid';

export default function EditContact(props) {
    const id = props.match.params.id;
    console.log(id)
    const contact = useSelector(state => state.contact.contact)
     const dispatch = useDispatch();
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')

    // const submitHandler = (e) =>{
    //    e.preventDefault();
    //    const new_contact ={
    //        id:uuidv4(),
    //        Name:name,
    //        Phone:phone,
    //        Email:email
    //    }
    //    dispatch(addContact(new_contact))
    //     props.history.push("/");
      
    // }
            useEffect(() => {
                dispatch(editContact(id)) 
            if(contact !== null){
             setname(contact.Name)
             setphone(contact.Phone)
             setemail(contact.Email)
            }
            
            }, [dispatch,id,contact])

            const UpdateHandler = (e) =>{
                e.preventDefault();
                // const update_contact={
                //     Name:name,
                //     Phone:phone,
                //     Email:email
                // }
                const update_contact = Object.assign(contact,{ id:id,Name:name,Phone:phone,Email:email})
                dispatch(updateContact(update_contact))
                props.history.push('/')
                console.log(update_contact)
            }
  
    return (
        <>
            <div className="contact-container">
                <div className="contact-c">
                    <h4>Edit a Contact</h4>
                    <form onSubmit={UpdateHandler}>
                        <div className="input-field"><input type="text" name="name" placeholder="Enter Your Name" value={name} onChange={(e)=> setname(e.target.value)} required></input></div>
                        <div className="input-field"><input type="text" name="phone" placeholder="Enter Your Phone Number" value={phone} onChange={(e)=> setphone(e.target.value)} required></input></div>
                        <div className="input-field"><input type="email" name="email" placeholder="Enter Your E-mail Address" value={email} onChange={(e)=> setemail(e.target.value)} required></input></div>
                        <button>Update Contact</button>
                    </form>
                </div>
            </div>
        </>
    )
}
