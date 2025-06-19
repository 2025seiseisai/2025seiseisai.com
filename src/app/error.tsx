"use client";
import { NotFound } from "./(notfound)/notfound";

export default function ErrorPage() {
    return (
        <NotFound
            code="500"
            title="Internal Server Error"
            message1="申し訳ありませんが、ページの表示中にエラーが発生しました。"
            message2="お手数をおかけしますが、ページを再読み込みするか、"
            message3="しばらくしてから再度お試しいただきますようお願いいたします。"
        />
    );
}
