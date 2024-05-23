import { useEffect, useState } from "react";
import { getPaths } from "../../utilities/paths-service";
import PathCard from "../../components/PathCard/PathCard";
import "./PathIndexPage.css"

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
            <p>Select the route you want to take!</p>
            {paths.length > 0 ? (
                <div className="paths-grid">
                    {paths.map((path) => (
                        <div key={path._id} className="path-card-wrapper">
                            <PathCard path={path} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-route">No routes created yet.</p>
            )}
        </>
    );
}