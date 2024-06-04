import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    width: 100%;
    height: 100%;
    display: flex;
    text-decoration: none;
    flex-direction: row;
`

interface Props {
    to: string;
    children: ReactNode;
}

export const HomepageLink = ({children, to}: Props) => {

    const match = useMatch(to)

    return(
        <LinkBLock 
        to={to}
        style={{
            color: match ? '#333' : '#333',
            transition: '.2s ease-in-out',
            width: '100%'
        }}
        >
            {children}
        </LinkBLock>
    )
}
