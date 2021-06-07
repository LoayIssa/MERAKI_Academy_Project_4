import axios from 'axios';
import React , {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./signUp.css"


const Login =(props)=>{
  const history = useHistory();
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [loginError, setLoginError] = useState("");

  const cheakLogin =()=>{   
    axios.post(`http://localhost:5000/login` ,{email:email, password:password})
    .then((result)=>{
        console.log(result.data.token)
       props.token1(result.data.token)
       // console.log(token1())
        history.push("/");    
  
    }).catch((error)=>{
      setLoginError(error.response.data);
    })

  }

  return (
    <>
    <div className ="allInput_login">
      
      <input className="inputs" type ="text" placeholder ="email here" onChange={(e)=>{
        setemail(e.target.value)
      }}/>
      <input className="inputs" type ="password" placeholder ="password here" onChange={(e)=>{
        setpassword(e.target.value)
      }}/>
      <button className="btn" onClick={cheakLogin}>Login</button>
      <din  className="singUp"><p>Do not have an account ?<span><Link to="/singUp"> sign up</Link></span></p> </din>
      
    </div>
    
    <div className="errorlogin">{loginError ? <p className="loginerr">{loginError}</p> : ""}</div>
      
    </>
  );

}

export default Login