import styled from "styled-components";
import TonStable from '../../assets/tonstableLogo.jpg'
import { TonConnectButton } from "@tonconnect/ui-react";

const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`


export const MainHeader = () => {
    return(
        <Header>
            <Logo src={TonStable}/>
            <TonConnectButton />
        </Header>
    )
}