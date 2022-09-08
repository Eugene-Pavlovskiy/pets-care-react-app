import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroBackgroundImage, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const HeroCats = () => {
	return (
		<HeroSection>
			<HeroBackgroundImage src='./assets/png/cats.png' alt='pets' />
			<Container>
				<MainHeading>Cats Care</MainHeading>
				<HeroText>
					Comprehensive tips for pet parents of cats.
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
