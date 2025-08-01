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
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`mx-[5px] flex w-full text-[14px]/[1.7] transition-all duration-300
                            before:content-['・'] hover:opacity-75 b:text-[13px]
                            ${item.id === activeTitleId && "bg-[#de0d2221]"}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById(item.id);
                                if (target) {
                                    history.pushState(null, "", `#${item.id}`);
                                    target.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            <p className="w-full truncate">{item.name}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
