import React from "react"
import fetchNews from "@/lib/fetchNews";
import NewsList from "../../NewsList";
import { categories } from "@/constants";

type Props = {
    params: { category: Category }
}
export default async function NewsCategoryPage({params: { category }}:Props) {
    const news: NewsResponse = await fetchNews(category);
    return (
        <div className="wrapper">
            <h1 className="headerTitle">{category}</h1>
            <NewsList news={news} />
        </div>
    )
}

export async function generateStaticParams() {
    return categories.map((category) => {
        category;
    })
}