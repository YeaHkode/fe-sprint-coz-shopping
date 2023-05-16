"use client";
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  p {
    text-align: center;
    color: lightgray;
  }
  border-top: 1px solid lightgray;
  padding: 15px;
`;

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <p>개인정보 처리방침 | 이용 약관</p>
        <p>All rights reserved @ Codestates</p>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
