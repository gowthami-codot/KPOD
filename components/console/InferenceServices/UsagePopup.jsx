
const UsagePopup = ({onClose}) =>
{
    
    return(<>
    <div className="fixed inset-0 flex  justify-end bg-[#3d3939] bg-opacity-50">
        <div className="bg-[#0F1D2E] shadow-md mt-44 mr-44  text-[#000000]   justify-end items-end h-[37%]  w-[17%]  rounded-[30px]">
       

            <div className="flex flex-col items-center justify-center p-16 space-y-6" onClick={onClose}>
                
            <div className="text-white text-[20px]" >Mistral</div>
            <div className="text-white text-[20px]">LAMA 3</div>
            <div className="text-white text-[20px]"> Claude</div>
            </div>
         </div>
      </div>
    </>)
}
export default UsagePopup;