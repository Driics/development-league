"use client"

import Link from "next/link";
import Image from "next/image";
import {Button, buttonVariants} from "@/components/ui/button";
import React from "react";
import {cn} from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import {menu} from "@/data/nav";
import MenuItem from "@/components/Nav/MenuItem";
import MobileMenu from "@/components/Nav/MobileMenu";
import HamburgerButton from "@/components/Nav/HamburgerButton";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {InputForm} from "@/components/Hero/ContactForm";
import {MedalIcon, MountainIcon} from "lucide-react";
import {Label} from "@/components/ui/label";


const Nav = () => {
    const [open, setOpen] = React.useState(false);


    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open])

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            <div
                className={cn("fixed top-0 inset-x-0 z-40 mx-auto flex w-full max-w-[1280px] flex-col justify-between rounded-bl-2xl rounded-br-2xl transition-all bg-white")}
                style={{transform: "translate3d(0, 0, 999px)"}}>
                <nav className={cn("relative z-40 transition-opacity")}>
                    <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
                        <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
                            <div className="flex items-center">
                                <div className="flex items-center flex-shrink-0">
                                    <Link href="/"
                                          className="block w-auto h-6 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm">
                                        <Image
                                            src={"/vercel.svg"}
                                            width={124}
                                            height={24}
                                            alt="Supabase Logo"
                                        />
                                    </Link>
                                </div>
                                <NavigationMenu
                                    delayDuration={0}
                                    className={"hidden pl-8 sm:space-x-4 xl:flex h-16"}
                                    viewportClassName={"rounded-xl bg-background"}>
                                    <NavigationMenuList>
                                        {menu.primaryNav.map((menuItem: any) => (
                                            <NavigationMenuItem key={menuItem.title} className="text-sm font-medium">
                                                <NavigationMenuLink asChild>
                                                    <MenuItem
                                                        href={menuItem.url}
                                                        title={menuItem.title}
                                                        className="group-hover:bg-transparent text-foreground focus-visible:text-brand-link"
                                                        hoverColor="brand"
                                                    />
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                            <div
                                className="flex items-center gap-2 opacity-0 animate-fade-in !scale-100 delay-300 max-lg:hidden">
                                <Dialog>
                                    <DialogTrigger className={cn(buttonVariants({
                                        variant: "secondary"
                                    }))}>Контакты</DialogTrigger>
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
                                <Dialog>
                                    <DialogTrigger className={cn(buttonVariants({
                                        variant: "default"
                                    }))}>Связаться с нами</DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Отправить заявку</DialogTitle>
                                            <DialogDescription>
                                                Отправьте заявку и мы свяжемся с вами в ближайшее время
                                            </DialogDescription>
                                        </DialogHeader>
                                        <InputForm/>
                                        <DialogFooter>
                                            <Button type="submit" form="contactForm">Отправить</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <HamburgerButton toggleFlyOut={() => setOpen(true)}/>
                    </div>
                    <MobileMenu open={open} setOpen={setOpen} menu={menu}/>
                </nav>
            </div>
        </>
    )
}

export default Nav;