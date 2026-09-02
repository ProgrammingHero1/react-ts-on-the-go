import { use, useState } from 'react';
import type { CountryType } from '../../type';
import Country from '../Country/Country';
import './Countries.css';

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

    const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

    const countries = use(countriesPromise);

    const handleVisitedCountry = (country: CountryType): void => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag: string): void => {
        console.log('flag visited', flag);

        if (visitedFlags.includes(flag)) {
            const remainingFlags = visitedFlags.filter(f => f !== flag);
            setVisitedFlags(remainingFlags);
        }
        else {
            const newVisitedFlags = [...visitedFlags, flag];
            setVisitedFlags(newVisitedFlags);
        }
    }

    // console.log(countries)
    return (
        <div>
            <h2>Countries: {countries.length} </h2>
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <h4>Visited Flags: {visitedFlags.length}</h4>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>)
                }
            </div>

        </div>
    )
}