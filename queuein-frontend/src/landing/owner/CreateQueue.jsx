import { useState } from "react";
import "./CreateQueue.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateQueue = () => {
    const [username,setUsername] = useState('')
    const [queueName,setQueueName] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        axios.post('http://localhost:8080/createQueue', null, {
            params: {
                username: username,
                queueName: queueName
            }
        })
        .then(response => {
            console.log('Queue created successfully:', response.data);
            navigate('/userqueue')
            
        })
        .catch(error => {
            console.error('Error creating queue:', error);
        });
    }


    return(
        <div className="createQueue">
            <p className="title">Create your own Queue</p>
            <div className="inputWrapper">
                <input 
                type="text" 
                className="nameinput" 
                placeholder="Input Username"
                onChange={event=>{setUsername(event.target.value)}}
                />
                <input 
                type="password" 
                className="keyinput" 
                placeholder="Input Queue Name"
                onChange={event=>{setQueueName(event.target.value)}}
                />
            </div>
            <button className="applyButton" onClick={handleClick}>Apply</button>

        </div>
    )
}
export default CreateQueue