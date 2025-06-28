import { ViewTransitions } from "next-view-transitions";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <ViewTransitions>{children}</ViewTransitions>;
}
