"use client";

type ErrorProps = {
    error: Error;
    reset?: () => void;
};

export default function ErrorPage({ error, reset }: ErrorProps) {
    return (
        <div style={{ padding: "2rem", textAlign: "center", maxWidth: "600px", margin: "auto" }}>
            <h1>エラーが発生しました</h1>
            <p>申し訳ありませんが、現在ページを表示することができません。 後ほど再度お試しください。</p>
            <details style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{error && error.toString()}</details>
            {reset && (
                <button
                    style={{
                        marginTop: "1rem",
                        padding: "0.5rem 1rem",
                        border: "none",
                        background: "#0070f3",
                        color: "#fff",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                    onClick={() => reset()}
                >
                    再試行
                </button>
            )}
        </div>
    );
}
