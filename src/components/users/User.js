import React, { useEffect, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import RepoList from "../repos/RepoList";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    login,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    public_repos,
    public_gists,
    followers,
    following,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>

      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="avatar"
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <b>Username: </b> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <b>Company </b> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <b>Website: </b> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>

        <div className="badge badge-danger">Gists: {public_gists}</div>
        <div className="badge badge-dark">Repos: {public_repos}</div>
      </div>

      <RepoList repos={repos} />
    </Fragment>
  );
};

export default User;
