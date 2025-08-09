"use client";
import { useState } from "react";
import { Bazaar1, Bazaar2 } from "./(bazaar)/bazaar";
import { Exhibition1, Exhibition2 } from "./(exhibition)/exhibition";
import { Map3D } from "./(map3d)/map3d";
export function Tabs() {
    const [activeTab, setActiveTab] = useState(1);
    const [highSchoolFloor, setHighSchoolFloor] = useState(2);
    const [middleSchoolFloor, setMiddleSchoolFloor] = useState(2);
    return (
        <div className="mx-auto mt-[19px] flex w-[calc(100svw-40px)] not-lg:flex-col md:w-[80svw]">
            <div className="w-full lg:w-[min(max(calc(80svw*17/28),calc(80svw-550px)),calc(80svw-319px))]">
                <div className="flex h-[36px] items-end md:h-[45px]">
                    <button
                        className={`flex cursor-pointer items-center justify-center bg-[#de0d22] font-medium text-white transition-all duration-150
                            ease-in-out hover:brightness-95
                            ${activeTab === 1 ? "h-full w-[92px] text-[18px] md:w-[120px] md:text-[22px]" : "h-[30px] w-[80px] text-[15px] md:h-[36px] md:w-[100px] md:text-[18px]"}`}
                        onClick={() => setActiveTab(1)}
                    >
                        高校棟
                    </button>
                    <button
                        className={`flex cursor-pointer items-center justify-center bg-[#CC0F22] font-medium text-white transition-all duration-150
                            ease-in-out hover:brightness-95
                            ${activeTab === 2 ? "h-full w-[92px] text-[18px] md:w-[120px] md:text-[22px]" : "h-[30px] w-[80px] text-[15px] md:h-[36px] md:w-[100px] md:text-[18px]"}`}
                        onClick={() => setActiveTab(2)}
                    >
                        中学棟
                    </button>
                    <button
                        className={`flex cursor-pointer items-center justify-center bg-[#B31E1E] font-medium text-white transition-all duration-150
                            ease-in-out hover:brightness-95
                            ${activeTab === 3 ? "h-full w-[92px] text-[18px] md:w-[120px] md:text-[22px]" : "h-[30px] w-[80px] text-[15px] md:h-[36px] md:w-[100px] md:text-[18px]"}`}
                        onClick={() => setActiveTab(3)}
                    >
                        バザー
                    </button>
                    <div className="flex-1 border-b-[2px] border-[#de0d22]" />
                </div>
                <div className="relative aspect-680/400 w-full">
                    <Map3D
                        resolution={0.9}
                        className="absolute !h-full !w-full border-[1.5] border-t-0 border-[#e0e0e0] bg-[#fdfdfd]"
                    />
                    {(activeTab === 1 || activeTab === 2) && (
                        <div
                            className="absolute right-[5.88%] bottom-[8%] w-[28px] overflow-hidden rounded-[4px] border-1 border-[#e0e0e0] bg-white text-[12px]
                                md:w-[32px] md:text-[14px]"
                        >
                            {activeTab === 1 &&
                                Array.from({ length: 4 }, (_, i) => (
                                    <div className="aspect-square w-full" key={i}>
                                        <button
                                            className={`aspect-square transition-all duration-150 ease-in-out
                                            ${highSchoolFloor === 4 - i ? "m-[1.5px] w-[calc(100%-3px)] rounded-[6px] bg-[#0b0e0f16]" : "w-full bg-[#0b0e0f00] hover:bg-[#0b0e0f09]"}`}
                                            onClick={() => setHighSchoolFloor(4 - i)}
                                        >
                                            {4 - i}F
                                        </button>
                                    </div>
                                ))}
                            {activeTab === 2 &&
                                Array.from({ length: 3 }, (_, i) => (
                                    <div className="aspect-square w-full" key={i}>
                                        <button
                                            className={`aspect-square transition-all duration-150 ease-in-out
                                            ${middleSchoolFloor === 3 - i ? "m-[1.5px] w-[calc(100%-3px)] rounded-[6px] bg-[#0b0e0f16]" : "w-full bg-[#0b0e0f00] hover:bg-[#0b0e0f09]"}`}
                                            onClick={() => setMiddleSchoolFloor(3 - i)}
                                        >
                                            {3 - i}F
                                        </button>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
                <div className="w-full lg:hidden">
                    {activeTab === 1 || activeTab === 2 ? (
                        <Exhibition1 floor={activeTab === 1 ? highSchoolFloor : middleSchoolFloor + 4} />
                    ) : (
                        <Bazaar1 />
                    )}
                </div>
                <div className="w-full">{activeTab === 1 || activeTab === 2 ? <Exhibition2 /> : <Bazaar2 />}</div>
            </div>
            <div className="flex-1 not-lg:hidden">
                {activeTab === 1 || activeTab === 2 ? (
                    <Exhibition1 floor={activeTab === 1 ? highSchoolFloor : middleSchoolFloor + 4} />
                ) : (
                    <Bazaar1 />
                )}
            </div>
        </div>
    );
}
