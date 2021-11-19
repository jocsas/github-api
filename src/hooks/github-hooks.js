import { useContext } from "react";
import { GithubContext } from "../providers/github.provider";

const useGitHub = () =>{

    const { gitHubState, getUser, getUserRepos, getUserStarred} = useContext( GithubContext);

    return { gitHubState, getUser, getUserRepos, getUserStarred};
};

export default useGitHub