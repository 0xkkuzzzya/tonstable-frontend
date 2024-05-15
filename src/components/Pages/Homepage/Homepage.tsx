import styled from "styled-components";
import { HomepageLink } from "../../CustonLink/HomepageLink";
import { HomepageFooterDes, HomepageFooterMob } from "./Footer";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    @media (max-width: 800px) {
        width: 80%;
    }
    @media (max-width: 600px) {
        width: 100%;
        margin-top: 20px;
    }
`

const LinkContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    background: #1b1b1b;
    border-radius: 15px;
    margin-top: 40px;
    @media (max-width: 600px) {
        margin-top: 20px;
    }
`

const PageName = styled.h3`
    color: #fff;
    font-weight: 500;
    margin-left: 20px;
`

const PageDescription = styled.h4`
    color: #fff;
    font-weight: 400;
    margin: 0;
    margin-left: 20px;
    color: #b9b9b9;
`


export const Homepage = () => {

    const isDes = useMediaQuery({
        query: "(min-device-width: 500px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 500px)",
    });

    return (
        <Container>
            <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "30px", fontWeight: "500" }}>Do more with your jettons</h2>
            <LinkContainer style={{ marginTop: "0px" }}>
                <HomepageLink to="/manage">
                    <PageName>Manage Position</PageName>
                    <PageDescription>Mint or burn jUSD on your condition</PageDescription>
                </HomepageLink>
            </LinkContainer>
            <LinkContainer>
                <HomepageLink to="/stableswap">
                    <PageName>Stableswap</PageName>
                    <PageDescription>Mint or burn jUSD on your condition</PageDescription>
                </HomepageLink>
            </LinkContainer>
            <LinkContainer>
                <HomepageLink to="/auctions">
                    <PageName>Auctions</PageName>
                    <PageDescription>Bid jUSD on liquidated position</PageDescription>
                </HomepageLink>
            </LinkContainer>
            <h2 style={{ color: "#fff", textAlign: "center", margin: "30px 0px", fontWeight: "500" }}>Join our community</h2>
            {isDes && <HomepageFooterDes />}
            {isMob && <HomepageFooterMob />}
        </Container>
    )
}