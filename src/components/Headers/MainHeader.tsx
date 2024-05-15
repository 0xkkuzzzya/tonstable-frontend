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
    width: 50px;
    height: 50px;
    border-radius: 50px;
`


export const MainHeader = () => {
    return (
        <Header>
            <ContainerLogo>
                <Logo src={TonStable} />
                <h2 style={{ marginLeft: "1rem", color: "#fff" }}>Tonstable</h2>
            </ContainerLogo>
            <TonConnectButton />
        </Header>
    )
}