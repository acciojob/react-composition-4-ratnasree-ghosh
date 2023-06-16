import React, {useState} from "react";

const Form = ()=>{
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [pass,setPass] = useState("");

    // function submit(e){
    //     e.preventDefault();
    //     let obj= {name: name, email: email, password: pass}
    //     console.log(obj);

    // }
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault();
                let obj= {name: name, email: email, password: pass}
                console.log(obj);
            }}>
                <label for="name">name</label>
                <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
                <br/>
                <label for="email">Email</label>
                <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <label for="pass">Passowrd</label>
                <input type="text" id="pass" onChange={(e)=>setPass(e.target.value)}/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;