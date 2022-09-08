import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroBackgroundImage, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const HeroCats = () => {
	return (
		<HeroSection>
			<HeroBackgroundImage src='./assets/png/horses.png' alt='pets' />
			<Container>
				<MainHeading>Horses Care</MainHeading>
				<HeroText>
					Comprehensive tips for pet parents of horses.
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
