import React, { useState } from 'react'
import Button from '../Buttons/Buttons'
import { MdIndeterminateCheckBox } from "react-icons/md";
import { IoCalendarClear } from "react-icons/io5";
import { IoMdCheckbox } from "react-icons/io";
import { orderTabledata } from '../../../public/Data';
import { IoChevronDown } from 'react-icons/io5'
import StatusButton from '../Buttons/StatusButton';
import CalendarButton from '../Buttons/CalendarButton';
export default function orderTable() {

 const [selected, setSelected] = useState([]); // ← store ids of checked rows

    const toggleRow = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
        console.log(selected)
    };

    return (
        <>
            <div className=" bg-[#0B1739] rounded-[12px] min-w-0">
        <div className="p-4 pb-10 flex justify-between mt-6">
            <h1 className="text-[16px]">Recent Orders</h1>
           <CalendarButton
           title="Jan 24"
           color="#0A1330"
           />
        </div>
           
                <div className='  overflow-x-auto customScroll  xsm:min-w-[150px] 
                    '>
                    <table className=' min-w-max w-[700px] h-[400px] text-white text-sm   '>
                  
                    <thead>

                        <tr><td className='pl-8 align-middle'><div className='flex items-center gap-1'> <MdIndeterminateCheckBox /> Order</div></td>
                            <td className='align-middle'><div className='flex items-center gap-1'><IoCalendarClear className='text-[]' />
                                Date</div></td>
                            <td className='align-middle'><div className='flex items-center gap-1'><IoMdCheckbox />
                                Status</div></td>
                            <td>Total</td>
                        </tr>

                    </thead>

                    <tbody  >

                      {orderTabledata.map((item) => {
                            const isChecked = selected.includes(item.id);
                            return (
                                <tr key={item.id} className={isChecked ? 'bg-[#0A1330]' : ''}>
                                    <td className="pl-8">
                                        <input
                                            type="checkbox"
                                            className="accent-[#CB3CFF]"
                                            checked={isChecked}
                                            onChange={() => toggleRow(item.id)}
                                        />{' '}
                                        #{item.id}
                                    </td>

                                    <td>{item.date}</td>
                                    <td>
                                        <StatusButton title={isChecked ? 'Paid' : 'Pending'} />
                                    </td>
                                    <td>${item.total}.00</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
           
            </div>

            </div >
            </>
    )
}
