import React from "react";
import fetchNews from "@/lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
    searchParams?: { term: string },
}

export default async function SearchPage({searchParams}: Props) {
    const news: NewsResponse = await fetchNews("general", searchParams?.term, true);
    return (
        <div className="wrapper">
            <h1 className="headerTitle">Search Results For: {searchParams?.term}</h1>
            <NewsList news={news} />
        </div>
    );
}
