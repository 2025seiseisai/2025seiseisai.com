import Link from "next/link";
import OpenIcon from "./open.svg";

export const metadata = {
    title: "Reservation | 第61回菁々祭「分秒」 - 東大寺学園文化祭2025",
};

export default function ReservePage() {
    return (
        <>
            <h1
                className="mx-auto mt-[30px] w-[calc(100%-40px)] text-[28px] font-bold text-[#0b0e0f] md:w-[80svw]
                    md:text-[40px]"
            >
                <span className="text-[#de0d22]">R</span>eservation
            </h1>
            <p
                className="mx-auto mt-[16px] w-[calc(100%-40px)] text-[16px] font-medium md:mt-[20px] md:w-[80svw]
                    md:text-[18px]"
            >
                来校の際はご予約が必要となります。ご予約はこちらからご確認ください。
            </p>
            <ul
                className="mx-auto mt-[5px] mb-[25px] w-[calc(100%-40px)] list-inside list-disc text-[14px] font-medium
                    md:mb-[30px] md:w-[80svw] md:text-[16px]"
            >
                <li>利用される前に、まずログインをお願いします。</li>
                <li>
                    受験生でなくともお申し込みいただけます。 （「受験生」を「参加者」、「保護者等」を「同行者」
                    と読み換えて、ご入力ください）
                </li>
                <li>１組最大５名（参加者１名、同行者４名）までご参加可能です。</li>
            </ul>
            <div
                className="mx-auto mb-[45px] flex w-[calc(100%-40px)] items-center justify-center gap-4 not-md:flex-col
                    md:mb-[50px] md:w-[80svw] md:gap-8"
            >
                <Link
                    href="https://mirai-compass.net/usr/tdijgj/common/loginEvent.jsf"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full max-w-80"
                >
                    <button
                        className="mx-auto w-full cursor-pointer rounded-lg bg-[#de0d22] py-2 text-[16px] font-bold
                            text-white transition-colors duration-150 hover:bg-[#b00a1a] md:py-3"
                    >
                        ログイン
                        <OpenIcon className="ml-2 inline-block w-5 [filter:brightness(0)_invert(1)]" />
                    </button>
                </Link>
                <Link
                    href="https://mirai-compass.net/usr/tdijgj/event/evtIndex.jsf"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full max-w-80"
                >
                    <button
                        className="mx-auto w-full cursor-pointer rounded-lg bg-[#de0d22] py-2 text-[16px] font-bold
                            text-white transition-colors duration-150 hover:bg-[#b00a1a] md:py-3"
                    >
                        予約
                        <OpenIcon className="ml-2 inline-block w-5 [filter:brightness(0)_invert(1)]" />
                    </button>
                </Link>
            </div>
        </>
    );
}
