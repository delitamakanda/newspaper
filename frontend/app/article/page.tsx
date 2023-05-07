import React from "react";
import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
    searchParams: Article,
}
export default function ArticlePage({ searchParams} : Props) {
    if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
        return notFound();
    }
    return (
        <article>
            <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10 ">
                {searchParams.image && (
                    <img src={searchParams.image} alt={searchParams.title} className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md" />
                )}
                <div className="px-10">
                    <h1 className="headerTitle px-O no-underline pb-2">{searchParams.title}</h1>
                    <div className="flex divide-x-2 space-x-4">
                        <h2 className="font-bold">By: {searchParams.author || 'unknown'}</h2>
                        <h2 className="font-bold pl-4">Source: {searchParams.source}</h2>
                        <p className="pl-4"><LiveTimestamp timestamp={searchParams.publishedAt} /></p>
                    </div>
                    <p className="pt-4">{searchParams.description}</p>
                </div>
            </section>
        </article>
    )
}