const Configure = ()=>
    {
        return(<>
        <div className="lg:mx-20 md:mx-10 md:mt-20 mt-10 ">
        <div className="md:text-[16px] text-[10px] text-black">It looks you haven’t  set up your SSH key yet. SSH won’t work ,if you don’t!</div>
        <div className="md:text-[16px] text-[10px] md:mt-10 mt-5 text-black">Run the following command to generate your public/private key pair.</div>
        <div className="md:text-[16px] text-[10px] md:mb-10 mb-5 md:mt-10 mt-5 text-white bg-[#646464] rounded-[12px] px-4 py-4">
        ssh wgtltipb84ctqk-64410cdb@ssh.runpod.io -i ~/.ssh/id_ed25519
        </div>
        <div className="md:text-[16px] text-[10px] md:mt-5 mt-2 text-black">You can add your SSH public key in the <span className="text-[#53B71E]">settings</span> menu.</div>
        <div className="md:text-[16px] text-[10px] md:mt-5 mt-3 mb-10 text-black">Learn more about <span className="text-[#53B71E]"> generating SSH keys.</span></div>


        </div>
        </>)
    }
    export default Configure;