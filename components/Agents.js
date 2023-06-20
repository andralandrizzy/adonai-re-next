import Image from "next/image";
import Container from "./Container";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

// async function fetchAgents() {
//     const res = await fetch(`https://api.bridgedataoutput.com/api/v2/miamire/agents?access_token=${process.env.BDO_SERVER_TOKEN}&limit=10`, {
//         next: {
//             revalidate: 60,
//         },
//     })

//     const agents = await res.json();

//     return agents
// }

const Agents = () => {

    const agentContent = [
        {
            id: '1',
            src: '/img/white-min.jpeg',
            lastname: "White",
            firstname: 'Mackenzi',
            about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet accusamus
                    fugiat, quam illum dolorum quidem earum vero reiciendis porro sapiente.`,
            job: "Licensed Broker",
        },
        {
            id: '2',
            src: '/img/jane-min.jpeg',
            lastname: "Doe",
            firstname: 'Jane',
            about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet accusamus
                    fugiat, quam illum dolorum quidem earum vero reiciendis porro sapiente.`,
            job: "Licensed Broker",
        },
        {
            id: '3',
            src: '/img/sam-min.jpeg',
            lastname: "Samuel",
            firstname: 'Deonter',
            about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet accusamus
                    fugiat, quam illum dolorum quidem earum vero reiciendis porro sapiente.`,
            job: "Licensed Broker",
        }

    ];

    // const agents = fetchAgents()
    // console.log(agents);

    return (
        <section className="w-full h-auto">
            <Container>
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] py-[3rem] items-center justify-center">
                    {agentContent.map(content => (
                        <div key={content.id} className="agent flex-col text-center shadow-md rounded-md py-[2.5rem] px-[1.2rem] bg-gray-100">
                            <div className="w-[180px] mx-auto h-[180px] rounded-full">
                                <Image className="rounded-full" src={content.src} width={180} height={180} alt="agent photo" />
                            </div>
                            <h1 className="text-lg uppercase font-bold tracking-wider py-5">{content.lastname} {content.firstname}</h1>
                            <p className="pb-4 text-sm tracking-wider text-[#545359]">{content.job}</p>
                            <p className="text-sm tracking-wider leading-[1.5rem]">{content.about}</p>
                            <div className="social-icons py-[2.5rem] gap-6 text-2xl flex items-center justify-center">
                                <Link className="text-[#120086]" href="#"><i><FaFacebook /></i></Link>
                                <Link className="text-[#0a82d2]" href="#"><i><FaTwitter /></i></Link>
                                <Link className="text-[#af0788]" href="#"><i><FaInstagram /></i></Link>
                                <Link className="text-[#2d10af]" href="#"><i><FaLinkedin /></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Agents

