import type { CountryType } from '../../type';
import './Country.css';

export interface CountryProps {
    country: CountryType
}

export default function Country({ country }: CountryProps) {
    
    return (
        <div className="country">
            <h3>{country.name.common}</h3>
        </div>
    )
}