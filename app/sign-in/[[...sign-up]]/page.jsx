
import { SignIn } from '@clerk/nextjs';


const SignInPage = () => {
  return (
    <>
    <div className="flex justify-center items-center border-2 border-indigo-500 h-[100%]">
      <SignIn/>
    </div>
    </>
  )
}

export default SignInPage