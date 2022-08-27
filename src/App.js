import React,{useState} from "react";
import './App.css';

function App() {
  const [data,setData] = useState({
    email : "",
    password : ""
  })
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault();
    if(data.password.length < 5){
      alert("password length must be greater than 5")
    }else{
      console.log(data)
    }
  }
  return (
    <div className="App">
        <form onSubmit={submitHandler}>
          <label style={{"color":"blue","fontFamily" :"Tahoma","flexDirection":"inline"}}>E-mail</label><br />
          <input type='text' name="email" onChange={changeHandler} placeholder='email' /><br />
          <label >password</label><br />
          <input type='password' name="password" onChange={changeHandler} placeholder='password' /><br /><br />
          <input type="submit" value="login" className="btn btn-primary"/><br />
        </form>
    </div>
  );
}

export default App;
