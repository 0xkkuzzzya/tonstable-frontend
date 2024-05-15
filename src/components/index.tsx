import styled from "styled-components";
import { MainHeader } from "./Headers/MainHeader";
import { Routes, Route } from 'react-router-dom';
import { Homepage } from "./Pages/Homepage/Homepage";
import { ManagePosition } from "./Pages/ManagePosition/ManagePosition";
import { Stableswap } from "./Pages/Stableswap/Stableswap";
import { Auctions } from "./Pages/Auctions/Auctions";

const Container = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
        width: 90%;
    }
`


export const MainIndex = () => {
    return (
        <Container>
            <MainHeader />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/manage" element={<ManagePosition />} />
                <Route path="/stableswap" element={<Stableswap />} />
                <Route path="/auctions" element={<Auctions />} />
            </Routes>
        </Container>
    )
}