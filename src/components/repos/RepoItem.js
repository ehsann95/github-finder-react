import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div>
      <h3 className="my-1">
        <a href={repo.html_url}>{repo.name} </a>
      </h3>
    </div>
  );
};

RepoItem.propTtpes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
