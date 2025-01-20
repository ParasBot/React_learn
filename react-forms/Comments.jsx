import { useState } from "react";

export default function Comments() {
        let [formData , setFormData] = useState({
            username:"",
            remark:"",
            rating:5
        });
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
                username:"",
                remark:"",
                rating:5
            });
        };
    return(
        <div>
            <form onChange={handleSubmit}>
                <h1>Leave your comment Here ! </h1>
                <br /><br />
                <label htmlFor="username">Usename : </label>
                <input type="text" placeholder="Userame" id="username" value={formData.username} onChange={handleInputChange} name="username"/>
                <br /><br />
                <label htmlFor="remark">Comment : </label>
                &nbsp;&nbsp;
                <textarea name="remark" id="remark" value={formData.remark} onChange={handleInputChange} placeholder="Write Your remarks here " ></textarea>
                <br /><br />
                <label htmlFor="rating" >Rating : </label>
                <input type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    );
}
