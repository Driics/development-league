import {Button, buttonVariants} from "@/components/ui/button";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger} from "@/components/ui/dialog";
import {cn} from "@/lib/utils";
import {MedalIcon} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => (
    <footer aria-labelledby="footer-heading" className="bg-neutral-component-secondary">
        <div className="container mx-auto p-5 py-10 md:py-16">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-52 justify-between">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2 block">
                        <p className="text-xl font-medium">Тест тест тест</p>
                        <Dialog>
                            <DialogTrigger className={cn(buttonVariants({
                                variant: "outline"
                            }), "px-3 py-2 text-xs text-medium")}>Связаться</DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div className="flex items-center gap-3">
                                        <MedalIcon className="h-8 w-8"/>
                                        <h3 className="text-2xl font-bold">Developpement Lauge</h3>
                                    </div>
                                </div>
                                <div className="py-6 space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-sm font-semibold">Telegram</h4>
                                        <Link href={"https://t.me/DenisVoLtmen"} className={"whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline"}>@DenisVoLtmen</Link>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-sm font-semibold">Telegram Канал</h4>
                                        <Link href={"https://t.me/dmhomeworkout"}
                                              className={"whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline"}>Developpement Lauge</Link>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        <div className="relative flex items-center gap-2 h-5">
                            <p className="text-primary-foreground-muted text-xs font-semibold">&copy; {new Date().getFullYear()}</p>
                            <Separator orientation="vertical"/>
                            <p className="text-primary-foreground-muted text-xs font-semibold">Development League</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={"/logo.svg"} alt={"Logo"} className="h-full object-cover" loading="lazy" width={256} height={0} />
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;