import { useEffect, useState } from "react";
import { getPaths } from "../../utilities/paths-service";
import PathCard from "../../components/PathCard/PathCard";

export default function PathIndexPage() {

    const [paths, setPaths] = useState([]);

    useEffect(() => {
    async function fetchPaths() {
      const paths = await getPaths();
      setPaths(paths);
    }

    fetchPaths();
    }, []);

    return (
        <>
            <h1>My Paths:</h1>
            <ul>
                {paths.map((path) => (<PathCard path={path}/>))}
            </ul>            
        </>
    );
  }