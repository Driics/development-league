"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "@/components/ui/use-toast";

const phoneRegex = new RegExp(
    /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
);

const FormSchema = z.object({
    /* contactType: z.string().email(),*/
    title: z.string().min(3)
})

export function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            /*contactType: "",*/
            title: ""
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const response = await fetch('https://alex1412.pythonanywhere.com/api/v1/womenlist/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            toast({
                title: "Спасибо за обращение!",
                description: "Мы скоро с вами свяжемся для уточнения деталей"
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6" id="contactForm">
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Ваш номер телефона</FormLabel>
                            <FormControl>
                                <Input placeholder="8 800 555 35 35" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />


            </form>
        </Form>
    )
}

/*<FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ваше имя</FormLabel>
                            <FormControl>
                                <Input placeholder="Pedro Pedro Pedro" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />*/
/*<FormField
                    control={form.control}
                    name="contactType"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent side="bottom">
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage/>
                        </FormItem>
                    )}
                />*/