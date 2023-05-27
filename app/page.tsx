"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MouseFollowAnimation() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const boxRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (event: any) => {
			setMousePos({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		gsap.to(boxRef.current, {
			x: mousePos.x,
			y: mousePos.y,
			duration: 0.6,
		});
	}, [mousePos]);

	return (
		<>
			<div
				ref={boxRef}
				className="-z-50 w-32 h-32 rounded-full box absolute -translate-x-2/4 -translate-y-2/4 bg-blue-300 blur-3xl"></div>
			<div className="absolute flex w-full h-full justify-center items-center">
				<h1 className="relative font-semibold text-8xl text-black selection:text-white">
					Ciao Mondo
					<span className="text-stroke">Ciao Mondo</span>
				</h1>
			</div>
		</>
	);
}
