import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`

const FooterLinkContainer = styled.div`
    width: 200px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #262626;
    border-radius: 30px;
    margin-top: 10px;
`

const FooterLink = styled.a`
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    text-decoration: none;
`


export const HomepageFooterDes = () => {
    return (
        <>
            <FooterContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Telegram News (EN)</FooterLink>
                </FooterLinkContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Telegram Chat (EN)</FooterLink>
                </FooterLinkContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Telegram News (RU)</FooterLink>
                </FooterLinkContainer>
            </FooterContainer>
            <FooterContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">X (Twitter)</FooterLink>
                </FooterLinkContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Docs</FooterLink>
                </FooterLinkContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Telegram Chat (RU)</FooterLink>
                </FooterLinkContainer>
            </FooterContainer>
        </>
    )
}

export const HomepageFooterMob = () => {
    return (
        <div>
            <FooterContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Telegram News (EN)</FooterLink>
                </FooterLinkContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">X (Twitter)</FooterLink>
                </FooterLinkContainer>
            </FooterContainer>
            <FooterContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Telegram Chat (EN)</FooterLink>
                </FooterLinkContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Docs</FooterLink>
                </FooterLinkContainer>
            </FooterContainer>
            <FooterContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Telegram News (RU)</FooterLink>
                </FooterLinkContainer>
                <FooterLinkContainer>
                    <FooterLink href="https://t.me/tonlink_en" target="_blank">Telegram Chat (RU)</FooterLink>
                </FooterLinkContainer>
            </FooterContainer>
        </div>
    )
}