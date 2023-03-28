import React, { useState, useEffect } from "react";

function BigButton(props) {
	const addSession = (username) => {
		fetch("/api/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(
				{
					username,
					date: new Date().toDateString(),
					startTime,
					endTime: currentTime,
					points: currentPoints
				}
			),
		})
			.then(res => res.json())
			.then(console.log)
			.catch(console.log)
	};

	const [isOutside, setIsOutside] = useState(false);
	const [startTime, setStartTime] = useState(Date.now());
	const [previousPoints, setPreviousPoints] = useState(0);
	const [currentPoints, setCurrentPoints] = useState(0);

	useEffect(() => {
		if (isOutside) {
			const interval = setInterval(() => {
				const currentTime = Date.now();
				const elapsedMinutes = (currentTime - startTime) / 60000;
				const points = previousPoints + props.uv * elapsedMinutes;
				setCurrentPoints(points);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [isOutside, startTime, previousPoints, props.uv]);

	const handleButtonClick = () => {
		if (isOutside) {
			const currentTime = Date.now();
			const elapsedMinutes = (currentTime - startTime) / 60000;
			const points = previousPoints + props.uv * elapsedMinutes;
			setPreviousPoints(points);
			setStartTime(null);
			addSession(props.username, points);
		} else {
			setStartTime(Date.now());
		}
		setIsOutside(!isOutside);
	};

	return (
		<div id="d-meter">
			<div>D-Meter: {currentPoints.toFixed(2)}%</div>
			<div id="progress-container">
				<div id="loading" style={{ width: `${currentPoints}%` }}></div>
			</div>
			<br />
			<button id="big-button" onClick={handleButtonClick}>
				{isOutside ? "YOU'RE OUTSIDE! GO INSIDE?" : "YOU'RE INSIDE! GO OUTSIDE?"}
			</button>
		</div>
	);
}

export default BigButton;
