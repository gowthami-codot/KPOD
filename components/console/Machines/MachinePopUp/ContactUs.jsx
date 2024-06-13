const ContactUs = ({onClose}) => {
  return <>
  <div className="fixed inset-0 flex  items-center justify-center bg-[#00000080]">
        <div className="bg-[#FFFFFF] shadow-md  my-auto text-[#000000] h-fit  mb-20   w-[407px]   lg:mt-5     p-5  ">
         <div className="flex justify-center text-[24px] font-medium">
         Contact Us
         </div>
         <div className="mt-[16px] px-10">
            <p className="text-[15px] justify-center font-normal  ">Thank you for showing interest. The requested model is not available at the moment. </p>
            <p className="mt-3"> Please come back after sometime. 
            Contact: <span className="text-[#396A82] ml-2">Krutrim@support.com</span></p>

            
         </div>
        <div className="flex items-center justify-center mt-[23px] mb-[20px]">
        <div className="bg-[#010101] text-[#ffff] inline-block text-center pl-[52px] pr-[52px] rounded-[4px] py-2 cursor-pointer" onClick={onClose}>Ok</div>
        </div>
        </div>
      </div>
  </>;
};

export default ContactUs;