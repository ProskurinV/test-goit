import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  max-width: 380px;
  max-height: 460px;

  padding-top: 28px;
  padding-right: 36px;
  padding-left: 36px;
  padding-bottom: 36px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Picture = styled.img`
  position: relative;

  left: 50%;
  transform: translateX(-50%);

  margin-bottom: 81px;
`;

export const Border = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  top: 214px;
  left: 0px;
  transform: translateY(-50%);
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const FrameImg = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  transform: translateX(-50%);
  top: 180px;

  border-radius: 50%;
  z-index: 2;
`;

export const Twitts = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;

  margin-bottom: 16px;
`;

export const Followers = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;

  margin-bottom: 26px;
`;

export const Button = styled.button`
  display: block;
  width: 194px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  background: ${props => {
    return props.isFollow ? '#5CD3A8' : '#EBD8FF';
  }};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  :hover {
    background: #5cd3a8;
  }
`;
