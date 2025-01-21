import { useState } from "react";

export default function Comments({ addNewComment }) {
    const [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 5,
    });

    let [isValid,setisValid] = useState(true);

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((currData) => ({
            ...currData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        if (!formData.username) {
            console.log("Username not entered !");
            event.preventDefault();
            setisValid(false);
            return;
        }
        event.preventDefault(); // Prevent form refresh
        console.log(formData);

        addNewComment(formData); // Pass the new comment to the parent component

        // Reset the form fields
        setFormData({
            username: "",
            remark: "",
            rating: 5,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Leave your comment here!</h1>
                <br />
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    name="username"
                />
                {!isValid && <p style={{color:"red"}}>Username can not be null !</p>}
                <br />
                <br />
                <label htmlFor="remark">Comment: </label>
                <textarea
                    name="remark"
                    id="remark"
                    value={formData.remark}
                    onChange={handleInputChange}
                    placeholder="Write your remarks here"
                ></textarea>
                <br />
                <br />
                <label htmlFor="rating">Rating: </label>
                <input
                    type="number"
                    min={1}
                    max={5}
                    value={formData.rating}
                    onChange={handleInputChange}
                    id="rating"
                    name="rating"
                />
                <br />
                <br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}
