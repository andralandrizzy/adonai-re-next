import Container from "./Container"

const SectionHeadText = ({ subTitle, title }) => {
    return (
        <Container>
            <div className="text-center w-1/2 mx-auto my-20">
                <h3 className="tracking-[.25em] text-2xl uppercase font-normal">{subTitle}</h3>
                <h1 className="capitalize text-3xl font-bold"><span className="length pb-4">{title}</span></h1>
            </div>
        </Container>
    )
}

export default SectionHeadText