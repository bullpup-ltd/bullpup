import {
    Crown,
    MapPin,
    Trophy,
} from "lucide-react";
import Link from "next/link";

const ratings = [
    "Satisfaction",
    "Service",
    "Reputation",
    "Quality",
];

export default function BullpupAwardCard() {
    return (
        <Link target="_blank" rel="noopener noreferrer" href={'https://qualitybusinessawards.com.au/2026/the-best-Bricklayers-in-City-of-Penrith-NSW/BULLPUP-Pty-Ltd'}>

            <div className="group mx-auto my-5 flex w-full max-w-109.25 flex-col rounded-[18px] bg-[#e8e8e8] p-[1px] transition-all duration-500 hover:-translate-y-1 hover:bg-gradient-to-tr hover:from-[#e4b65d] hover:via-[#f9df9f] hover:to-[#dca75a] hover:shadow-2xl hover:shadow-[#e4b65d]/40">
                <div className="flex h-full w-full flex-col overflow-hidden rounded-[17px] bg-white">
                    <header className="flex flex-col items-center bg-[#111b2d] px-6 pb-8 pt-0 text-center text-white">
                        {/* Award Badge */}
                        <div className="flex h-7.5 w-43 items-center justify-center gap-2 rounded-b-full bg-[#e4b65d] text-[9px] font-bold tracking-[0.7px] text-[#111827]">
                            <Crown className="h-2.75 w-2.75 fill-current" />
                            <span>#1 BEST RATED 2026</span>
                        </div>
                        <h1 className="mt-[25px]! text-[20px]! font-extrabold leading-none tracking-[-0.5px]">
                            BULLPUP Pty Ltd
                        </h1>
                        <div className="mt-4 flex items-center justify-center gap-3 text-[#e4b65d]">
                            <Trophy className="h-[17px] w-[17px] fill-current" />
                            <span className="text-[14px] font-extrabold tracking-[1.5px]">
                                WINNER
                            </span>
                            <Trophy className="h-[17px] w-[17px] fill-current" />
                        </div>
                        <p className="mt-3 text-[11px] font-semibold text-white/90!">
                            The Best Bricklayers in City of Penrith, NSW
                        </p>
                        <p className="mt-2 text-[9px] font-bold tracking-[1px] text-[#e4b65d]!">
                            QUALITY BUSINESS AWARD • 2026
                        </p>
                    </header>
                    <main className="flex flex-col px-[26px] pb-[26px] pt-[28px]">
                        <div className="grid grid-cols-2 gap-[13px]">
                            <div className="flex h-[63px] flex-col items-center justify-center rounded-[10px] border border-[#dce3ec] bg-[#f9fafc]">
                                <span className="text-[7px] font-bold uppercase tracking-[1px] text-[#91a0b5]">
                                    Category
                                </span>
                                <span className="mt-[7px] text-[11px] font-bold text-[#111827]">
                                    Bricklayers
                                </span>
                            </div>

                            <div className="flex h-[63px] flex-col items-center justify-center rounded-[10px] border border-[#dce3ec] bg-[#f9fafc]">
                                <span className="text-[7px] font-bold uppercase tracking-[1px] text-[#91a0b5]">
                                    Location
                                </span>
                                <span className="mt-[7px] text-[11px] font-bold text-[#111827]">
                                    City of Penrith, NSW
                                </span>
                            </div>
                        </div>
                        <div className="mt-[19px] flex items-center justify-center rounded-[9px] bg-[#111b2d] px-5 text-center">
                            <p className="text-[10px] leading-none font-semibold text-white! pt-8!">
                                Ranked #1 among City of Penrith Bricklayers businesses for 2026
                                <span className="mx-1">·</span>
                                Quality Score:
                                <span className="text-[#e4b65d]"> 95%+</span>
                            </p>
                        </div>
                        <section className="mt-[23px] flex flex-col rounded-[10px] border border-[#dce3ec] border-t-2 border-t-[#dca75a] bg-[#f9fafc] px-[19px] pb-[18px] pt-[14px]">
                            {/* Heading */}
                            <div className="flex flex-col items-center">
                                <span className="text-[7px] font-bold uppercase tracking-[1px] text-[#9ba8b9]">
                                    BULLPUP PTY LTD
                                </span>
                                <h2 className="mt-[2px] text-[13px] font-extrabold text-[#111827]">
                                    Performance Ratings
                                </h2>
                            </div>
                            <div className="mt-[14px] grid grid-cols-2 gap-[10px]">
                                {ratings.map((rating) => (
                                    <div
                                        key={rating}
                                        className="flex h-[38px] items-center justify-between rounded-[9px] border border-[#dce3ec] bg-white px-[12px] shadow-[0_2px_7px_rgba(15,23,42,0.05)]"
                                    >
                                        <span className="text-[9px] font-medium text-[#111827]">
                                            {rating}
                                        </span>
                                        <div className="flex items-center gap-[1px]">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <span
                                                    key={index}
                                                    className="text-[13px] leading-none text-[#ffc857]"
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="mt-[24px] flex flex-col items-center rounded-[10px] border border-[#dce3ec] border-t-2 border-t-[#dca75a] bg-[#f9fafc] px-[17px] pb-[17px] pt-[14px] text-center">
                            <div className="flex items-center justify-center gap-[5px]">
                                <MapPin className="h-[12px] w-[12px] fill-[#e0a85a] text-[#e0a85a]" />
                                <span className="text-[7px] font-bold uppercase tracking-[1px] text-[#c88e49]">
                                    Business Location
                                </span>
                            </div>
                            <h3 className="mt-[10px] text-xl! font-extrabold text-[#111827]!">
                                BULLPUP Pty Ltd
                            </h3>
                            <p className="mt-[8px] text-sm! font-medium text-[#61728b]!">
                                BULLPUP Pty Ltd, Mitchell St, South Penrith NSW 2750
                            </p>
                            <div className="my-[10px] h-px w-full bg-[#dce3ec]" />
                        </section>
                    </main>
                </div>
            </div>
        </Link>
    );
}