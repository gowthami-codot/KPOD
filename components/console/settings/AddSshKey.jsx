import { useRouter } from "next/navigation"

function AddSshKey() {

    const router = useRouter();

    return (

        <div className="text-black p-14">
            <p className="text-[16px] font-medium text-[#396A82]">
                Settings &gt; <span onClick={() => router.push("/console/settings?section=manage")} className="cursor-pointer">Manage SSH Keys &gt; </span>
                <span className="text-[16px] font-semibold text-[#41515C]">Add SSH Key</span></p>
            <hr />
            <p className="text-[28px] py-6">Add SSH key</p>

            <div className="p-8 rounded-[8px] mb-4" style={{ boxShadow: "0px 4px 12px 0px #0000001A" }}>
                <p className="mb-3">Name of the SSH key</p>
                <input type="text" className="border-1 border-[#00000014] w-full h-[49px] mb-6 bg-[#FBFDFD] p-2" />
                <p className="mb-3">Paste your public key</p>
                <textarea className="border-1 border-[#00000014] w-full h-[189px] bg-[#FBFDFD] p-2"></textarea>
            </div>

            <div className="flex justify-end align-middle space-x-3">

                <button className="w-[166px] h-[41px] text-[18px] font-medium text-white bg-black border-none rounded" >Add key</button>

                <button className="w-[166px] h-[41px] text-[18px] font-medium text-black border-black border-1 rounded" >Load from file</button>

            </div>

        </div>
    )
}

export default AddSshKey