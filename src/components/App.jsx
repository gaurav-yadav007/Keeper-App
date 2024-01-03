import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import TextArea from "./TextArea";
function App(){
    const [notes , setNotes] = useState([]);

    function onDeleting(id){
        setNotes((prevValues) => {
            return (prevValues.filter((item , index)=>{
                return id !== index
            }))
        })
    }

    function addNote(text){
        
        setNotes((prevValue) =>{
            return [...prevValue , text];
        })
       

    }

    return (<div>

        <Header />
        <TextArea onAdd={addNote}/>
        {notes.map((noteItem , index)  =>{
            return <Note key={index} id={index} title={noteItem.title} content ={noteItem.content} onDelete={onDeleting}/>
        })}
       
        <Footer/>
    </div>)
}

export default App;