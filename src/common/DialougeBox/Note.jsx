import React from "react";
 import { HiDotsHorizontal } from "react-icons/hi";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
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
   <div className=" xsm:flex xsm:justify-center xsm:items-center">
    <div className="bg-[#0B1739] rounded-lg border-[#343B4F] border shadow-md p-3 mt-6 w-fit ">

         <input
                  name="title"
                  onChange={handleChange}
                  value={note.title}
                  placeholder="Title"
                  className="w-full border-none p-1 outline-none text-[1.2em] font-inherit"
                />
                <textarea 
                  name="content"
                  onChange={handleChange}
                  value={note.content}
                  placeholder="Take a note..."
                      rows={1}
                  className="w-full border-none p-1 outline-none text-[1.2em] font-inherit resize-none customScroll"
                />
      {/* <h1 className="text-[1.1em] mb-1.5">{props.title}</h1>
      <p className="text-[1.1em] mb-2.5 whitespace-pre-wrap break-words">{props.content}</p> */}
     <div className="flex justify-end items-center" >
         <button
        onClick={handleClick}
        className=" text-white w-9 h-9 cursor-pointer  "
      >
       <HiDotsHorizontal />

      </button>
     </div>
    </div>
   </div>
  );
}

export default Note;
