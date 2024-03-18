import "./CreateQueue.css"

const CreateQueue = () => {

    return(
        <div className="createQueue">
            <p className="title">Create your own Queue</p>
            <div className="inputWrapper">
                <input type="text" className="nameinput" placeholder="Input Queue Name"/>
                <input type="password" className="keyinput" placeholder="Input owner key"/>
            </div>
            <button className="applyButton">Apply</button>

        </div>
    )
}
export default CreateQueue