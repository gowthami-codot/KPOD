import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ManageSshKey() {
    const router = useRouter();
    const [openPopupId, setOpenPopupId] = useState(null);
    const [popupStyles, setPopupStyles] = useState({});
    const popupRef = useRef(null);

    const updatePopupPosition = (buttonRect) => {
        const viewportWidth = window.innerWidth;
        const popupWidth = 176; // Width of the popup
        let left = buttonRect.left - 12; // Subtract 10px to move the popup slightly to the left

        if (left + popupWidth >= viewportWidth) {
            left = viewportWidth - popupWidth - 12; // Ensure it doesn't overflow the viewport
        }

        setPopupStyles({
            top: buttonRect.bottom + 3, // Add some margin-top
            left,
        });
    };

    const openPopup = (id, event) => {
        setOpenPopupId(id);
        const buttonRect = event.target.getBoundingClientRect();
        updatePopupPosition(buttonRect);
    };

    const closePopup = () => setOpenPopupId(null);

    const sshKeys = [
        { id: 1, sshKey: 'sshkey@fgks', createdOn: '2023-01-01', actions: 'Action' },
        { id: 2, sshKey: 'sshkey@fgks', createdOn: '2023-02-01', actions: 'Action' },
        { id: 3, sshKey: 'sshkey@fgks', createdOn: '2023-03-01', actions: 'Action' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
        };

        const handleScroll = () => {
            if (openPopupId !== null) {
                const button = document.querySelector(`[data-key-id="${openPopupId}"]`);
                if (button) {
                    const buttonRect = button.getBoundingClientRect();
                    updatePopupPosition(buttonRect);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [openPopupId]);

    return (
        <div className="text-black p-14">
            <p className="text-[16px] font-medium text-[#396A82]">
                Settings &gt; <span className="text-[16px] font-semibold text-[#41515C]">Manage SSH Keys</span>
            </p>
            <hr />

            <div className="flex justify-between py-6 items-center">
                <p className="font-medium text-[28px]">Manage SSH Keys</p>
                <button
                    className="w-[156px] h-[41px] text-[18px] font-medium p-2 text-white bg-black border-none rounded"
                    onClick={() => router.push("/console/settings?section=addkey")}
                >
                    Add New Key
                </button>
            </div>

            <div className="relative overflow-x-auto shadow-md p-4 rounded-[8px]">
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between bg-[#F3F7F9] text-[16px] font-medium px-6 py-4">
                        <span>SSH Key</span>
                        <span>Created On(IST)</span>
                        <span>Actions</span>
                    </div>
                    {sshKeys.map((key) => (
                        <div key={key.id} className="flex justify-between items-center bg-white border-b text-[#8D8D8D] font-semibold px-6 py-4">
                            <span>{key.sshKey}</span>
                            <span>{key.createdOn}</span>
                            <div className="relative">
                                <button
                                    className="border border-black w-[96px] h-[27px] rounded-[4px] p-1 flex items-center justify-center space-x-2 text-black"
                                    onClick={(event) => openPopup(key.id, event)}
                                    data-key-id={key.id}
                                >
                                    <span>{key.actions}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                        <path d="M5.25 6L0.703367 0.75L9.79663 0.75L5.25 6Z" fill="black" />
                                    </svg>
                                </button>
                                {openPopupId === key.id && (
                                    <div
                                        ref={popupRef}
                                        className="fixed bg-white border border-gray-300 rounded w-[176px] h-auto text-[14px] z-50 text-black"
                                        style={popupStyles}
                                    >
                                        <div className="flex items-center hover:bg-gray-100 px-2">
                                            <Image src={require("@/public/settings/copy.png")} alt='copyicon' />
                                            <button className="w-full text-left px-4 py-2">Copy</button>
                                        </div>
                                        <div className='flex items-center px-2 hover:bg-gray-100'>
                                            <Image src={require("@/public/settings/delete.png")} alt='deleteicon' />
                                            <button className="block w-full text-left px-4 py-2">Delete</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="absolute right-0 top-1/2 font-semibold text-sm text-[#161717] bg-[#8BFFDC] md:p-3 p-1 rounded-tr-lg rounded-br-lg cursor-pointer"
                style={{
                    transform: 'translateY(-50%) rotate(180deg)',
                    writingMode: 'vertical-rl',
                    whiteSpace: 'nowrap',
                }}
            >
                Give your feedback
            </div>
        </div>
    );
}
