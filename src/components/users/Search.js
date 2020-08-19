import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [searchText, setsearchText] = useState("");

  const onChange = (e) => {
    setsearchText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      alertContext.setAlert("x Please enter something", "danger");
    } else {
      githubContext.searchUser(searchText);
      setsearchText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="search"
          placeholder="Search Users..."
          value={searchText}
          onChange={onChange}
        />
        <input
          type="submit"
          value="SEARCH"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          CLEAR
        </button>
      )}
    </div>
  );
};

export default Search;
