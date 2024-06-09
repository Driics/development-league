import React, {Dispatch, SetStateAction} from "react";
import {DEFAULT_EASE} from "@/lib/animations";
import {AnimatePresence, domAnimation, LazyMotion, m} from "framer-motion"
import {useKey} from "react-use";
import {Accordion} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import {Button, buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
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

interface Props {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    menu: any
}

const MobileMenu = ({open, setOpen, menu}: Props) => {
    const container = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 0.15, staggerChildren: 0.05, ease: DEFAULT_EASE}},
        exit: {opacity: 0, transition: {duration: 0.15}},
    }

    const listItem = {
        hidden: {opacity: 0, y: 10},
        show: {opacity: 1, y: 0, transition: {duration: 0.25, ease: DEFAULT_EASE}},
        exit: {opacity: 0, transition: {duration: 0.05}},
    }

    useKey('Escape', () => setOpen(false))

    const Menu = () => (
        <Accordion
            type={"multiple"}
            className="space-y-1"
        >
            {menu.primaryNav.map((menuItem: any) => (
                <m.div variants={listItem} className="border-b border-[#f2f2f3] [&>div]:!rounded-none"
                       key={menuItem.title}>
                    <Link
                        href={menuItem.url}
                        className="block py-2 pl-3 pr-4 font-bold hover:bg-neutral-component-secondary focus-visible:ring-2 focus-visible:rounded focus-visible:outline-none">
                        {menuItem.title}
                    </Link>
                </m.div>
            ))}
        </Accordion>
    )

    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence mode={"wait"}>
                {open && (
                    <m.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="bg-white fixed overflow-hidden inset-0 z-50 h-screen max-h-screen w-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] transform">
                        <div
                            className="absolute h-16 px-6 flex items-center justify-between w-screen left-0 top-0 z-50 bg-[#fff] before:content[''] before:absolute before:w-full before:h-3 before:inset-0 before:top-full before:bg-gradient-to-b before:from-background-overlay before:to-transparent">
                            <Link href={"/"} as={"/"}
                                  className="block w-auto h-6 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm">
                                <Image
                                    src={"/vercel.svg"}
                                    width={124}
                                    height={24}
                                    alt="Supabase Logo"
                                />
                            </Link>
                            <button
                                onClick={() => setOpen(false)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-primary-foreground-muted focus:ring-brand bg-surface-100 hover:bg-surface-200 focus:outline-none focus:ring-2 focus:ring-inset"
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="max-h-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] overflow-y-auto pt-20 pb-32 px-4">
                            <Menu/>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 top-auto w-full bg-neutral-component-secondary flex items-stretch p-4 gap-4">
                            <Link className={cn(buttonVariants({ variant: "secondary" }), "flex-1")} href='/'>Контакты</Link>
                            <Dialog>
                                <DialogTrigger className={cn(buttonVariants({
                                    variant: "default"
                                }), "flex-1")}>Связаться с нами</DialogTrigger>
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
                    </m.div>
                )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
                {open && (
                    <m.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className=" fixed overflow-hidden inset-0 z-40 h-screen w-screen transform"
                    />
                )}
            </AnimatePresence>
        </LazyMotion>
    )
}

export default MobileMenu;