"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Github, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle newsletter subscription logic here
        console.log("Subscribed:", email)
        setEmail("")
    }

    return (
        <div className="bg-gray-50 py-6">
            <div className="p-6 flex max-w-6xl items-center justify-between mx-auto">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Stay Updated With BudgetMe</h2>
                    <p className="text-md font-gray-300 max-w-md">Get the latest updates on managing your finnances and exclusive tips.</p>
                </div>
                <form action="" className="flex flex-row">
                    <input className="p-3 shadow-md rounded-md border border-gray-400 hover:shadow-xl
                        transition duration-300 outline-none focus:border-gray-700" type="text" placeholder="Enter your email" />
                    <button className="bg-green-500 hover:bg-green-600 text-green-100 px-6 py-2 rounded-lg ml-4 shadow-md flex items-center justify-center transition duration-300">
                        Subscribe
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </button>
                </form>
            </div>
            <div className="items-center border border-b-1 border-gray-300 max-w-[110rem] mx-auto opacity-30"></div>
            <div className="text-center p-2">Test</div>
        </div>
    )
}
