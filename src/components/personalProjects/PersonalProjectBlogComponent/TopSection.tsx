import React, { CSSProperties } from "react";
import IconContainer from "../../general/IconConteiner";
import TopSectionSkeleton from "../../skeletons/TopSectionSkeleton";

interface Props{
    data: TopSC, 
    customStyle: CSSProperties,
    loading: boolean,
}

interface TopSC {
    title: string, 
    brief: string, 
    date: string, 
    mainImg: string,
    tec: { icon_tec: string }[],
}

const TopSection: React.FC<Props> = ({ data, customStyle, loading }) => {

    //function to format a date string...
    const formatDateString= (dateString: string): string => {
        try{

            //create a date object from the provided date string...
            const date = new Date(dateString);

            //Options for date formatting...
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'long', //Full weekday name (e.g.)...
                year: 'numeric', //Four-digit year...
                month: 'long', //Full month name (e.g)...
                day: 'numeric', //Numeric day of the month...
            }
            
            /*
                1. Format the date according to the provided options...
                2. and then replace the first comma with a hypen...
            */
            const formattedDate = date.toLocaleDateString('en-US', options).replace(/,/, _match => ' -');

            //return the formatted date...
            return formattedDate;
        } catch(error){
            // Handle the case where the Date object cannot be created
            console.error('Error parsing date:', error);
            return 'Invalid Date';
        }
    }
    
    return(
        <>
            {loading ? (
                    <TopSectionSkeleton 
                        customStyle={{
                            backgroundColor: '#FFFAEB' , 
                            minHeight: '650px'
                        }}
                    />
                ): (
                    <div 
                        style={ customStyle }
                        className="py-6 w-full flex items-center justify-center"
                    >
                        <div
                            style={{ 
                                width: 'clamp(310px, 95%, 1200px)', 
                                minHeight: '600px',
                                borderBottom: '1.7px solid #252A2D'
                            }}
                            className="flex justify-between items-center flex-wrap gap-1"
                        >
                            <div 
                                className="h-atuo screenTopSection:h-htopsectiondiv flex justify-center items-start screenTopSection:items-end w-full screenTopSection:w-clampToSection"
                            >
                                <div
                                    className="w-full h-auto px-2 py-6 flex flex-col justify-between items-center"
                                >
                                    <div className="w-full h-auto py-2">
                                        <p 
                                            className="text-CBS font-semibold tracking-wider text-sm">
                                            { formatDateString(data.date) }
                                        </p>
                                    </div>
                                    <div className="w-full h-auto py-2">
                                        <h3 
                                            style={{ fontSize: 'clamp(40px, 2vw, 2.60em)'}}
                                            className="text-CBS font-bold tracking-wide">
                                            {data.title}
                                        </h3>
                                    </div>
                                    <div className="w-full h-auto py-2">
                                        <p 
                                            className="text-CBS font-medium tracking-wider text-lg">
                                            {data.brief}
                                        </p>
                                    </div>
                                    <div 
                                        className="mt-3 w-full h-auto py-2 flex flex-wrap gap-4 justify-start items-center"
                                    >
                                        {data.tec.map((icon: { icon_tec: string }, index: number) => (
                                            <IconContainer 
                                                key={index}
                                                icon={icon.icon_tec}
                                                customStyle={{
                                                    width: '50px',
                                                    backgroundColor: '#252A2D',
                                                    color: '#FFFFFF',
                                                    fontSize: '1.2em',
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div 
                                className="h-atuo screenTopSection:h-htopsectiondiv flex justify-center items-center w-full screenTopSection:w-clampToSection mb-14 screenTopSection:mb-0"
                            >
                                <figure
                                    className="order-1 w-full screenTopSection:w-wtopSectionImg h-full screenTopSection:h-htopSectionImg"
                                >
                                    <img 
                                        src={data.mainImg}
                                        alt={data.title} 
                                        className="w-full h-full object-fit-cover object-center"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default TopSection;