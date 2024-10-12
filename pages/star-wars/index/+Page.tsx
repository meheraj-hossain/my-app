import React from "react";
import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";
import {Head} from "vike-react/Head";

export default function Page() {
  const movies = useData<Data>();
  return (
    <>
        <Head>
            <meta httpEquiv="refresh" content="600"/>
        </Head>
        <h1>Star Wars Movies</h1>
        <ol>
        {movies.map(({ id, title, release_date }) => (
          <li key={id}>
            <a href={`/star-wars/${id}`}>{title}</a> ({release_date})
          </li>
        ))}
      </ol>
      <p>
        Source: <a href="https://brillout.github.io/star-wars">brillout.github.io/star-wars</a>.
      </p>
    </>
  );
}
