import NewsManager from "@/impl/news";
import NewsList from "./list";

export const metadata = {
    title: "News",
};

export const revalidate = 180;

export default async function Page() {
    const news = await NewsManager.getAllNews();
    return (
        <NewsList
            news={news.map((news) => {
                return {
                    id: news.id,
                    date: news.date,
                    importance: news.importance,
                    title: news.title,
                    link: NewsManager.getLink(news.id),
                };
            })}
        />
    );
}
