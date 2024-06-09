interface Stat {
    title: string,
    subtitle: string | React.ReactNode,
    highlights?: string | React.ReactNode
}

interface Props {
    useCases: Stat[]
}

const StatsSection = ({useCases}: Props) => (
    <section className="relative z-20 max-sm:mt-[11px] lg:pb-32 max-md:pb-28 max-sm:pb-[72px]" id="stats">
        <ul className="container flex max-sm:flex-col max-sm:items-center max-sm:gap-14">
            {useCases.map((useCase, i) => {
                return <Card title={useCase.title} subtitle={useCase.subtitle} highlights={useCase.highlights}
                             key={useCase.title}/>
            })}
        </ul>
    </section>
)

const Card = ({title, subtitle, highlights}: Stat) => (
    <li className="mr-[11%] w-[23.2%] last:mr-0 max-lg:mr-[7.25%] max-lg:w-[27%] max-md:mr-[6.1%] max-md:w-[28.3%] max-sm:mr-0 max-sm:w-full max-sm:max-w-[30rem]">
        <section className="flex flex-col">
            <h2 className="mb-8 flex flex-col items-start gap-1 border-b border-black border-opacity-10 pb-8 leading-extra-tight tracking-wider text-gray-98 text-2xl max-lg:mb-6 max-lg:gap-1 max-lg:pb-6 max-lg:text-xl max-md:mb-5 max-md:pb-5">
                <b className="before:ellipse-primary relative bg-card bg-clip-text pr-1.5 font-sans-titles text-[136px] font-extralight leading-none tracking-tighter text-transparent before:absolute before:top-1/2 before:left-1/3 before:-translate-y-1/2 before:-translate-x-1/2 before:scale-y-[30] before:opacity-15 before:blur-[2px] max-lg:text-[96px] max-lg:before:scale-y-[20] max-md:text-[80px] before:scale-x-[20] max-lg:before:scale-x-[10]">
                    {highlights}
                </b>
                {title}
            </h2>
            <p className="text-lg font-light tracking-wider text-gray-94 max-lg:text-base max-md:leading-snug max-sm:leading-normal">
                {subtitle}
            </p>
        </section>
    </li>
)

export default StatsSection;