import NewsManager from "@/impl/news";

export const metadata = {
    title: "News | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export const revalidate = 60 * 3;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const linkId = (await params).id;
    const id = await NewsManager.getId(linkId);
    return <>{id?.toString()}</>;
}
