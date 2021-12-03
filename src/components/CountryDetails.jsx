import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import CountriesList from "../components/CountriesList"
//import countriesData from  "../countries.json"
import { useEffect, useState } from 'react';

const CountryDetails = ({ countries }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState({});
  const { id: countryId } = useParams();

  useEffect(() => {
    const country = countries.find(
      (country) => country.alpha3Code === countryId
    );
    
    setCountry(country);
    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryId]); //  OR     }, [countryId, countries])

  const whereamI = countries.filter((oneCountry) => {
      if (country.borders === undefined) return false;
      return country.borders.includes(oneCountry.alpha3Code);
    })
    .map((countryobject) => ({
      commonname: countryobject.name.common,
      code: countryobject.alpha3Code,
    }));

  // return statement based on the las iteration. for the previous iteration you need a map

  return (
    <div>
      {isLoading && <p>Data is loading...</p>}
      {!isLoading && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
            width="300px"
            height="auto"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {country.borders.length === 0 ? (
                    <p>This country has no neighbouring countries.</p>
                  ) : (
                    <ul>
                      {whereamI.map((country, index) => {
                        return (
                          <li key={index}>
                            <Link to={country.code}>{country.commonname}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
