import { useState } from "react";

export default function Form() {
    const [fullName, setFullName] = useState("Paras");
    const [userName, setUsername] = useState("");
    let handleChange = (event) => {
        setFullName(event.target.value);
    }
    let handleUsername = (event) => {
        setUsername(event.target.value);
    }
    return (
        <form>
            <label htmlFor="fullname">Full Name:</label>
            <input
                type="text"
                placeholder="Enter Your name"
                value={fullName}
                onChange={handleChange} 
                id="fullname"
            />
            <br /><br />
            <br /><br />
            <label htmlFor="userName">Username :</label>
            <input
                type="text"
                placeholder="Enter Username"
                value={userName}
                onChange={handleUsername} 
                id="userName"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
