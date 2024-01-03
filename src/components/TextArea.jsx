import React , {useState} from "react";

function TextArea(props){
    const [text , setText] = useState({
        title: "",
        content: ""
    });

    function handleClick(event){
        // if(text.title === ""){
        //     alert("please Add a Note title");
            
            
        // }else if(text.content === ""){
        //     alert("please Add Note content");
        //     return text;
        // }
        props.onAdd(text);
        setText({
            title: "",
            content: ""
        });
        event.preventDefault();
        
    }

    function handleChange(event){
        const {name , value } = event.target;
        setText((prevValue) =>{
            return {
                ...prevValue,
                [name] : value
            };
        });
    }




    return (<div>
        <form>
            <input onChange={handleChange} value={text.title} name="title" placeholder="enter title"/>
            
            <textarea onChange={handleChange} value={text.content} name="content" placeholder="enter note.." rows="4"/>
            <button onClick={handleClick} >Add</button>
        </form>

    </div>)
    
}
export default TextArea;