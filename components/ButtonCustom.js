import Link from "next/link"

const ButtonCustom = ({ text, href }) => {
    return (
        <div className="pb-[3.2rem] text-center">
            <Link
                href={href}
                className="-mx-3 rounded-lg px-3 py-2.5 font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
                {text} <span aria-hidden="true">&rarr;</span>
            </Link>
        </div>
    )
}

export default ButtonCustom