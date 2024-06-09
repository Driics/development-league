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
import {Button, buttonVariants} from "@/components/ui/button";
import {InputForm} from "@/components/Hero/ContactForm";
import {HeaderProps} from "@/components/Hero";


const SendFormDialog = (props: HeaderProps) => {
    return (
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
                <InputForm/>
                <DialogFooter>
                    <Button type="submit" form="contactForm">Отправить</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

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