import React, { useState,useRef,useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown } from 'react-icons/fa';

const people = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer"
];

export default function MultipleSelectDropDown () {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [dropDown, setDropDown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  function isSelected(value) {
    return selectedPersons.find((el) => el === value) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedPersonsUpdated = [
        ...selectedPersons,
        people.find((el) => el === value)
      ];
      setSelectedPersons(selectedPersonsUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
    setSelectedPersons(selectedPersonsUpdated);
    setIsOpen(true);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xs mx-auto">
        <Listbox
          as="div"
          className="space-y-1"
          value={selectedPersons}
          onChange={(value) => handleSelect(value)}
          open={isOpen}
        >
          {() => (
            <>
              <div className="relative">
                <span className="inline-block w-full rounded-md shadow-sm">
                  <Listbox.Button
                    className="cursor-default relative w-full rounded-[10px] border border-gray-300 bg-white px-[16px] py-[14px] text-left focus:outline-none focus:shadow-outline-blue focus:border-[#FF8800] hover:border-[#FF8800] transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => setIsOpen(!isOpen)}
                    open={isOpen}
                  >
                    <span className="block truncate max-w-[200px] font-[600] text-[14px] leading-[20px] text-[#28293D] ">
                      {selectedPersons.length < 1
                        ? `Select Make`
                        : `${selectedPersons}`}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <FaAngleDown size={16} className={` ${dropDown ?  "rotate-180 fill-[#ff5000] ": "rotate-0 " } transition-all ease-in-out duration-200`} />
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  unmount={false}
                  show={isOpen}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                  onClick={() => setIsOpen(!isOpen)}
                  ref={ref}
                >
                  <Listbox.Options
                    static
                    className="absolute top-[-60px] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {people.map((person) => {
                      const selected = isSelected(person);
                      return (
                        <Listbox.Option key={person} value={person}>
                          {({ active }) => (
                            <div
                              className={`${
                                active
                                  ? "text-[#28293D] bg-[#FAFAFC]  overflow-hidden"
                                  : "text-[#28293D]"
                              } cursor-default select-none relative `}
                            >
                              <span
                                className={`${
                                  selected ? "font-[400] bg-[#FFF3EB]" : "font-normal"
                                } block truncate px-[16px] py-[10px]`}
                              >
                                {person}
                              </span>
                              {selected && (
                                <span
                                  className={`${
                                    active ? "text-white" : "text-blue-600"
                                  } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                >
                                </span>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
                {/* <div className="pt-1 text-sm">
                  {selectedPersons.length > 0 && (
                    <>Selected persons: {selectedPersons.join(", ")}</>
                  )}
                </div> */}
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
}
