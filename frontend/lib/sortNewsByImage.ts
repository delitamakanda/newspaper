export default function sortNewsByImage(news: NewsResponse) {
    const newsWithImages = news.results.filter((item: any) => item.image !== null);
    const newsWithoutImages = news.results.filter((item: any) => item.image === null);
    
    const sortedNewsResponse = {
        results: [...newsWithImages,...newsWithoutImages],
        totalCount: news.totalCount
    }

    return sortedNewsResponse;
}