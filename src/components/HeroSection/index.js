import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Virtual Banking Made Eazy</HeroH1>
				<HeroP>Sign up for a new account today and recive $250 in credit towards your next payment.</HeroP>
				<HeroBtnWrapper>
					<Button onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" to="signup">
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
