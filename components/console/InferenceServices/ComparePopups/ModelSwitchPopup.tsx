import { useState } from "react";
import { Slider } from "@nextui-org/react";

const ModelSwitchPopup = ({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) => {
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
            onClick={handleOverlayClick}
        >
            <div className="bg-white w-[500px] rounded-2xl p-4 text-black" onClick={(e) => e.stopPropagation()}>
                <div>Are you sure you want to switch model? Your chat history will be cleared.</div>
                <Footer onClose={onClose} onConfirm={onConfirm} />
            </div>
        </div>
    );
};

type FooterProps = {
    onClose: () => void;
    onConfirm: () => void;
};
const Footer = ({ onClose, onConfirm }: FooterProps) => {
    return (
        <div className="flex justify-end mt-4">
            <button
                className="bg-[#F3F7F9] text-black px-4 py-2 rounded-md mr-2 hover:bg-gray-200 transition duration-300 ease-in-out"
                onClick={onClose}
            >
                Close
            </button>
            <button
                className="bg-[#8BFFDD] text-gray-700 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-[#76f2da]"
                onClick={onConfirm}
            >
                Confirm
            </button>
        </div>
    );
};

export default ModelSwitchPopup;
