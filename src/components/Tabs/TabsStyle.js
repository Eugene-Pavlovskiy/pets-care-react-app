import styled from 'styled-components';

export const TabsSection = styled.div`
	padding: 4rem 0 2rem 0;
`;
export const Tab = styled.div`
  width: 80%;
  height: 60vh;
  position: relative;
  margin: 60px auto;
  overflow: hidden;
`;
export const BtnBox = styled.div`
  display: flex;
  border-bottom: 2px solid var(--greenlight);
  padding: 20px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(67, 80, 34, 0.21);
  -moz-box-shadow: 0px 0px 10px 5px rgba(67, 80, 34, 0.21);
  box-shadow: 0px 0px 10px 5px rgba(67, 80, 34, 0.21);
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  margin-right: 50px;
  font-size: 20px;
  font-weight: bold;
`;
export const Img = styled.img`
  width: 20px;
  margin: 10px;
`;
export const Content1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  position: absolute;
  transform: translateX(110%);
  transition: 0.3s;
`;
export const Content2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  position: absolute;
  transform: translateX(110%);
  transition: 0.3s;
`;
export const Content3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% auto;
  position: absolute;
  transform: translateX(110%);
  transition: 0.3s;
`;
export const ContentLeft = styled.div`
flex-basis: 50%;
margin-right: 30px;
`;
export const ContentRight = styled.div`
flex-basis: 50%;
text-align: right;
`;
export const ImgRight = styled.img`
  width: 90%;
  border-radius: 10px;
`;
