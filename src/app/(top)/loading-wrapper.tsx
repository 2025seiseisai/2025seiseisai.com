"use client";
import dynamic from "next/dynamic";
const Loading = dynamic(() => import("./loading"), { ssr: false });

export default function LoadingWrapper() {
    return <Loading />;
}
