import React, { useState, useRef ,useEffect } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const DropDown = () => {
     const [dropDown, setDropDown] = useState(false);
    const people = [
        { name: 'Wade Cooper' },
        { name: 'Arlene Mccoy' },
        { name: 'Devon Webb' },
        { name: 'Tom Cook' },
        { name: 'Tanya Fox' },
        { name: 'Hellen Schmidt' },
        { name: 'Hellen Schmidt' },
        { name: 'Hellen Schmidt' },
      ]
    
      const [selected, setSelected] = useState(people[0])

  return (
    <div>
         <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative hover:border-[#FF8800] w-full cursor-default  bg-white px-[16px] py-[14px] text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 border-[1px] border-solid rounded-[10px] focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate  font-[600] text-[14px] leading-[20px] text-[#28293D]">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <FaAngleDown size={16} className={` ${dropDown ?  "rotate-180 fill-[#ff5000] ": "rotate-0 " } transition-all ease-in-out duration-200`} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-[10px] px-[8px] bg-[#f9f9f9]  ${
                      active ? 'bg-[#FFF3EB] text-amber-900'  : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal '
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
                 </div>
    </div>
  )
}

export default DropDown