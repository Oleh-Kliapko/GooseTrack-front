import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const DayContainer = styled.div`
 width: 100%;
 height: 100%;
 border: 1px solid rgba(220, 227, 229, 0.8);
 position: relative;
 min-height: 94px;

 @media screen and (min-width: ${({theme}) => (theme.breakpoints.m)}) {
        min-height: 144px;
    }

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.l)}) {
        min-height: 125px;
    }
`;

export const NumberContainer = styled.div`
    position: absolute;
    top: 8px;
    right: 4px;
    background: ${({picked}) => picked ? ('#3E85F3') : ('#FFFFFF')};
    border-radius: 8px;
    padding: 4px 8px;

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.m)}) {
        top: 18px;
        right: 22px;
    }

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.l)}) {
        top: 14px;
        right: 14px;
    }
`;

export const Number = styled.p`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: ${({picked}) => picked ? ('#FFFFFF') : ('#343434')};

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.m)}) {
        font-size: 18px;
        line-height: 22px;
    }

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.l)}) {
        font-size: 16px;
        line-height: 18px;
    }
`;

export const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
`;

export const OverflowContainer = styled.div`
    width: 100%;
    height: 72px;
    position: absolute;
    top: 48px;
    overflow: scroll;
    ::-webkit-scrollbar { width: 0; }
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    @media screen and (min-width: ${({theme}) => (theme.breakpoints.m)}) {
        height: 125px;
        top: 58px;
    }

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.l)}) {
        height: 100px;
    }   
    
`;

export const TasksContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const TaskButton = styled.button`
    margin: 2px;
    height: 22px;
    padding:  4px 4px 4px 8px; 
    display: flex ;
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    text-align: start;
    border-radius: 8px;
    background-color: ${({priority}) => {
        switch (priority) {
            case 'low':
                return '#CEEEFD';
            case 'medium':
                return '#FCF0D4';
            case 'high':
                return '#FFD2DD';
            default:
                return '#CEEEFD';
        }
    }};
    //overflow: hidden;
    ::-webkit-scrollbar { width: 0; }
    color: ${({priority}) => {
        switch (priority) {
            case 'low':
                return '#3E85F3';
            case 'medium':
                return '#F3B249';
            case 'high':
                return '#EA3D65';
            default:
                return '#3E85F3';
        }
    }};
    @media screen and (min-width: ${({theme}) => (theme.breakpoints.m)}) {
        margin-left: 4px;
        margin-right: 4px;
    }

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.l)}) {
        margin-left: 8px;
        margin-right: 8px;
    } 

    :hover {
        scale: 1.1;
    }
`;

export const ButtonTextContainer = styled.div`
    display: flex;
    overflow: hidden;
    height: 100%;  
`;

export const ButtonText = styled.p`
    white-space: nowrap;
`;

export const ButtonDots = styled.div`
    display: ${({length})=> {
        if(length<6) {
            return 'none'
        };
        return 'block'
    }};

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.m)}) {
        display: ${({length})=> {
            if(length<10) {
                return 'none'
            };
            return 'block'
        }};
    }

    @media screen and (min-width: ${({theme}) => (theme.breakpoints.l)}) {
        display: ${({length})=> {
            if(length<18) {
                return 'none'
            };
            return 'block'
        }};
    } 
`;