import { useEffect, useState } from "react";
import { getPaths } from "../../utilities/paths-service";
import PathCard from "../../components/PathCard/PathCard";


export default function PathIndexPage() {

    const [paths, setPaths] = useState([]);
    const [sortOrder, setSortOrder] = useState('newToOld');

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedPaths = sortOrder === 'newToOld' ? paths.slice().reverse() : paths.slice();

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
            <div>
                <label htmlFor="sortOrder">Sort By: </label>
                <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                <option value="newToOld">New-&gt;Old</option>
                <option value="oldToNew">Old-&gt;New</option>
                </select>
            </div>
            <ul>
            {sortedPaths.map((path) => (
                <PathCard key={path._id} path={path} />
            ))}
            </ul>           
        </>
    );
  }