"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {
    article: Article;
}

export default function ReadMoreButton({article} : Props) {
    const router = useRouter();

    const handleClick = () => {
        const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join("&");
        router.push(`/article?${queryString}`);
    }

    return (
        <button onClick={handleClick} className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500 w-full">
            Read More
        </button>
    );
}
