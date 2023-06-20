
import signInBg from 'public/img/account.svg'
import Image from 'next/image';
import Container from '@/components/Container';
import LoginForm from '@/components/forms/LoginForm';


const page = () => {
    // const router = useRouter();

    // const createUser = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);

    //     try {
    //         const response = await fetch("/api/auth/login", {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 // userId: session?.user.id,
    //                 email: users.email,
    //                 phone: users.password,
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

    const signUser = () => {
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
                        <LoginForm />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default page