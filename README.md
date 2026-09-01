---
# Programming Hero Countries API

A simple project demonstrating the usage of the Programming Hero Countries API endpoints.
Provides information about all countries, specific country by code or name, or by language.
---

## Table of Contents

- [APIs Used](#apis-used)
- [Endpoints](#endpoints)

  - https://openapi.programming-hero.com/api/all
  - https://openapi.programming-hero.com/api/alpha/116
  - https://openapi.programming-hero.com/api/lang/english
  - https://openapi.programming-hero.com/api/name/bangladesh

- [Usage](#usage)
- [Getting Started](#getting-started)
- [Example Responses](#example-responses)


---

## APIs Used

These are the Programming Hero APIs this project interacts with:

| Endpoint               | Purpose                                                              |
| ---------------------- | -------------------------------------------------------------------- |
| `/api/all`             | Fetches data on **all countries**.                                   |
| `/api/alpha/{code}`    | Fetches data about a country by its **ISO alpha-code** (e.g. `116`). |
| `/api/lang/{language}` | Fetches countries where the specified **language** is spoken.        |
| `/api/name/{name}`     | Fetches data on a country (or countries) by its **common name**.     |

---

## Endpoints

### `/api/all`

- **URL**: `GET /api/all`
- **Description**: Returns an array of all countries and their information: name, code, region, population, etc.

### `/api/alpha/{code}`

- **URL**: `GET /api/alpha/{code}`
- **Parameter**:

  - `code` (string or numeric) — the ISO alpha code of the country (e.g. `116`)

- **Description**: Returns detailed data for the country identified by that ISO code.

### `/api/lang/{language}`

- **URL**: `GET /api/lang/{language}`
- **Parameter**:

  - `language` (string) — the language name (e.g. `english`)

- **Description**: Returns the list of countries that speak the given language.

### `/api/name/{name}`

- **URL**: `GET /api/name/{name}`
- **Parameter**:

  - `name` (string) — the common name of the country (e.g. `bangladesh`)

- **Description**: Return data for country or countries whose name matches the supplied parameter.

---

## Usage

Here’s how you might use these endpoints in your app (JavaScript / fetch example):

```js
// Fetch all countries
fetch("https://openapi.programming-hero.com/api/all")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Fetch country by ISO code
fetch("https://openapi.programming-hero.com/api/alpha/116")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Fetch countries by language
fetch("https://openapi.programming-hero.com/api/lang/english")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Fetch country by name
fetch("https://openapi.programming-hero.com/api/name/bangladesh")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

## Getting Started

To set up this project locally:

1. Clone the repository
2. Install dependencies (if any)

   - e.g. `npm install` or `yarn install`

3. Create any configuration file if needed (e.g. for environment variables)
4. Run the app

   - e.g. `npm start`

---

## Example Responses

Here are example shapes of JSON responses you may get (fields may vary):

### `/api/all`

```json
[
  {
    "name": "Afghanistan",
    "alpha2Code": "AF",
    "alpha3Code": "AFG",
    "capital": "Kabul",
    "region": "Asia",
    "population": 40218234
    // ... more fields
  },
  {
    "name": "Albania",
    "alpha2Code": "AL",
    "alpha3Code": "ALB",
    "capital": "Tirana",
    "region": "Europe",
    "population": 2877797
    // ...
  }
  // ... many more
]
```

### `/api/alpha/116`

```json
{
  "name": "Country-Name",
  "alpha2Code": "XX",
  "alpha3Code": "XXX",
  "capital": "...",
  "region": "...",
  "population": ...,
  // ... other details
}
```

### `/api/lang/english`

```json
[
  {
    "name": "United Kingdom",
    "alpha2Code": "GB",
    "capital": "London"
    // ...
  },
  {
    "name": "United States of America",
    "alpha2Code": "US",
    "capital": "Washington D.C."
    // ...
  }
  // ... more countries
]
```

### `/api/name/bangladesh`

```json
[
  {
    "name": "Bangladesh",
    "alpha2Code": "BD",
    "alpha3Code": "BGD",
    "capital": "Dhaka",
    "region": "Asia",
    "population": ...,
    // ...
  }
]
```

---