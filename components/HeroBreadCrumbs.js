import Link from "next/link"

const HeroBreadCrumbs = ({ prev, current, href }) => {
    return (
        <div className="pb-[3.2rem] text-center flex justify-center capitalize items-center cursor-pointer">
            <Link
                href={href}
                className="px-3 py-2.5 leading-7 text-[#ffffff]"
            >
                {prev}
            </Link>
            <span className="text-white"> {`>`} </span>
            <h3
                className="px-3 py-2.5 leading-7 text-[#9a9797] cursor-no-drop"
            >
                {current}
            </h3>
        </div>
    )
}

export default HeroBreadCrumbs