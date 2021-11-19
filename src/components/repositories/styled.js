import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 1.5em;
    width: 100%;
    margin-top:16px;

`;
WrapperTabs.tabsRole= "Tabs";

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin:0;
`;

WrapperTabList.tabsRole= "TabList";

export const WrapperTab = styled(Tab)`

    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    background-color: white;
    margin: 8px;

    &:focus {
        outline: none;

    }
    &:hover {
        background-color: black;
        color: white;
    }
    &.is-selected{
        box-shadow: 5px 3px 8px rgba(0,0,0,0.2);
    }


`;
WrapperTab.tabsRole= "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border:1px solid #ccc;
    display: none;
    margin-top: 10px;

    &.is-selected{
        display: block;
    }

`;
WrapperTabPanel.tabsRole= "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;



