import { useEffect, useState } from "react";
import { getPaths } from "../../utilities/paths-service";
import PathCard from "../../components/PathCard/PathCard";
import './PathIndexPage.css';

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
            <br/>
            {paths.length > 0 ? (
                <>
                    <div className="sort-options">
                        <label htmlFor="sortOrder">Sort By: </label>
                        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                            <option value="newToOld">New-&gt;Old</option>
                            <option value="oldToNew">Old-&gt;New</option>
                        </select>
                    </div>
                    <div className="paths-grid">
                        {sortedPaths.map((path) => (
                            <div key={path._id} className="path-card-wrapper">
                                <PathCard path={path} />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p className="no-route">No routes created yet.</p>
            )}
        </>
    );
}

