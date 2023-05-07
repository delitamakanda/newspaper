import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (category = "", keyword = "", isDynamic = false) => {
    const query = gql`
    query {
        allArticles(category_Icontains: "${category}", title_Icontains: "${keyword}", description_Icontains: "${keyword}") {
          totalCount
          results(limit:25, offset: 0) {
            publishedAt
            id
            title
            description
            author
            source
            image
            category
            country
            language
            publishedAt
            url
          }
          }
      }
    `;

    const response = await fetch(`http://127.0.0.1:8000/graphql`, {
        method: "POST",
        cache: isDynamic? "no-cache" : "default",
        next: isDynamic? {revalidate: 0} : {revalidate: 20},
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: {
                title_Icontains: keyword,
                description_Icontains: keyword,
                source_Icontains: keyword,
                category_Icontains: category,
            },
        }),
    });

    const newsResponse = await response.json();
    const news = sortNewsByImage(newsResponse.data.allArticles);
    return news;
}

export default fetchNews;
