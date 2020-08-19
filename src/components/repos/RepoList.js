import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const RepoList = ({ repos }) => {
  return (
    <div className="card">
      <h2>Repos</h2>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
