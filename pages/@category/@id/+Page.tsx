import React, {useEffect, useState, Suspense, lazy} from "react";
import {useData} from "vike-react/useData";
import type {Data} from "./+data.js";
import {usePageContext} from "vike-react/usePageContext";
import {Head} from "vike-react/Head";

const LazyComponent = lazy(() => import(`./Content`));

export default function Page() {
    const movie = useData<Data>();
    const pageContext = usePageContext();
    const {category} = pageContext.routeParams;
    const [currentContent, setCurrentContent] = useState(movie.scrollContents[0]);
    useEffect(() => {
        const handleScrolling = () => {
            const Wscroll = window.scrollY + 150;
            document.querySelectorAll('.content-item').forEach(newsItem => {
                const offsetTop = newsItem.getBoundingClientRect().top + window.scrollY;
                // @ts-ignore
                const outerHeight = newsItem.offsetHeight;
                if (Wscroll > offsetTop && Wscroll < (offsetTop + outerHeight)) {
                    const contentId = newsItem.getAttribute('data-n-id');

                    // @ts-ignore
                    setCurrentContent(movie.scrollContents.find((content: {
                        n_id: number;
                    // @ts-ignore
                    }) => content.n_id === parseInt(contentId)))
                    // @ts-ignore
                    history.pushState({}, '', `/${category}/${parseInt(contentId)}`);
                }
            });
        };
        window.addEventListener('scroll', handleScrolling);
        return () => {
            window.removeEventListener('scroll', handleScrolling);
        };

    }, []);
    // @ts-ignore
    return (
        <>
            <Suspense fallback={<div>Loading</div>}>
                {movie.scrollContents.map((content: {
                    n_id: any;
                    date: string;
                    img: any;
                    head: any;
                }, index: React.Key | null | undefined) => (

                    <div key={index}
                         className="content-item"
                         data-n-id={content.n_id}
                         data-url={`/${category}/${content.n_id}`}
                         data-image={`https://khaborerkagoj.com/uploads/${content.date.replace(/-/g, '/')}/${content.img}`}
                         data-title={content.head}
                    >
                        <LazyComponent data={content} currentContent={currentContent}/>
                    </div>
                ))}
            </Suspense>
        </>
    );
}