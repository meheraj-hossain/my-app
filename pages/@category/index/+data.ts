import type { PageContextServer } from "vike/types";
import { useConfig } from "vike-react/useConfig";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
    // https://vike.dev/useConfig
    const config = useConfig();
    const {category} = pageContext.routeParams;

    const response1 = await fetch(`https://www.khaborerkagoj.com/api/v1/test`);
    let data1 = await response1.json();
    const response2 = await fetch(`https://www.khaborerkagoj.com/api/v1/test2`);
    let data2 = await response2.json();
    config({
        title: category,
    });

    // We remove data we don't need because the data is passed to
    // the client; we should minimize what is sent over the network.

    return {data1, data2};
};