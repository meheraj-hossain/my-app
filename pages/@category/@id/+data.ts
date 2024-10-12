// https://vike.dev/data

import type { PageContextServer } from "vike/types";
import { useConfig } from "vike-react/useConfig";
import {usePageContext} from "vike-react/usePageContext";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
    // https://vike.dev/useConfig
    // const config = useConfig();
    const {category, id} = pageContext.routeParams;

    const response = await fetch(`https://www.khaborerkagoj.com/api/v1/national/${id}`);
    let data = await response.json();

    // config({
    //     title: data.scrollContents[0].head,
    // });

    // We remove data we don't need because the data is passed to
    // the client; we should minimize what is sent over the network.

    return data;
};


