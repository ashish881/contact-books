import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import {addContact} from "../actions/addaction"
import { v4 as uuidv4 } from 'uuid';

export default function CreateContact(props) {
    const dispatch = useDispatch();
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')

    const submitHandler = (e) =>{
       e.preventDefault();
       const new_contact ={
           id:uuidv4(),
           Name:name,
           Phone:phone,
           Email:email
       }
       dispatch(addContact(new_contact))
        props.history.push("/");
      
    }

  
    return (
        <>
            <div className="contact-container">
                <div className="contact-c">
                    <h4>Add a Contact</h4>
                    <form onSubmit={submitHandler}>
                        <div className="input-field"><input type="text" name="name" placeholder="Enter Your Name" value={name} onChange={(e)=> setname(e.target.value)} required></input></div>
                        <div className="input-field"><input type="text" name="phone" placeholder="Enter Your Phone Number" value={phone} onChange={(e)=> setphone(e.target.value)} required></input></div>
                        <div className="input-field"><input type="email" name="email" placeholder="Enter Your E-mail Address" value={email} onChange={(e)=> setemail(e.target.value)} required></input></div>
                        <button>Create Contact</button>
                    </form>
                </div>
            </div>
        </>
    )
}
