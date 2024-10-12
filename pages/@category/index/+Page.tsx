import React from "react";
import {usePageContext} from "vike-react/usePageContext";
import {useData} from "vike-react/useData";
import {Data} from "./+data";

export default function Page() {
    const pageContext = usePageContext();
    const {category} = pageContext.routeParams;
    const {data1, data2} = useData<Data>();

    return (
        <>
            <h1>{category}</h1>
            <p>
                {data1.response ? 'Yes' : 'no'}
            </p>
            <p>
                {data2.response ? 'Yes' : 'no'}
            </p>
        </>
    );
}
