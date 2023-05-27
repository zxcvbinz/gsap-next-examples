"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HomePage() {
	const textRef = useRef<any>([]);

	useEffect(() => {
		const halfX = window.innerWidth / 2;
		const halfY = window.innerHeight / 2;

		const handleMouseMove = (e: any) => {
			textRef.current.forEach((el: any, i: any) => {
				gsap.to(el, {
					duration: 0.5,
					x: (e.clientX - halfX) * (i + 1) * 0.02,
					y: (e.clientY - halfY) * (i + 1) * 0.02,
				});
			});
		};

		document.addEventListener("mousemove", handleMouseMove);

		// Cleanup on unmount
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="h-screen flex justify-center items-center overflow-hidden bg-blue-600">
			<div className="relative perspective-100 uppercase">
				{Array.from({ length: 15 }, (_, i) => (
					<h1
						ref={(el) => (textRef.current[i] = el)}
						style={{
							WebkitTextStrokeWidth: "1px",
							WebkitTextStrokeColor: "white",
						}}
						className={`absolute top-0 left-0 text-blue-500 text-9xl font-bold transform-style-preserve-3d ${
							i === 0 && "relative"
						}`}
						key={i}>
						Perspective
					</h1>
				))}
			</div>
		</div>
	);
}
