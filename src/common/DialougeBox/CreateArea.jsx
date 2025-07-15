import React, { useState } from "react";
import { GoPlus } from "react-icons/go";


function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form
        className="  mx-auto  bg-[#0B1739] p-4 rounded-lg shadow-md border border-[#343B4F]
          flex justify-center items-center max-w-[450px]
        "

      >
       

        <button
          onClick={submitNote}
          className="  text-white cursor-pointer
          "
        >
         <GoPlus />

        </button>
      </form>
    </div>
  );
}

export default CreateArea;
