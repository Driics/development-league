// components/GetStartedComponent.tsx
import React from 'react';
import {Button, buttonVariants} from "@/components/ui/button";
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
import {cn} from "@/lib/utils";
import {InputForm} from "@/components/Hero/ContactForm";

interface GetStartedProps {
    title: string;
    steps: {
        title: string;
        description: string;
    }[];
    getStartedText: string;
    buttonText: string;
}

const WhatWeDoBlock: React.FC<GetStartedProps> = ({
                                                      title,
                                                      steps,
                                                      getStartedText,
                                                      buttonText,
                                                  }) => {
    return (
        <div className="text-center py-28 container mx-auto px-5 lg:px-0" id="what-we-do">
            <div className="text-5xl font-semibold text-neutral-text-primary">{title}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-4 rounded-xl bg-neutral-component-secondary inset-0 relative"
                    >
                        <div
                            className="text-left text-xs py-1 px-3 border border-neutral-border-tertiary bg-[#1d1d1d] rounded-2xl self-start">
                            <div className="text-white">{"0" + (index + 1)}</div>
                        </div>
                        <div className="text-xl text-neutral-text-primary text-left mt-2 font-medium">{step.title}</div>
                        <div
                            className="text-sm font-light text-neutral-text-tertiary text-left mt-40">{step.description}</div>
                    </div>
                ))}
            </div>
            <div
                className="flex justify-between items-center w-full bg-primary text-white py-4 px-4 rounded-xl mt-5 text-lg">
                {getStartedText}
                <Dialog>
                    <DialogTrigger className={cn(buttonVariants({variant: "outline"}), "py-2 px-4 rounded-lg border border-white border-opacity-30 text-base hover:bg-primary-component-secondary")}>{buttonText}</DialogTrigger>
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
    );
};

export default WhatWeDoBlock;