import React from 'react'
import HeaderTemplate from '../TemplatePage/HeaderTemplate'
import CreateArea from '../../common/DialougeBox/CreateArea'
import Note from '../../common/DialougeBox/Note';
import { BsThreeDotsVertical } from "react-icons/bs";


export default function Setting() {
  // one array for each column
  const [col1, setCol1] = React.useState([]);
  const [col2, setCol2] = React.useState([]);
  const [col3, setCol3] = React.useState([]);

  // helper that returns add / delete fns given a setter
  const makeColumnHelpers = (setter) => ({
    add: (note) => setter(prev => [...prev, note]),
    del: (id) => setter(prev => prev.filter((_, idx) => idx !== id)),
  });

  const col1Helpers = makeColumnHelpers(setCol1);
  const col2Helpers = makeColumnHelpers(setCol2);
  const col3Helpers = makeColumnHelpers(setCol3);

  return (


    <>
      <div className='
    xsm:mb-4
    lg:mb-0
    '>
        <HeaderTemplate title="Kanban" />
      </div>

      <div className="grid md:grid-cols-3 gap-4
      xsm:grid-row-2 xsm:grid-cols-1

      ">

        <div className='xsm:mb-10 md:mb-0'>
          <div className=' flex items-center md:justify-between text-[12px] text-[#AEB9E1] mb-4
          xsm:justify-center xsm:gap-4 
          '>
            <p>To do <span>0</span></p>
            <BsThreeDotsVertical />

          </div>
          <div>
            <Column
              notes={col1}
              onAdd={col1Helpers.add}
              onDelete={col1Helpers.del}
            />
          </div>
        </div>


        <div className='xsm:mb-10 md:mb-0'>
          <div className=' flex items-center md:justify-between text-[12px] text-[#AEB9E1] mb-4
          xsm:justify-center xsm:gap-4 
          '>
            <p>In progress <span>0</span></p>
            <BsThreeDotsVertical />

          </div>

          <div>
            <Column
              notes={col2}
              onAdd={col2Helpers.add}
              onDelete={col2Helpers.del}
            />
          </div>
        </div>


        <div className='xsm:mb-10 md:mb-0'>
          <div className=' flex items-center md:justify-between text-[12px] text-[#AEB9E1] mb-4
          xsm:justify-center xsm:gap-4 
          '>
            <p>Completed <span>0</span></p>
            <BsThreeDotsVertical />

          </div>

          <div>
            <Column
              notes={col3}
              onAdd={col3Helpers.add}
              onDelete={col3Helpers.del}
            />
          </div>
        </div>

      </div>
    </>
  );
}


function Column({ notes, onAdd, onDelete }) {
  return (
    <div>
      <CreateArea onAdd={onAdd} />
      {notes.map((n, i) => (
        <Note
          key={i}
          id={i}
          title={n.title}
          content={n.content}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
