import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;

`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div{
        margin: 8px;
        text-align: center;
    }

`;

export const WrapperUserGlobal = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3{
        margin-right: 8px;
    }
    a{
        color: blue;
        font-size: 1.2em;
    }

`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 150px;
    margin-left: 8px;
    h1{
        font-size: 2em;
        font-weight: bold;
        color: black;
    }

    h3,h4{
        font-size:1.3em;
        font-weight:bold;
        color: #283d3b;
    }

`;
export const WrapperImage = styled.img`
    border-radius:50%;
    box-shadow: 0px 0px 10px 1px black;
    width: 200px;
    margin: 10px;
`;