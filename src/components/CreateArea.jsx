import React, { useState } from "react";

function CreateArea(props) {
  const [fullNote, setFullNote] = useState({
    title: "",
    content: ""
  });

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

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={fullNote.title}
          onChange={handleNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={fullNote.content}
          onChange={handleNote}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
