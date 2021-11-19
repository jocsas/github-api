import React, {useState}from "react";
import useGitHub from "../../hooks/github-hooks";
import * as S from './styled'

const Header = () =>{

    const {getUser} = useGitHub();
    const [usernameForSearch, setusernameForSearch] = useState()

    const submitGetUser= () =>{
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };
    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Type here a username to search..." onChange={(event) => setusernameForSearch(event.target.value)}/>
                <button type="submit" onClick={submitGetUser}>SEARCH</button>
            </S.Wrapper>
        </header>
    )
}

export default Header;