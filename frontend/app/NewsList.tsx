import Article from "./Article"
import React from "react"

type Props = {
    news: NewsResponse
}

export default function NewsList({news}: Props) {
    return(
        <main className="c-newspaper">
        {news.results.map(((item: Article) => (
            <div className="c-newspaper__col">
                <div className="c-newspaper__item" style={
                    {["--horizontal" as string]: "true", ["--flipped" as string]: "true", ["--featured" as string]: "true", ['--no-border' as string]: "true"}}
                    >
                    <Article item={item} />
                </div>
            </div>
        )))}
        </main>
    )
}
