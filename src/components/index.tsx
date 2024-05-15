import styled from "styled-components";
import { MainHeader } from "./Headers/MainHeader";

const Container = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;
`


export const MainIndex = () => {
    return(
        <Container>
            <MainHeader/>
        </Container>
    )
}