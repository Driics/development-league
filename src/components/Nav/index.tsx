import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

const Nav = () => (
    <header
        className="fixed top-0 inset-x-0 z-40 mx-auto flex w-full max-w-[1280px] flex-col justify-between rounded-bl-2xl rounded-br-2xl px-[30px] py-[18px] transition-all bg-white">
        <div className="flex items-center w-full">
            <div className="flex w-full items-center justify-between lg:w-0 lg:flex-1">

            </div>
            {/*main nav region*/}
            <nav className="hidden lg:flex lg:items-center lg:space-x-10">
                <div>
                    <a href="/" className="flex items-center transition-all hover:font-medium hover:text-blue-900">
                        <span>Наши услуги</span>
                    </a>
                </div>
                <div>
                    <a href="/" className="flex items-center transition-all hover:font-medium hover:text-blue-900">
                        <span>Наши услуги</span>
                    </a>
                </div>
                <div>
                    <a href="/" className="flex items-center transition-all hover:font-medium hover:text-blue-900">
                        <span>Наши услуги</span>
                    </a>
                </div>
                <div>
                    <a href="/" className="flex items-center transition-all hover:font-medium hover:text-blue-900">
                        <span>Наши услуги</span>
                    </a>
                </div>
            </nav>
            {/*end main nav region*/}
            <div className="hidden items-center justify-end lg:flex lg:w-0 lg:flex-1">
                <div className="w-full md:w-auto">
                    <div className="md:flex md:space-x-2">
                        <Link href={""} className={buttonVariants({variant: "secondary"})}>Контакты</Link>
                        <Link href={""} className={buttonVariants({variant: "default"})}>Связь</Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Nav;