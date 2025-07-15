import React, { useState } from 'react'
import CredentialSubmenu from '../../common/sidebar/CredentialSubmenu'
import { CredentialSubmenuArray } from '../../../public/Data'

export default function UserSecondSection() {

    const [activeLink , setActiveLink] =useState("");

    return (
        <>
            <div className=' border-[#343B4F] 
 
 xsm:border-b xsm:border-r-0 xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:pr-0 xsm:mb-6
 md:justify-start  md:items-start md:pr-10 
lg:border-r lg:border-b-0 
 '>
                <h1 className='mb-4'>Credentials</h1>

                <div>
                    <ul className='
                        xsm:flex xsm:flex-col xsm:justify-center xsm:items-center xsm:pl-0
                        md:justify-start  md:items-start md:pl-2 
                        lg:
                        '>
                        {
                            CredentialSubmenuArray.map((items, index) => {
                                return <CredentialSubmenu
                                    key={index}
                                    title={items.title}
                                    icon={items.icon}
                                    to={items.to}
                                    activeLink={activeLink}
                                    setActiveLink={setActiveLink}
                                />
                            })
                        }

                    </ul>
                </div>


            </div>
        </>
    )
}
