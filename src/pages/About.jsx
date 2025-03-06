import countryData from '../components/api/countryData.json';

const About = () => {
	return (
		<section className="section-about container">
			<h2 className="container-title">
				{' '}
				Here are the interesting <br /> Facts
				
				we're proud of
			</h2>

			<div className="gradient-cards">
				{countryData.map((country, index) => {
					const { id, countryName, capital, population, interestingFact } = country;
					return (
						<div key={id} className="card">
							<div className="container-card bg-blue-box">
								<p className="card-title">{countryName}</p>
								<p>
									<span className="card-description">Capital : </span>
									{country.capital}
								</p>

								<p>
									<span className="card-description">Populaton : </span>
									{population}
								</p>

								<p>
									<span className="card-description">Interesting Fact : </span>
									{interestingFact}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default About;
