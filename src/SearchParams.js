import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle,WA");
  const [animal, setAnimal] = useState("Dog,xx");
  const [breed, setBreeds] = useState("vasa,asda");

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          breeed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breed.length === 0}
          ></select>
          <option>All</option>
          {breeds.map(breedString => (
            <option key={breedString} value={breedString}>
              {breedString}
            </option>
          ))}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
