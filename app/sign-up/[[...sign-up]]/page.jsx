
import { SignUp } from '@clerk/nextjs';


const SignUpPage = () => {
  return (
    <>
    <div className="flex justify-center items-center border-2 border-indigo-500 h-[100%]">
      <SignUp/>
    </div>
    </>
  )
}

export default SignUpPage