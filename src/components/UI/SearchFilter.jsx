<<<<<<< HEAD
const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const handleSelectChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    };

    return (
        <section className="section-searchFilter container">
            <div className="input-container">
                <input
                    className="search-filter"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleInputChange}
                />
                <select
                    className="select-section"
                    value={filter}
                    onChange={handleSelectChange}
                >
                    <option value="all">All</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    );
};

export default SearchFilter;
=======
const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const handleSelectChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    };

    return (
        <section className="section-searchFilter container">
            <div className="input-container">
                <input
                    className="search-filter"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleInputChange}
                />
                <select
                    className="select-section"
                    value={filter}
                    onChange={handleSelectChange}
                >
                    <option value="all">All</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    );
};

export default SearchFilter;
>>>>>>> fc009b3b17dafb591ed902dfa53cb35ee1b326f5
