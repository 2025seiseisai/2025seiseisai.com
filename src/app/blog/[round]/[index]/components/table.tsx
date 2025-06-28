"use client";
export default function Table({
    toc,
    activeTitleId = "",
}: {
    toc: { name: string; id: string }[];
    activeTitleId?: string;
}) {
    return (
        <section className={"rounded-[20px] border-3 border-[#dedede] p-[20px] text-pri-black"}>
            <h2 className="mb-[5px] text-[19px]/normal font-medium">目次</h2>
            <ul>
                {toc.map((item) => (
                    <a
                        href={`#${item.id}`}
                        key={item.id}
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.getElementById(item.id);
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <li
                            className={`mx-[5px] flex w-full text-[14px]/[1.7] transition-all duration-300 before:content-['・'] hover:opacity-75 b:text-[13px]
                            ${item.id === activeTitleId && "bg-[#de0d2221]"}`}
                        >
                            <p className="w-full truncate">{item.name}</p>
                        </li>
                    </a>
                ))}
            </ul>
        </section>
    );
}
