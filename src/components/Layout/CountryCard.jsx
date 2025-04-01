
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;

    // Helper function to format population
    const formatPopulation = (population) => {
        if (population >= 1_000_000_000) {
            return `${(population / 1_000_000_000).toFixed(1)}B`; // Billions
        } else if (population >= 1_000_000) {
            return `${(population / 1_000_000).toFixed(1)}M`; // Millions
        } else if (population >= 1_000) {
            return `${(population / 1_000).toFixed(1)}K`; // Thousands
        } else {
            return population.toLocaleString(); // Less than 1,000
        }
    };

    return (
        <li className="country-card card">
            <div className="container-card bg-white-box">
                <div className="country-flag-container">
                <img src={flags.svg} alt={flags.alt} />

                </div>

                <div className="countryInfo">
                    <p className="card-title">
                        {name.common.length > 10
                            ? name.common.slice(0, 10) + "..."
                            : name.common}
                    </p>

                    <p>
                        <span className="card-description">Population:</span>
                        {formatPopulation(population)} {/* Use the helper function here */}
                    </p>

                    <p>
                        <span className="card-description">Region:</span>
                        {region}
                    </p>

                    <p>
                        <span className="card-description">Capital:</span>
                        {capital[0]}
                    </p>

                    <NavLink to={`/country/${name.common}`}>
                        <button>
                            Read More <FaLongArrowAltRight />
                        </button>
                    </NavLink>
                </div>
            </div>
        </li>
    );
};

export default CountryCard;