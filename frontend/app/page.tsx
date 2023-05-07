import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";

export default async function Home() {
  const news: NewsResponse = await fetchNews()

  return (
    <div className="wrapper">
      <NewsList news={news} />
    </div>
  )
}

