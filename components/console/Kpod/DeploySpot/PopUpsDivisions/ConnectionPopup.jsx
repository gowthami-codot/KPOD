const ConnectionPopup = () => {
  return (
    <>
      <div className="lg:mx-16 md:mx-7  mt-7   ">
       <div className=" flex-col inline-block space-y-4">
       <div className="md:text-[15px] text-[12px] md:mt-8 mt-4 md:px-16 px-3  md:py-4 py-2  inline-block text-white bg-black rounded-[5px] ">
          Connection to HTTP Service [Port 3001]
        </div>
        <div className="md:text-[15px] text-[12px] md:mt-8 mt-4 md:px-16 px-3  md:py-4 py-2 inline-block text-white bg-black rounded-[5px]">
        Connection to Jupyter Lab [Port 8888]
        </div>
       
       </div>
       <div className="md:text-[15px] text-[12px] md:mt-8 mt-4 md:px-6 px-3  md:py-4 py-2 inline-block   text-white bg-black rounded-[5px] ">
        Start Web Terminal
        </div>
        <div className="md:text-[15px] text-[12px] text-black mt-8">Basic SSH Terminal: (No support for SCP & SFTP)</div>
        <div className="md:text-[15px] text-[12px] mb-10 mt-3 text-white bg-[#646464] rounded-[12px] md:px-4 py-2 px-2 md:py-4">
        ssh wgtltipb84ctqk-64410cdb@ssh.runpod.io -i ~/.ssh/id_ed25519
        </div>
      </div>
    </>
  );
};

export default ConnectionPopup;
