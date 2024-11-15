import React, { useState, useEffect } from "react";
import "./components.css";
import { Form } from "react-bootstrap";
import Countdown from "react-countdown";
import moment from "moment";

function Category(props) {
	const category = props.category;
	const label = props.label;
	const pick = props.pick;

	const rule = () => {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<hr
					style={{
						color: "white",
						backgroundColor: "white",
						height: "2px",
						width: "95vw",
					}}
				></hr>
			</div>
		);
	};

	const putCountdown = (date) => {
		if (!isLocked(date)) {
			return <Countdown date={date} renderer={renderer} />;
		} else {
			return <div className="countdown">00:00:00</div>;
		}
	};

	const renderer = ({ days, hours, minutes, completed }) => {
		if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {
			// Render a countdown
			return (
				<div className="countdown">
					{days < 10 ? "0" + days : days}:
					{hours < 10 ? "0" + hours : hours}:
					{minutes < 10 ? "0" + minutes : minutes}
				</div>
			);
		}
	};

	const isLocked = (date) => {
		return moment().isAfter(moment(date));
	};

	return (
		<>
			<Form.Label className="categorylabel">
				<h2>{label}</h2>
			</Form.Label>
			<div className="categorywrap">
				{category.map((question) => (
					<div className="questiondiv">
						<Form.Group className="mb-3" controlId={question.name}>
							<Form.Label className="questionContent">
								{putCountdown(question.date)}
								<br></br>
								{question.text}
							</Form.Label>
							<input
								type="text"
								className="textInput"
								name={question.name}
								defaultValue={pick[question.name]}
								disabled={isLocked(question.date)}
							/>
						</Form.Group>
					</div>
				))}
			</div>
			{rule()}
		</>
	);
}

export default Category;
