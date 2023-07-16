import { uth } from '@clerk/nextjs';
import SignIn from './auth/Sign-in';
import Dropdown from './navbar/Dropdown';


const UserLoginValidation = () => {
    const { userId } = auth();
    console.log(userId);
    return (
        // <div>
        //     {isUserLoggedin ? (
        //         <div className="relative hidden lg:flex lg:flex-1 lg:gap-[15px] lg:justify-end px-[1.5rem]">
        //             <Dropdown />
        //         </div>
        //     ) : (

        //         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        //             {/* <DarkModeToggle /> */}
        //             <SignIn />
        //         </div>
        //     )}
        // </div>
        <h1>user logged in</h1>
    )
}

export default UserLoginValidation