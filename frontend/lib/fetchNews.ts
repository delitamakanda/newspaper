import { request, gql } from "graphql-request";

const fetchNews = async (category?: Category | string, keyword?: string, isDynamic?: boolean) => {
    const query = gql`{
        allArticles {
            author
            category
            country
            description
            url
            title
            publishedAt
            source
            language
            image
        }
    `}

export default fetchNews;
