import Hero, {HeaderProps} from "@/components/Hero";
import InfoBlock from "@/components/Info";
import Nav from "@/components/Nav";
import StatsSection from "@/components/Cards";
import {AwardIcon, CherryIcon, CookieIcon, DumbbellIcon, MedalIcon, TvIcon} from "lucide-react";
import dynamic from "next/dynamic";
import Test from "@/components/test";

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
            <Test
                badge="Для начинающих спортсменов"
                title={(
                    <>Для мероприятий которые <span className="text-[#144FF0]">(</span>серьезно<span className="text-[#144FF0]">)</span> относятся к себе</>
                )}
                icons={[
                    { iconSvg: <CherryIcon />, percentage: '1'},
                    { iconSvg: <CookieIcon />, percentage: '2'},
                    { iconSvg: <TvIcon />, percentage: '3'},
                    { iconSvg: <AwardIcon />, percentage: '4'},
                    { iconSvg: <DumbbellIcon />, percentage: '5'},
                    { iconSvg: <MedalIcon />, percentage: '6'},
                    // Add more icons as needed
                ]}
                progressUnlocked={{
                    title: 'заголовок заголовок',
                    description: 'описание описание описание',
                }}
                affordableDescription={{
                    title: "заголовок заголовок",
                    description: "описание описание описание"
                }}
            />
            <InfoBlock imageSrc={"/img.png"}
                       imageAlt={"woman"}
                       heading={"Информация"}
                       content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque dolorum earum enim est eveniet molestias nihil odio quidem quos sunt, tenetur velit. Aspernatur assumenda culpa cum delectus harum inventore laboriosam porro quae quasi sequi. Aliquid, dolore, suscipit! Adipisci consectetur consequatur dicta est id inventore, molestiae molestias nam quia ut voluptate voluptates! At delectus dolorum est et iusto modi provident?"}/>
        </main>
    );
}
