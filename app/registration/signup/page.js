'use client'
import Logo from 'public/img/white_logo-min.jpeg'
import Link from "next/link"

import signInBg from 'public/img/signup.svg'
import Image from 'next/image';
import Container from '@/components/Container';
import SignupForm from '@/components/forms/SignupForm';

const page = () => {

    // const router = useRouter();

    // const createUser = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);

    //     try {
    //         const response = await fetch("/api/auth/signup", {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 // userId: session?.user.id,
    //                 firstname: account.firstname,
    //                 lastname: account.firstname,
    //                 email: account.email,
    //                 password: account.password,
    //                 confirmPassword: account.confirmPassword,
    //             }),
    //         });

    //         if (response.ok) {
    //             router.push("/");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };
    const createUser = () => {
        return (
            <div>page</div>
        )
    }
    return (
        <section className='w-full flex items-center bg-white my-[4rem]'>
            <Container>
                <div className="md:flex lg:w-[950px] mt-[6.5rem] mb-[3rem] items-center rounded-md">
                    <div className="w-[100%]">
                        <Image src={signInBg} alt='sign in image' width={500} height={350} />
                    </div>
                    <div className="w-[100%] px-[2rem]">
                        <SignupForm />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default page