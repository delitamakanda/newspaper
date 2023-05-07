"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

export default function SearchBox() {
    const [input, setInput] = useState("");
    const router = useRouter();
    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!input) {
            return;
        }
        router.push(`/search?term=${input}`);
    }
    return (
        <form onSubmit={handleSearch} className="max-w-6xl mx-auto flex justify-between items-center px-5">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search keywords..." className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400" />
            <button type="submit">Search</button>
        </form>
    )
}