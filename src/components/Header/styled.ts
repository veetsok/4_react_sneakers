import styled from "styled-components";

export const header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid #eaeaea;
`;

export const img_block = styled.div`
  display: flex;
  align-items: center;
`;
export const image__block = styled.div`
  max-width: 205px;
  margin-left: 40px;
`;

export const span = styled.div`
  color: #000;
  margin: 0 40px;
`;

export const logo = styled.h3`
  text-transform: uppercase;
`;

export const subLogo = styled.p`
  opacity: 5;
`;

export const ul = styled.ul`
  display: flex;
  align-items: center;
`;

export const li = styled.li`
  margin-right: 30px;
  cursor: pointer;
  margin: 0 20px;
  & svg {
    width: 30px;
    height: 30px;
  }
`;

export const image__logo = styled.img`
  content: url("/img/logo.png");
  margin-right: 20px;
`;
