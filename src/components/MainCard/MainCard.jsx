import React, { useState, useEffect } from 'react';
import {
  Container,
  LogoImage,
  Picture,
  Border,
  FrameImg,
  Twitts,
  Followers,
  Button,
} from './MainCard.styled';
import logo from '../../images/logo.svg';
import picture from '../../images/picture.png';
import boy from '../../images/Boy.png';

export const MainCard = () => {
  const [isFollow, setIsFollow] = useState(false);
  const [followers, setFollowers] = useState(100500);

  useEffect(() => {
    localStorage.setItem('followersCount', followers.toString());
  }, [followers]);

  const handleClick = () => {
    if (isFollow) {
      setIsFollow(false);
      setFollowers(followers - 1);
    } else {
      setIsFollow(true);
      setFollowers(followers + 1);
    }
  };

  return (
    <>
      <Container>
        <LogoImage src={logo} alt="logo" />
        <Picture src={picture} alt="backgroundImage" />
        <FrameImg src={boy} alt="user" />
        <Border />
        <Twitts>777 tweets</Twitts>
        <Followers>{followers.toLocaleString()} Followers</Followers>
        <Button type="button" onClick={handleClick} isFollow={isFollow}>
          {isFollow ? 'Following' : 'Follow'}
        </Button>
      </Container>
    </>
  );
};
