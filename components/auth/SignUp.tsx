const SignUp = () => {
  return (
    <div>
      <div className="text-center my-5 md:my-10 text-xl md:text-3xl font-bold">
        Welcome, Tell us a little bit about you.
      </div>
      <div className="w-full md:px-20">
        <div className="md:p-10 p-5 rounded-2xl bg-[#ffffff15] flex flex-col md:flex-row items-start justify-between md:gap-10">
          <div className="flex flex-col items-start justify-center w-full md:w-[40%] md:border-r border-white md:pr-10">
            <span>What's your name ?</span>
            <input
              type="text"
              className="bg-[#ffffff20] p-2 w-full mt-2 rounded-lg text-white focus:border-white"
              placeholder="First Name"
            />
            <input
              type="text"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:border-white"
              placeholder="Last Name"
            />
            <div className="my-2 md:my-4" />
            <span>Your email id</span>
            <input
              type="email"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:border-white"
              placeholder="Email"
            />
            <div className="my-2 md:my-4" />
            <span>Password</span>
            <input
              type="password"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:border-white"
              placeholder="Password"
            />
            <div className="my-2 md:my-4" />
            <span>Account Type</span>
            <input
              type="text"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:border-white"
              placeholder="Account Type"
            />
          </div>
          <div className="w-full md:w-[60%] flex flex-col justify-between h-full">
            <div className="text-lg md:text-xl pb-3 md:pb-6 mt-5">
              What do you do? Choose one or more
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div
                className="bg-white text-black p-5 rounded-lg text-center
              cursor-pointer"
              >
                Cloud Engineer
              </div>
              <div
                className="bg-white text-black p-5 rounded-lg text-center
              cursor-pointer"
              >
                Devops
              </div>
              <div
                className="bg-white text-black p-5 rounded-lg text-center
              cursor-pointer"
              >
                Data Scientist
              </div>
              <div
                className="bg-white text-black p-5 rounded-lg text-center
              cursor-pointer"
              >
                Product Management
              </div>
              <div
                className="bg-white text-black p-5 rounded-lg text-center
              cursor-pointer"
              >
                SRE
              </div>
              <div
                className="bg-white text-black p-5 rounded-lg text-center
              cursor-pointer"
              >
                Others
              </div>
            </div>
            <div
              className="flex text-black mt-10 bg-white py-3 px-10 w-fit mx-auto rounded-full cursor-pointer
            hover:scale-110 duration-300 border-4 hover:border-gray-500"
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
