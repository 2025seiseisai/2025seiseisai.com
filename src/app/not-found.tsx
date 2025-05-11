import { NotFound } from "./(notfound)/notfound";

export default function Page() {
    return (
        <NotFound
            code="404"
            title="Page Not Found"
            message1="アクセスしようとしたページは削除、変更されたか、現在利用できない可能性があります。"
            message2="お手数をおかけしますが、ホームページのトップ、"
            message3="または上部のメニューよりおさがしいただきますようお願いいたします。"
        />
    );
}
