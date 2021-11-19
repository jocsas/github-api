import React from "react";
import * as S from './styled';
import useGitHub from '../../hooks/github-hooks'

const Profile = () => {

    const { gitHubState } = useGitHub();


    return (
        <S.Wrapper>
            <S.WrapperImage src={gitHubState.user.avatar_url} alt="User picture" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{gitHubState.user.name}</h1>
                    <S.WrapperUserGlobal>
                        <h3>Username:</h3>
                        <a href={gitHubState.user.html_url} 
                        target='_blank' 
                        rel='noreferrer'
                        >{gitHubState.user.login}
                        </a>
                    </S.WrapperUserGlobal>
                    <S.WrapperUserGlobal>
                        <h3>Company:</h3>
                        <span>{gitHubState.user.company}
                        </span>
                    </S.WrapperUserGlobal>
                    <S.WrapperUserGlobal>
                        <h3>Location:</h3>
                        <span>{gitHubState.user.location}
                        </span>
                    </S.WrapperUserGlobal>
                    <S.WrapperUserGlobal>
                        <h3>Blog:</h3>
                        <a 
                            href={gitHubState.user.blog}
                            target='_blank'
                            rel='noreferrer'
                            >{gitHubState.user.blog}
                        </a>
                    </S.WrapperUserGlobal>

                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{gitHubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{gitHubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{gitHubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{gitHubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
};

export default Profile;