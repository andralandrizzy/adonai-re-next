import Container from "./Container"

const HeadIntro = ({ text, desc }) => {
    return (
        <Container>
            <div className="w-full pt-[3rem]">
                <h1 className='text-left text-[3.5rem] py-[1rem] uppercase text-transparent
                    font-bold bg-clip-text bg-gradient-to-r from-blue-800 via-stone-300 to-blue-800'>
                    <span>{text}</span>
                </h1>
                <p className='desc text-left max-w-2xl'>
                    {desc}
                </p>
            </div>
        </Container>
    )
}

export default HeadIntro