import React ,{useState} from "react";
// import { FaGoogle,FaFacebook } from "react-icons/fa";
import imgF from "./facebook 1.png";
import imgG from "./search 1.png";

const Form =()=>{
    

    let [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    console.log("user", user)

    function validateForm(event){
        event.preventDefault()
        if(user.name.length < 3 || user.name.length > 30){
            setSuccess("")
           return  setError("Name should be min 3 char and max 30 char")
            
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            setSuccess("")
            return setError("Email should contain @ and .")
        }
        else if(user.password.length < 8 || user.password.length > 15){
            setSuccess("")
            return setError("Password should be min 8 char and max 15 char")
        }
        else if(user.password !== user.confirmPassword){
            setSuccess("")
            return setError("Password and Confirm Password should be same")
        }

        setSuccess("Successfully Created !")
        setError("")

    }

    return (

<div className="form-info">
<h1>Create Account</h1>
<div className="btn">

<div className="imgG">
              <img src={imgG} alt="google img" />
              <p>Sign up with Google</p>
            </div>

            <div className="imgF">
              <img src={imgF} alt="facebook img" />
              <p>Sign up with Facebook</p>
            </div>

{/* <button className="btn-1"><img src="./facebook 1.png" alt=""/> Sign up with Google </button> */}
{/* <button className="btn-2"><FaFacebook/>Sign up with Facebook </button> */}

</div>
<h2>-OR-</h2>

<form onSubmit={validateForm}>
<input type="text" placeholder="Full Name" 
     onChange={(event)=>setUser({...user, name: event.target.value})}
                />
<input type="email" placeholder="Email Address" 
                    onChange={(event)=>setUser({...user, email: event.target.value})}
                />
 <input type="password" placeholder="Password" 
                    onChange={(event)=>setUser({...user, password: event.target.value})}
                />
<input type="password" placeholder="Confirm Password" 
                    onChange={(event)=>setUser({...user, confirmPassword: event.target.value})}
                />

<button className="btn-3" type="Submit" >Create Account</button>


            </form>
            {
                error && <p className="error">{error}</p>
            }
            {
                success && <p className="success">{success}</p>
            }

        </div>
    )
}
export default Form;