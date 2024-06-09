import React from "react";
import Image from "next/image";

interface IconProps {
    iconSvg: React.ReactNode;
    percentage: string;
}

interface CardProps {
    badge: string
    title: React.ReactNode | string;
    icons: IconProps[];
    progressUnlocked: {
        title: string;
        description: string;
    };
    affordableDescription: {
        title: string;
        description: string;
    };
}

const Test: React.FC<CardProps> = ({
                                       badge,
                                       title,
                                       icons,
                                       progressUnlocked,
                                       affordableDescription,
                                   }) => {
    return (
        <div className="px-5 py-16" id="#test">
            <div
                className="h-full border container mx-auto relative gap-8 bg-neutral-page-secondary rounded-3xl border-[#ededed] w-full overflow-hidden">
                <div className="grid md:grid-cols-2 p-10">
                    <div className="rounded-xl h-full">
                        <div className="w-full md:max-w-md mr-auto flex flex-col h-full ">
                            <div
                                className="text-white text-xs border border-[#565656] px-4 py-1.5 rounded-full max-w-min whitespace-nowrap bg-[#262a2c]">
                                {badge}
                            </div>
                            <div className="mt-6 text-4xl font-medium text-[#1a1a1a]">
                                {title}
                            </div>
                            <div className="block md:hidden my-10 w-full">
                                <Grid icons={icons}/>
                            </div>
                            <div className="mt-32 space-y-6">
                                <div className="flex items-center gap-2 p-2">
                                    <div
                                        className="bg-[#144FF0] h-10 w-10 rounded flex justify-center items-center flex-shrink-0">
                                        <Image src={"/plane.svg"} alt={"plane"} loading="lazy" style={{color: 'transparent'}} width={-1} height={-1}/>
                                    </div>
                                    <div className="text-[#1a1a1a]">
                                        <div>{progressUnlocked.title}</div>
                                        <div className="text-sm text-[#737a8a]">
                                            {progressUnlocked.description}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center gap-2 p-2 hover:bg-primary-component-secondary rounded-lg cursor-pointer transition-all">
                                    <div
                                        className="!bg-[#343434] h-10 w-10 rounded flex justify-center items-center flex-shrink-0">
                                        <Image src={"/plane.svg"} alt={"plane"} loading="lazy" style={{color: 'transparent'}} width={-1} height={-1}/>
                                    </div>
                                    <div className="text-[#1a1a1a]">
                                        <div>{affordableDescription.title}</div>
                                        <div className="text-sm text-[#737a8a]">
                                            {affordableDescription.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full justify-center items-center hidden md:flex">
                        <div className="max-w-md ml-auto w-full">
                            <Grid icons={icons}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface GridProps {
    icons: IconProps[];
}

const Grid: React.FC<GridProps> = ({icons}) => {
    const generateRandomPosition = (): { x: number; y: number } => {
        const x = Math.floor(Math.random() * 5);
        const y = Math.floor(Math.random() * 5);
        return {x, y};
    };

    const getRandomIconOrBorder = (): React.ReactNode => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return (
                <div className="w-12 h-12 sm:h-14 sm:w-14 rounded-xl border border-neutral-border-secondary"></div>
            );
        } else {
            return (
                <div className="w-12 h-12 sm:h-14 sm:w-14 rounded-xl border-none"></div>
            );
        }
    };

    const renderGridItem = (index: number): React.ReactNode => {
        const randomPosition = generateRandomPosition();
        const icon = icons[index];

        return (
            <div
                key={index}
                className={`w-12 h-12 sm:h-14 sm:w-14 rounded-xl ${
                    icon?.iconSvg ? 'bg-[#eeeeee]' : ''
                }`}
                style={{
                    gridColumn: randomPosition.x + 1,
                    gridRow: randomPosition.y + 1,
                }}
            >
                {icon?.iconSvg ? (
                    <div className="w-full h-full relative cursor-pointer">
                        <div
                            className="flex absolute rounded-full bg-[#fafafa] -right-2 md:-right-4 -top-1 text-[10px] px-1 flex-shrink-0 text-nowrap">
                            {icon.percentage}
                            <span className="ml-[2px]">&gt;</span>
                        </div>
                        <div className="w-full h-full flex justify-center items-center hover:scale-110">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 text-center align-middle">{icon.iconSvg}</div>
                        </div>
                    </div>
                ) : (
                    getRandomIconOrBorder()
                )}
            </div>
        );
    };

    return (
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-6 gap-2 relative">
            {Array.from({length: 48}, (_, index) => renderGridItem(index))}
        </div>
    );
};

export default Test;