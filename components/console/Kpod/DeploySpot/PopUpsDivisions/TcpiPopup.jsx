const TcpiPopup = ()=>
    {
        return(<>

<div className="lg:mx-20 mx-5 md:mt-32 mt-10 flex flex-col justify-center items-start   ">
    <div className="md:text-[16px] text-[10px] text-black">These are the TCP Port mappings that you can use to connect to your pod. </div>
    <div className="md:text-[16px] text-[10px] mt-5 text-black">If you’re not sure what to do with these, you can <span className="text-[#53B71E]">Click Here to Learn More</span> </div>
    <div className="md:text-[16px] text-[10px] text-black mt-5 md:mb-28 mb-7 font-semibold">This pod either does not support direct public IP networking ,or you have 
not exposed any TCP ports. </div>

      </div>
        </>)
    }
    export default TcpiPopup;