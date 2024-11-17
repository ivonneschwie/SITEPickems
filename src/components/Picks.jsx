import { React, useEffect, useState } from "react";
import "./components.css";
import ml_logo from "../assets/ml/ml_logo.png";
import mlteam1_img from "../assets/ml/ml_team1.png";
import mlteam2_img from "../assets/ml/ml_team2.png";

import codm_logo from "../assets/codm/codm_logo.png";
import codmteam1_img from "../assets/codm/codm_team1.png";
import codmteam2_img from "../assets/codm/codm_team2.png";

import msitem01 from "../assets/msitem/msitem_01.png";
import msitem02 from "../assets/msitem/msitem_02.png";
import msitem03 from "../assets/msitem/msitem_03.png";
import msitem04 from "../assets/msitem/msitem_04.png";
import msitem05 from "../assets/msitem/msitem_05.png";
import msitem06 from "../assets/msitem/msitem_06.png";
import msitem07 from "../assets/msitem/msitem_07.png";
import msitem08 from "../assets/msitem/msitem_08.png";

import msitef01 from "../assets/msitef/msitef_01.png";
import msitef02 from "../assets/msitef/msitef_02.png";
import msitef03 from "../assets/msitef/msitef_03.png";
import msitef04 from "../assets/msitef/msitef_04.png";
import msitef05 from "../assets/msitef/msitef_05.png";
import msitef06 from "../assets/msitef/msitef_06.png";
import msitef07 from "../assets/msitef/msitef_07.png";
import msitef08 from "../assets/msitef/msitef_08.png";

function Picks(props) {
	const [ml, setml] = useState([]);
	const [cod, setcod] = useState([]);
	const [sgt, setsgt] = useState([]);
	const [msitem, setmsitem] = useState([]);
	const [msitef, setmsitef] = useState([]);

	const msitem_imgs = [
		[msitem01, "name1", "block1"],
		[msitem02, "name2", "block2"],
		[msitem03, "name3", "block3"],
		[msitem04, "name4", "block4"],
		[msitem05, "name5", "block5"],
		[msitem06, "name6", "block6"],
		[msitem07, "name7", "block7"],
		[msitem08, "name8", "block8"],
	];

	const msitef_imgs = [
		[msitef01, "name1", "block1"],
		[msitef02, "name2", "block2"],
		[msitef03, "name3", "block3"],
		[msitef04, "name4", "block4"],
		[msitef05, "name5", "block5"],
		[msitef06, "name6", "block6"],
		[msitef07, "name7", "block7"],
		[msitef08, "name8", "block8"],
	];

	useEffect(() => {
		setml(props.pick.ml);
		setcod(props.pick.cod);
		setsgt(props.pick.sgt);
		setmsitem(props.pick.msitem);
		setmsitef(props.pick.msitef);
	});

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

	const picked = (category, val) => {
		props.pushpick(category, val);
		console.log(category + ": " + val);
	};

	return (
		<>
			<div style={{ color: "white" }}>
				<div className="categorylabel">
					<img
						src={ml_logo}
						className="img"
						style={{ width: "50vw", maxHeight: "100px" }}
					></img>
				</div>
				<br></br>
				<div className="categorywrap" id="mobilelegends">
					<div
						className="mlTeamDiv"
						picked={ml == "team1" ? "picked" : "notpicked"}
					>
						<img
							src={mlteam1_img}
							className="img"
							onClick={() => {
								setml("team1");
								picked("ml", "team1");
							}}
						></img>
					</div>
					<div
						className="mlTeamDiv"
						picked={ml == "team2" ? "picked" : "notpicked"}
					>
						<img
							src={mlteam2_img}
							className="img"
							onClick={() => {
								setml("team2");
								picked("ml", "team2");
							}}
						></img>
					</div>
				</div>
				{rule()}
				<div className="categorylabel">
					<img
						src={codm_logo}
						className="img"
						style={{ width: "50vw", maxHeight: "100px" }}
					></img>
				</div>
				<br></br>
				<div className="categorywrap" id="callofduty">
					<div
						className="codTeamDiv"
						picked={cod == "team1" ? "picked" : "notpicked"}
					>
						<img
							src={codmteam1_img}
							className="img"
							onClick={() => {
								setcod("team1");
								picked("cod", "team1");
							}}
						></img>
					</div>
					<div
						className="codTeamDiv"
						picked={cod == "team2" ? "picked" : "notpicked"}
					>
						<img
							src={codmteam2_img}
							className="img"
							onClick={() => {
								setcod("team2");
								picked("cod", "team2");
							}}
						></img>
					</div>
				</div>
				{rule()}

				<div className="categorylabel">
					<h2>Mr. SITE</h2>
				</div>
				<br></br>
				<div className="categorywrap" id="mr_site">
					{msitem_imgs.map((contestant) => (
						<div
							className="msiteDiv"
							picked={
								msitem == contestant[1] ? "picked" : "notpicked"
							}
						>
							<img
								src={contestant[0]}
								className="msite_img"
								onClick={() => {
									console.log(contestant[1]);
									setmsitem(contestant[1]);
									picked("msitem", contestant[1]);
								}}
							></img>
							<h5>{contestant[1]}</h5>
							<h6>{contestant[2]}</h6>
						</div>
					))}
				</div>
				{rule()}

				<div className="categorylabel">
					<h2>Ms. SITE</h2>
				</div>
				<br></br>
				<div className="categorywrap" id="ms_site">
					{msitem_imgs.map((contestant) => (
						<div
							className="msiteDiv"
							picked={
								msitef == contestant[1] ? "picked" : "notpicked"
							}
						>
							<img
								src={contestant[0]}
								className="msite_img"
								onClick={() => {
									console.log(contestant[1]);
									setmsitef(contestant[1]);
									picked("msitef", contestant[1]);
								}}
							></img>
							<h5>{contestant[1]}</h5>
							<h6>{contestant[2]}</h6>
						</div>
					))}
				</div>
				{rule()}
			</div>
		</>
	);
}

export default Picks;
