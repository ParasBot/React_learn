import { useState } from "react";

export default function Form() {
    let [formData , setFormData] = useState({
        fullName:"",
        userName:"",
        password:""
    })
    // let handleChange = (event) => {
    //     setFullName(event.target.value);
    // }
    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // }
    // let handleInputChange = (event) => {
    //     let fieldName = event.target.name;
    //     let newvalue = event.target.value;
    //     setFormData((currData) => {
    //         return { ...currData , 
    //             [fieldName] : newvalue
    //         };
    //     })
    // };
    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData , 
                [event.target.name] : event.target.value
            };
        })
    };
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            userName:"",
            password:""
        });
    };
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name:</label>
            <input
                type="text"
                placeholder="Enter Your name"
                value={formData.fullName}
                id="fullname"
                name="fullName"
                onChange={handleInputChange}
            />
            <br /><br />
            <label htmlFor="userName">Username :</label>
            <input
                type="text"
                placeholder="Enter Username"
                value={formData.userName}
                id="userName"
                name="userName"
                onChange={handleInputChange}
            />
            <br /><br />
            <label htmlFor="password">password :</label>
            <input
                type="password"
                placeholder="Enter password"
                value={formData.userName}
                id="password"
                name="password"
                onChange={handleInputChange}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}
