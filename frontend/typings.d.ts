type Category = 
    | "business"
    | "general"
    | "entertainment"
    | "health"
    | "science"
    | "technology"
    | "spirituality"
    | "fashion"
    | "finance";

type NewsResponse = {
    totalCount: Int;
    results: Article[];
}

type Article = {
    id: Int;
    author: string;
    category: string;
    country: string;
    description: string;
    url: string;
    title: string;
    publishedAt: string;
    source: string;
    language: string;
    image: string | null;
}

