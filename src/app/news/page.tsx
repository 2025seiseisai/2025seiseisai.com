import NewsManager from "@/impl/news";
import NewsList from "./list";

export const metadata = {
    title: "News | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
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
