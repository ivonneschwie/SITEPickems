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

	const renderer = ({ days, hours, minutes, completed }) => {
		if (completed) {
			return <div className="cd"> 00:00:00 </div>;
		} else {
			// Render a countdown
			return (
				<div className="cd">
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
								<Countdown
									date={question.date}
									renderer={renderer}
								/>
								<br></br>
								{question.text}
							</Form.Label>
							<input
								type="text"
								className="textInput"
								category={question.category}
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
