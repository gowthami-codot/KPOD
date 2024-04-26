import SignUp from "@/components/auth/SignUp";
import SignIn from "@/components/auth/SignIn";

const Page = () => {
  return (
    <div className="px-5 md:px-10 py-5 pt-20 w-full">
      <SignUp />
      <SignIn />
    </div>
  );
};

export default Page;
