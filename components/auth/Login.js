'use client'

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

export default function Login() {
    return (
        <li className="list-none">
            <button onClick={() => signIn()} className="text-sm font-semibold leading-6 text-gray-900">
                Sign in <span aria-hidden="true">&rarr;</span>
            </button>
        </li>
    )
}