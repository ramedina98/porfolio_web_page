import React, { useState, useEffect, useRef, createRef } from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../../api/GetApi';
import Header from '../general/Header';
import Footer from '../general/Footer';
import TopSection from './PersonalProjectBlogComponent/TopSection';
import Article from './PersonalProjectBlogComponent/Article';
import TableOfContents from './PersonalProjectBlogComponent/TableOfContents';
import Slider from '../general/Slider';
import { Variants } from 'framer-motion';
import ArticleSkeleton from '../skeletons/ArticleSkeleton';
import FooterContactForm from '../general/FooterContactForm';

interface BlogData {
    blog_id: number;
    date: string, 
    blog_title: string;
    brief: string,
    topSectionImg: string,
    img_carrusel: imgLink[];
    subT: SubTextData[];
    tec: { icon_tec: string }[];
    web: string, 
    git: string,
}

interface imgLink{
    img_link: string,
}

interface SubTextData {
    sub_text: string;
    content: Content[];
}

interface Content {
    text: string;
    type: string;
}

//interface for TopSection data...
interface TopSC {
    title: string, 
    brief: string, 
    date: string, 
    mainImg: string,
    tec: { icon_tec: string }[],
}

interface ImageData {
    img_link: string;
}

interface SliderProps{  
    img_carrusel: ImageData[];
}

interface ContentData {
    text: string;
    type: string;
}

interface SubTextData {
    sub_text: string;
    content: ContentData[];
}

interface ArtData {
    subT: SubTextData[];
}

const PersonalProject: React.FC = () => {

    //id obtained through the URL...
    const { id } = useParams<{id: string}>();

    //hook for the use of the data obtained by fetching API data...
    const [projects, setProjects] = useState<BlogData>();
    //this hook is to show the card skeletons while getting the data from the API...
    const [loading, setLoading] = useState<boolean>(true);
    //this hook is to send the necessary information to the TopSection component...
    const [topSectionData, setTopSectionData] = useState<TopSC>({ title: '', brief: '', date: '', mainImg: '', tec: []});
    //data required for the article component...
    const [articleData, setArticleData] = useState<ArtData>({ subT: [], })
    //data required for the slider component...
    const [sliderData, setSliderData] = useState<SliderProps>({ img_carrusel: [], })

    useEffect(() => {
        
        //Building the API endpoint URL using the project ID from the route parametes...
        const url = `https://serverwebpage-production.up.railway.app/personal_project/${id}`;

        //Defining an asynchronous function to fetch data from the specified URL...
        const fetchData = async () => {
            try{
                //Using the FetchData function to make an API request and obtaining project data...
                const data = await FetchData<BlogData>(url);

                //setting the top section data using the retrieved project data...
                setTopSectionData({
                    title: data.blog_title, 
                    brief: data.brief, 
                    date: data.date, 
                    mainImg: data.topSectionImg,
                    tec: data.tec,
                }); 

                //setting the article data
                setArticleData({
                    subT: data.subT,
                });

                //setting the slider data, including
                setSliderData({
                    img_carrusel: data.img_carrusel,
                })

                //setting the entire project data...
                setProjects(data);
            } catch(error){
                //loggin en error message if there is an issue fetching project data...
                console.log('Error fetching project data: ', error);
            } finally{
                //when the request is finished, setting the loading state to false...
                //this help to hide any loading indicators or skeletons...
                setLoading(false);
            }
        }; 

        //invoking the fetchData function when the component mounts...
        fetchData();
    }, []);

    //variants for li animation in the table of contents component...
    const Variants: Variants = {
        hover: {
            backgroundColor: '#252A2D',
            color: '#FFFAEB',
            transition: {duration: 0.5}
        },
        tap: {
            scaleX: 0.95,
            letterSpacing: '0.06em'
        }
    }

    //Note: this array of refs is passed as props depending on the index to the article component...
    //create a ref to store an array of refs for each article...
    const articleRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
    
    useEffect(() => {
        // Initialize refs based on the length of articleData.subT
        articleRefs.current = Array(articleData.subT.length)
            .fill(0)
            .map((_, index: number) => articleRefs.current[index] || createRef());
        // Create refs for each article if they don't exist or reuse existing ones
    }, [articleData.subT]);

    //Note: this function is passed as props to the table of content component...
    //function to handle clicks on table of contents items...
    const handleItemClick = (index: number) => {
        //check if the article refs array is not initialize or index is out of bounds 
        if (!articleRefs.current || articleRefs.current.length <= index || !articleRefs.current[index]) {
            console.error('Las referencias de los artículos no se han inicializado correctamente.');
            return;
        }
    
        const articleRef = articleRefs.current[index];
    
        
    
        //scroll the corresponding article into view with smooth behavior...
        articleRef.current.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Header 
                customStyle={{
                    backgroundColor: '#FFFAEB', 
                    transition: 'background-color 0.5s ease', 
                    position: 'sticky',
                    padding: '3em 0',
                }}
                logoColor={{
                    color: '#6C0BDF',
                }}
            />
            {/*in this section we will deal with everything that has to do with the personal project blog...*/}
            <section>
                {/*this component will show us the top section of the blog post related to the project we are visiting...*/}
                <TopSection 
                    data={ topSectionData }
                    customStyle={{ 
                        backgroundColor: '#FFFAEB' , 
                        minHeight: '650px'
                    }}
                    loading={loading}
                />
                {/*The end of the section...*/}
                {/*The following section contains the bulk of the blog information related to the project...*/}
                <main className='w-full h-auto bg-CSH flex justify-center items-start'>
                    <div 
                        style={{
                            width: 'clamp(310px, 95%, 1200px)', 
                            minHeight: '600px',
                        }}
                        className='flex justify-between items-start flex-wrap gap-1'
                    >
                        {/*Div that content the slider*/}
                        <div className='mt-16 mb-24 w-full h-auto flex justify-center items-center'>
                            <Slider 
                                customStyle={{
                                    width: '100%',
                                    height:'550px',
                                    borderRadius: '0.3em',
                                    backgroundColor: '#FFFAEB',
                                }}
                                data={ [sliderData] }
                                loading={loading}
                            />
                        </div>
                        <div 
                            style={{minHeight: '600px'}}
                            className="w-full screenArticle:w-clampArticle"
                        >
                            {loading ? (
                                Array(3).fill(0).map((_, index) => (
                                    <ArticleSkeleton 
                                        key={index}
                                        titleWidth={450}
                                        titleHeight={65}
                                        paragraphWidth={650}
                                        paragraphHeight={25}
                                        paragraphRepetitions={9}
                                    />
                                ))
                            ) : (
                                articleData.subT.map((subTextData: SubTextData, index: number) => (
                                    <Article 
                                        key={index}
                                        data={ subTextData }
                                        customStyle={{ 
                                            minHeight: 'auto', 
                                            marginBottom: '2em'
                                        }}
                                        customTitleStyle={{ 
                                            color: '#252A2D', 
                                            fontSize: 'clamp(30px, 8vw, 2.3em)',
                                            letterSpacing: '0.04em',
                                            fontWeight: '600',
                                        }}
                                        customTextStyle={{}}
                                        //array of refs...
                                        articleRef={articleRefs.current[index]}
                                    />
                                ))
                            )}
                        </div>
                        <TableOfContents 
                            titleOftable='TABLE OF CONTENTS'
                            customTitleStyle={{
                                padding: '1.6em 1em', 
                                fontSize: '1em', 
                                letterSpacing: '0.05em',
                                fontWeight: '300'
                            }}
                            listText={articleData.subT.map(item => item.sub_text)}
                            customLiStyle={{
                                fontSize: '1.25em',
                                letterSpacing: '0.03em',
                                color: '#252A2D', 
                                cursor: 'pointer',
                                padding: '1em',
                                borderRadius: '0.3em'
                            }}
                            customStyle={{
                                position: 'sticky', 
                                top: 0,
                                left: 0,
                            }}
                            customVariants={Variants}
                            linkWeb={projects?.web}
                            linkGit={projects?.git}
                            //function to handle the click on the li of the list and go to the corresponding div...
                            onItemClick={handleItemClick}
                            loading={loading}
                        />
                    </div>
                </main>
                {/*The end of the section...*/}
            </section>
            <FooterContactForm 
                customBackground={{
                    backgroundColor: '#FFFAEB'
                }}
            />
            <Footer />
        </>
    )
}

export default PersonalProject