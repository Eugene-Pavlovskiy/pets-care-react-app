import React from 'react';
import { useState } from 'react';
import { Container, Section } from '../../globalStyles';
import { Link } from 'react-router-dom';
import {
  TabsSection,
  BtnBox,
  Button,
  Img,
  Content1,
  Content2,
  Content3,
  ContentLeft,
  ContentRight,
  ImgRight,
} from './TabsStyle';


const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };
  return (
    <Section>
      <Container>
        <TabsSection>
          <BtnBox>
            <Button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onclick={() => toggleTab(1)}>
              <Img src="../img/cat.png"></Img>
              Cat Care
            </Button>
            <Button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onclick={() => toggleTab(2)}>
              <Img src="./img/dogs.png"></Img>
              Dog Care
            </Button>
            <Button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onclick={() => toggleTab(3)}>
              <Img src="./img/horses.png"></Img>
              Horse Care
            </Button>
          </BtnBox>
          <Content1 className={toggleState === 1 ? "content active-content" : "content"}>
            <ContentLeft>
              <h1>Cat Care</h1>
              <p>
                Have you recently added a feline friend to your family?
                Congratulations! We know you will be thrilled to have your new
                cat in your home. If you are considering adopting a cat, please
                visit your local shelter. We encourage you to browse our
                directory of adoptable cats in your area, or use our shelter
                finder to start your search. Read on for useful tips for new cat
                parents, and for those looking to brush up on their pet care
                skills.
              </p>
              <Link href="#">Watch Video</Link>
            </ContentLeft>
            <ContentRight>
              <ImgRight
                src="https://source.unsplash.com/320x220/?cats"
                alt=""
              />
            </ContentRight>
          </Content1>

          <Content2 className={toggleState === 2 ? "content active-content" : "content"}>
            <ContentLeft>
              <h1>Dog Care</h1>
              <p>
                A dog can be a wonderful addition to any home, but whether
                you're an experienced pet parent or a first-time adopter, it's
                important to keep your canine companion's health and happiness a
                top priority. Below are some useful tips for all dog parents.
                And remember: If you're considering bringing home a new dog,
                please make adoption your first option. We encourage you to
                browse our directory of adoptable dogs in your area or visit our
                Find a Shelter page to start your search.
              </p>
              <Link href="#">Watch Video</Link>
            </ContentLeft>
            <ContentRight>
              <Img src="https://source.unsplash.com/320x220/?dogs" alt="" />
            </ContentRight>
          </Content2>

          <Content3 className={toggleState === 3 ? "content active-content" : "content"}>
            <ContentLeft>
              <h1>Horse Care</h1>
              <p>
                A horses digestive system is designed to digest frequent, small
                meals of roughage throughout the day. The basic diet for most
                horses should be grass and good-quality hay, free of dust and
                mold. Clean, unfrozen water should be available at all times
                along with a trace mineral/salt block.
              </p>
              <Link href="#">Watch Video</Link>
            </ContentLeft>
            <ContentRight>
              <Img src="https://source.unsplash.com/320x220/?horses" alt="" />
            </ContentRight>
          </Content3>
        </TabsSection>
      </Container>
    </Section>
  );
};

export default Tabs;
