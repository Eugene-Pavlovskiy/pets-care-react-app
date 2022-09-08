import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroBackgroundImage, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const HeroCats = () => {
	return (
		<HeroSection>
			<HeroBackgroundImage src='./assets/png/dogs.png' alt='pets' />
			<Container>
				<MainHeading>Dogs Care</MainHeading>
				<HeroText>
					Comprehensive tips for pet parents of dogs.
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default HeroCats;
