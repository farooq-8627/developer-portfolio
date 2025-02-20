"use client";
import dynamic from "next/dynamic";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationPath,
		style: {
			width: "95%",
		},
	};

	// Only render on client side
	if (typeof window === "undefined") {
		return null;
	}

	return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
