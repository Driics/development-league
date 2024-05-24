import Image from "next/image";
import {Card} from "@/components/ui/card";

interface InfoBlockProps {
    imageSrc: string;
    imageAlt: string;
    heading: string;
    content: string;
}

const InfoBlock = ({imageSrc, imageAlt, heading, content}: InfoBlockProps) => (
    <section className={"container "}>
        <Card className="overflow-hidden rounded-t-lg">
            <Image src={imageSrc} alt={imageAlt} className="w-full h-[310px] object-cover pointer-events-none" width={"1280"} height={"310"}/>
            <div className="p-4 w-full bg-gradient-to-r from-[#0c4ecf] to-[#0ba6b0] text-white gap-4">
                <div>
                    <h3 className="text-xl font-bold">{heading}</h3>
                    <p className="mt-2 text-sm/relaxed">{content}</p>
                </div>
            </div>
        </Card>
    </section>
);

export default InfoBlock;