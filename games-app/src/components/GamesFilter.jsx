import { useRef, useState } from "react";

export default function GamesFilter({ genres, onFilterChange }) {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [publisher, setPublisher] = useState("");
    
    const genreRef = useRef();
    const titleRef = useRef();
    const publisherRef = useRef();

    function handleTitleSearch(e) {
        const titleText = e.target.value;
        setTitle(titleText);
        applyFilters();
    }

    function handleGenreChange(e) {
        const selectedGenre = e.target.value;
        setGenre(selectedGenre);
        applyFilters();
    }

    function handlePublisherChange(e) {
        const selectedPublisher = e.target.value;
        setGenre(selectedPublisher);
        applyFilters();
    }

    function applyFilters() {
        let title = titleRef.current.value;
        let genre = genreRef.currnnt.value;
        let publisher = publisherRef.currnnt.value;
        onFilterChange(title,genre, publisher);

    }



    function resetFilterControls() {
        setTitle("");
        setGenre("");
        genreRef.current.value = "";
        titleRef.current.value = "";
    }

    function removeFilters() {
        resetFilterControls();
        applyFilters();
    }

    let genreOptionJsx = genres.map(genre => {
        return (
            <option value={genre}>{genre}</option>
        )
    });

    genreOptionJsx.unshift(<option value="all">All</option>)

    let publisherOptionJsx = publishers.map(publisher => {
        return (
            <option value={genre}>{genre}</option>
        )
    });

    publisherOptionJsx.unshift(<option value="all">All</option>)

    return (
        <>
            <div>
                <input type="text" ref={titleRef}
                    className="game-search-box"
                    value={title}
                    onChange={(e) => { handleTitleSearch(e) }}
                    placeholder="Enter a title">
                </input>
                <button onClick={() => { removeFilters() }}>Remove Filters</button>
            </div>
            <div>
                Filters:
                <select ref ={genreRef} 
                onChange={(e) => { handleGenreChange(e) }}>
                    {genreOptionJsx}
                </select>

                <select ref ={publisherRef} 
                onChange={(e) => { handlePublisherChange(e) }}>
                    {publisherOptionJsx}
                </select>
            </div>
        </>
    );
}

