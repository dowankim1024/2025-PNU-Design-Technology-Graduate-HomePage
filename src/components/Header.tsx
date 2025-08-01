import styled from "styled-components";
import logo from "@/assets/logo.jpg";

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="logo" />
            <ContentWrapper>
                <Content>ABOUT</Content>
                <Content>DESIGNERS</Content>
                <Content>TEAM PROJECT</Content>
                <Content>VISITOR'S BOOK</Content>
            </ContentWrapper>
            <MobileMenu>
                <span></span>
                <span></span>
                <span></span>
            </MobileMenu>
        </HeaderContainer>
    )
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 6.25vw; /* 120px / 1920px * 100 = 6.25% */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    z-index: 1000;
    border-bottom: 1px solid #C5C5C5;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        height: 60px;
        padding: 0 20px;
    }
`;
const Logo = styled.img`
    width: 5.2vw; /* 100px / 1920px * 100 = 5.2% */
    height: 3.33vw; /* 64px / 1920px * 100 = 3.33% */
    margin-left: 5.2vw; /* 100px / 1920px * 100 = 5.2% */
    
    @media (max-width: 768px) {
        width: 40px;
        height: 25px;
        margin-left: 0;
    }
`;
const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5.2vw; /* 100px / 1920px * 100 = 5.2% */
    margin-right: 5.2vw; /* 100px / 1920px * 100 = 5.2% */
    
    @media (max-width: 768px) {
        gap: 20px;
        margin-right: 0;
        display: none; /* 모바일에서는 메뉴 숨김 */
    }
`;

const Content = styled.div`
    color: #080404;
    opacity: 0.5;
    font-size: 1.04vw; /* 20px / 1920px * 100 = 1.04% */
    font-family: Pretendard;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0;
    font-style: Regular;
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const MobileMenu = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
        
        span {
            width: 20px;
            height: 2px;
            background-color: #080404;
        }
    }   
`;
