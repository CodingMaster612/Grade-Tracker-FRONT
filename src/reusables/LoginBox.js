import axios from "axios";
import { useState, useEffect } from "react";
import '../css/Login.css';
import BackgroundImage from "../img/grades.png"


function LoginInBox() {

    const [user, setUser] = useState({})


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempUser = { ...user }
        tempUser[name] = value
        setUser(tempUser)
    }

    const submitHandler = () => {



        axios.post("", user)
            .then((response) => {

                console.log(response.data)


            }).catch((e) => {
                console.log(e.response)

            })

    }




    return (
        <header style={HeaderStyle}>
            <div className="login-container">
                <div className="login-box">
                    <h2>Login</h2>
                    <input placeholder="email" type="text" className="" onChange={changeHandler} name="email" value={user.email} />

                    <input placeholder="Password" type="password" className="" onChange={changeHandler} name="password" value={user.password} />

                    <button className="" onClick={submitHandler}>Submit</button>
                </div>
            </div>






        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "white"
}
export default LoginInBox