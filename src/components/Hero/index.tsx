import {Button, buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {InputForm} from "@/components/Hero/ContactForm";

export interface HeaderProps {
    title: string | React.ReactNode,
    subtitle: string | React.ReactNode,
    cta: {
        link: string | "",
        text: string
    }
}

const Header = (props: HeaderProps) => (
    <section className="relative bg-white pb-40 lg:pb-32 max-md:pb-28 max-sm:pb-[72px]">
        <div className="relative">
            <div className="h-screen max-h-[90vh] min-h-[600px] lg:max-h-[1240px]">
                <Image src={"/volleyball.png"} alt={"back"} sizes="100vh"
                       className="object-cover object-center md:block pointer-events-none opacity-30" loading="lazy"
                       fill={true}/>
                <div className=" bg-gradient-to-b from-blue-400"
                     style={{position: "absolute", height: "100%", width: "100%", left: 0, top: 0}}/>
            </div>
            <div className="container absolute inset-0">
                <div className="absolute inset-0 z-10 flex items-end px-4 md:items-center">
                    <div className="dp-shadow mb-12 text-left md:mb-0 md:mt-20">
                        <h1 className="mx-auto text-shadowx !ml-0 !max-w-[550px] !text-left xl:text-7xl text-[calc(.8636363636rem+5.6818181818vw)] text-black mb-[15px] font-semibold md:text-center"
                            style={{maxWidth: "701px"}}>
                            <span>
                                {props.title}
                            </span>
                        </h1>
                        <div>
                            <div
                                className="text-shadow !ml-0 !text-left xl:text-xl text-[calc(1.0073529412rem+.1838235294vw)] text-gray-800 mb-8 font-medium mx-auto md:text-center"
                                style={{maxWidth: "540px"}}>
                                <p>{props.subtitle}</p>
                            </div>
                            <div className="w-full md:mx-auto flex justify-start">
                                <div className="md:flex md:space-x-2">
                                    {/*<Link href={props.cta.link}
                                          className={cn(buttonVariants({variant: "default", size: "lg"}), "px-6")}>
                                        {props.cta.text}
                                    </Link>*/}
                                    <Dialog>
                                        <DialogTrigger className={cn(buttonVariants({
                                            variant: "default",
                                            size: "lg"
                                        }), "px-6")}>{props.cta.text}</DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Отправить заявку</DialogTitle>
                                                <DialogDescription>
                                                    Отправьте заявку и мы свяжемся с вами в ближайшее время
                                                </DialogDescription>
                                            </DialogHeader>
                                            {/*<div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="name" className="text-right">
                                                        Ваше имя
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        placeholder="Pedro Pedro Pedro"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="username" className="text-right">
                                                        Номер телефона
                                                    </Label>
                                                    <Input
                                                        id="username"
                                                        placeholder="8-800-555 35 35"
                                                        className="col-span-3"
                                                    />
                                                </div>
                                            </div>*/}
                                            <InputForm/>
                                            <DialogFooter>
                                                <Button type="submit" form="contactForm">Отправить</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Header;