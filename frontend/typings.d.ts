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


type Data = {
    author: string;
    category: string;
    country: string;
    description: string;
    url: string;
    title: string;
    published_at: string;
    source: string;
    language: string;
    image: string;
}

type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
}

type NewsResponse = {
    pagination: Pagination;
    data: Data[];
}