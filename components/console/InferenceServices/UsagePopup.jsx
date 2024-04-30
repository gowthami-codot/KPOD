
const UsagePopup = ({onClose}) =>
{
    
    return(<>
    <div className="fixed inset-0 flex  justify-end bg-[#3d3939] bg-opacity-50">
        <div className="bg-[#0F1D2E] shadow-md mt-44 mr-44  text-[#000000]   justify-end items-end h-[27%]  w-[12%]  rounded-[30px]">
       

            <div className="flex flex-col items-center justify-center p-10 space-y-4" onClick={onClose}>
                
            <div className="text-white text-[16px]" >Mistral</div>
            <div className="text-white text-[16px]">LAMA 3</div>
            <div className="text-white text-[16px]"> Claude</div>
            </div>
         </div>
      </div>
    </>)
}
export default UsagePopup;