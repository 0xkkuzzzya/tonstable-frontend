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

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
`

const HeaderText = styled.a`
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    margin-left: 10px;
`


export const MainHeader = () => {
    return (
        <Header>
            <ContainerLogo>
                <Logo src={TonStable} />
                <HeaderText>Tonstable</HeaderText>
            </ContainerLogo>
            <TonConnectButton />
        </Header>
    )
}