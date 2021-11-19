import React, {useEffect, useState} from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled"
import useGitHub from '../../hooks/github-hooks'

const Repositories = () =>{

    const { gitHubState, getUserRepos, getUserStarred} = useGitHub();
    const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false)

    useEffect(() => {
        if(gitHubState.user.login){
            getUserRepos(gitHubState.user.login);
            getUserStarred(gitHubState.user.login);
        }
        sethasUserForSearchRepos(gitHubState.repositories);
        
    }, [gitHubState.user.login])

    return (
    <>
        {hasUserForSearchRepos ? (

        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
            >
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    <S.WrapperList>
                {gitHubState.repositories.map((item) =>(
                        <RepositoryItem
                            key={item.id}
                            name={item.name}
                            linkToRepo={item.html_url}
                            fullName={item.full_name}
                        />

                    ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>
                
                <S.WrapperTabPanel>
                    <S.WrapperList>
                    {gitHubState.starred.map((item) =>(
                        <RepositoryItem
                            key={item.id}
                            name={item.name}
                            linkToRepo={item.html_url}
                            fullName={item.full_name}
                        />

                    ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>
        </S.WrapperTabs>
    ):(
    <></>
    )}
    </>
    );
};

export default Repositories;