import Image from 'next/image';

export default function ConnectSsh({onClose}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="w-[576px] h-auto bg-white rounded shadow-lg p-10 text-black leading-[50px]">
                <p className="text-[24px] font-medium text-center">Connect via SSH client</p>
                <p className="text-[18px] font-medium">
                    1. Open client of your choice : <span className="font-semibold">eg. PuTTY, OpenSSH etc..</span>
                </p>
                <p className="text-[18px] font-medium">2. Provide path to your SSH private key file :</p>
                <div className="relative">
                    <input type="text" className="border w-full h-10 p-2 pr-10" />
                    <Image 
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" 
                        src={require("@/public/machines/copy.png")} 
                        alt="Copy" 
                        width={24} 
                        height={24} 
                    />
                </div>
                <div className="text-center mt-6">
                    <button className="w-[158px]  text-white rounded bg-black font-medium text-[18px] cursor-pointer" onClick={onClose}>Done</button>
                </div>
            </div>
        </div>
    );
}
