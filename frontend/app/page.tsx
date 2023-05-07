import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";

export default async function Home() {
  const news: NewsResponse = await fetchNews()

  await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <div className="wrapper">
      <NewsList news={news} />
    </div>
  )
}

