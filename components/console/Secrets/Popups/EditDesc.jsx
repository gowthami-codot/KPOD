const EditDesc = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex lg:items-start items-center justify-center bg-[#00000080]">
      <div className="bg-[#F3F7F9] shadow-md  my-auto text-[#000000] h-fit   md:w-[54%] w-[90%] md:mt-14 lg:mt-5 mt-5    p-5 max-h-full overflow-y-auto ">
        <div className="flex items-end justify-end mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#000"
            viewBox="0 0 16 16"
            className="cursor-pointer"
            onClick={onClose}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
        <div className="text-center">Edit Secret Description</div>
        <div className="my-3 bg-green-100 p-4">
          <span className="font-semibold">TIP : </span>Try to create a
          descripton that accurately reflects the purpose and usage of the
          secret to maintain clarity for all users.
        </div>
        <div className="w-full">
          <textarea
            placeholder="New Secret Description"
            rows={5}
            className="bg-gray-200 p-1 md:p-2 !outline-none w-full resize-none"
          />
        </div>
        <div className="flex flex-col md:flex-row mx-auto my-3 gap-3 justify-end">
          <div
            className="py-2 px-5 bg-gray-300 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </div>
          <div className="py-2 px-5 bg-black text-white cursor-pointer">
            Save Changes
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDesc;
