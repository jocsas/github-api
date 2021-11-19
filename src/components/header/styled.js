import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 3em;

    input{
        border: 2px solid #c44536;
        width: 100%;
        border-radius: 10px;
        padding: 8px;
        height: 3em;
    }

    button {
        background-color: #772e25;
        border: 2px solid #ccc;
        color: white;
        font-weight:bold;
        padding: 8px 16px;
        margin: 0 1em;
        border-radius: 10px;
        
        &:hover{
            color: #772e25;
            background-color: white;
            border: 2px solid black;
        }
    }
    
`;