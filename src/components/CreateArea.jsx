import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  
  const [fullNote, setFullNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleNote(event) {
    const { name, value } = event.target;
    setFullNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.addNewNote(fullNote);
    event.preventDefault();
    setFullNote({
      title: "",
      content: ""
    });
  }

  function handleInitialClick(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {/* before the user will click on "textarea", this "title-input" will be hidden, after that - visible */}
        {isExpanded && <input
                          name="title"
                          placeholder="Title"
                          value={fullNote.title}
                          onChange={handleNote}
                        />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1} //before the user will click on "textarea" it will be small (1 row), after click - expanded (3 rows)
          value={fullNote.content}
          onChange={handleNote}
          onClick = {handleInitialClick}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
