import { Tabs } from "./tabs";

export const metadata = {
    title: "Map",
};

export default function Page() {
    return (
        <>
            <h1
                className="mx-auto mt-[30px] w-[calc(100svw-40px)] text-[28px] font-bold text-[#0b0e0f] md:w-[80svw]
                    md:text-[40px]"
            >
                <span className="text-[#de0d22]">M</span>ap
            </h1>
            <Tabs />
        </>
    );
}
