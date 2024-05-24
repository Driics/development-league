import Image from "next/image";
import Hero, {HeaderProps} from "@/components/Hero";
import StatsSection from "@/components/Cards";
import InfoBlock from "@/components/Info";
import Nav from "@/components/Nav";

const useCases = [
    {
        title: "Года работы",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, sunt.",
        highlights: "3+"
    },
    {
        title: "Довольных клиентов",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at modi numquam quibusdam repellendus tenetur.",
        highlights: "1+"
    },
    {
        title: "Положительных отзывов",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        highlights: "100"
    },
]

const heroSection: HeaderProps = {
    title: (
        <>
            Привет!
            <br/>
            <span className="text-primary">Лига развития</span>
        </>
    ),
    subtitle: "Зарегистрируйтесь сейчас на наши предстоящие мероприятия и станьте частью Сообщества, которое меняет правила игры!",
    cta: {
        text: "Связаться с нами",
        link: ""
    }
}

export default function Home() {
    return (
        <main>
            <Nav/>
            <Hero title={heroSection.title} subtitle={heroSection.subtitle} cta={heroSection.cta}/>
            <StatsSection useCases={useCases}/>
            <InfoBlock imageSrc={"/img.png"}
                       imageAlt={"woman"}
                       heading={"Информация"}
                       content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque dolorum earum enim est eveniet molestias nihil odio quidem quos sunt, tenetur velit. Aspernatur assumenda culpa cum delectus harum inventore laboriosam porro quae quasi sequi. Aliquid, dolore, suscipit! Adipisci consectetur consequatur dicta est id inventore, molestiae molestias nam quia ut voluptate voluptates! At delectus dolorum est et iusto modi provident?"}/>
        </main>
    );
}
