import React, { useRef, useState } from "react";
import "./Dictonary.css";
import { FaSearch } from "react-icons/fa";
const Dictonary = () => {
  const [Dictonarydata, setDictonarydata] = useState({});
  const InputSearch = useRef();
  const search = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(url);
    const data = await response.json();

    setDictonarydata({
      word: data[0].word,
      phonetics: data[0].phonetics[0].text,
      class: data[0].meanings[0].partOfSpeech,
      meaning: data[0].meanings[0].definitions[0].definition,
    });
  };

  return (
    <div className="dictonary bg-white  p-5">
      <h1 className="dictonary-title mb-3 fw-bold">Dictonary App</h1>{" "}
      <div className="searchbar ms-3 ">
        <input
          type="text"
          placeholder="Search for a word"
          className="p-2"
          ref={InputSearch}
        />
        <div
          className="seacrh-icon p-2 pt-3 fs-5"
          onClick={() => {
            search(InputSearch.current.value);
          }}
        >
          <FaSearch />
        </div>
      </div>
      <h1 className="text-center mt-5 fw-bold display-2">
        {Dictonarydata.word}
      </h1>
      <div className="class-phonetic mt-5">
        <div className="class">
          <h5 className="fw-bold">Class</h5>
          <p>{Dictonarydata.class}</p>
        </div>
        <div className="phonetic">
          <h5 className="fw-bold">Phonetic</h5>
          <p>{Dictonarydata.phonetics}</p>
        </div>
      </div>
      <div className="defination mt-4">
        <h5 className="fw-bold">Meaning</h5>
        <p>{Dictonarydata.meaning}</p>
      </div>
    </div>
  );
};

export default Dictonary;
