'use client'

import Link from 'next/link';

export default function SignIn() {
    return (
        <li className="list-none">
            {/* <button onClick={() => signIn()} className="text-sm font-semibold leading-6 text-gray-900">
                Sign in <span aria-hidden="true">&rarr;</span>
            </button> */}
            <Link href='/sign-in'>Sign In</Link>
        </li>
    )
}