"use client";
import React, { useState } from "react";
import data from "./data/data.json";

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

const App: React.FC = () => {
  const sampleData: ElectionResults = data;
  const [selectedCategory, setSelectedCategory] = useState<
    "cities" | "provinces" | "regions" | "groupIsland" | "country"
  >("country");
  const [reversed, setReversed] = useState<boolean>(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );

  const getResults = (): CandidateResult[] => {
    if (selectedCategory === "country") {
      return sampleData.country;
    }
    const results = sampleData[selectedCategory];
    return selectedSubCategory ? results[selectedSubCategory] || [] : [];
  };

  const handleReverse = () => {
    setReversed((prev) => !prev);
  };

  const displayResults = () => {
    const data = getResults();
    return data.map((entry, index) => {
      const format = (value: string | number) =>
        reversed ? reverseString(value.toString()) : value.toString();
      return (
        <div key={index}>
          <p>
            {format(entry.candidate)} = {format(entry.votes)}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <button
          className="bg-slate-100 m-2 px-4 py-2"
          onClick={() => {
            setSelectedCategory("cities");
            setSelectedSubCategory(null);
          }}
        >
          City/Municipality
        </button>
        <button
          className="bg-slate-100 m-2 px-4 py-2"
          onClick={() => {
            setSelectedCategory("provinces");
            setSelectedSubCategory(null);
          }}
        >
          Province
        </button>
        <button
          className="bg-slate-100 m-2 px-4 py-2"
          onClick={() => {
            setSelectedCategory("regions");
            setSelectedSubCategory(null);
          }}
        >
          Region
        </button>
        <button
          className="bg-slate-100 m-2 px-4 py-2"
          onClick={() => {
            setSelectedCategory("groupIsland");
            setSelectedSubCategory(null);
          }}
        >
          Group/Island
        </button>
        <button
          className="bg-slate-100 m-2 px-4 py-2"
          onClick={() => {
            setSelectedCategory("country");
            setSelectedSubCategory(null);
          }}
        >
          Country
        </button>
      </div>
      {selectedCategory !== "country" && (
        <div>
          <h4>Select a subcategory:</h4>
          {Object.keys(sampleData[selectedCategory]).map((subCategory) => (
            <button
              className="bg-slate-200 m-2 px-4 py-2"
              key={subCategory}
              onClick={() => setSelectedSubCategory(subCategory)}
            >
              {subCategory}
            </button>
          ))}
        </div>
      )}
      <div>
        <button className="bg-slate-400 m-2 px-4 py-2" onClick={handleReverse}>
          {reversed ? "Reverse again" : "Reverse"}
        </button>
      </div>
      <div>{displayResults()}</div>
    </div>
  );
};

export default App;
