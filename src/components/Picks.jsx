import { React, useEffect, useState } from "react";
import "./components.css";
import { Dropdown } from "react-bootstrap";
import Countdown from "react-countdown";

import ml_logo from "../assets/ml/ml_logo.png";
import mlteam1_img from "../assets/ml/ml_team1.png";
import mlteam2_img from "../assets/ml/ml_team2.png";
import mlteam3_img from "../assets/ml/ml_team3.png";
import mlteam4_img from "../assets/ml/ml_team4.png";

import codm_logo from "../assets/codm/codm_logo.png";
import codmteam1_img from "../assets/codm/codm_team1.png";
import codmteam2_img from "../assets/codm/codm_team2.png";
import codmteam3_img from "../assets/codm/codm_team3.png";
import codmteam4_img from "../assets/codm/codm_team4.png";

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

function Picks(props) {
	const [mlcategory, setmlcategory] = useState("Semi-Finals");
	const [mlsemis1, setmlsemis1] = useState([]);
	const [mlsemis2, setmlsemis2] = useState([]);
	const [mlfinals, setmlfinals] = useState([]);

	const [codcategory, setcodcategory] = useState("Semi-Finals");
	const [codsemis1, setcodsemis1] = useState([]);
	const [codsemis2, setcodsemis2] = useState([]);
	const [codfinals, setcodfinals] = useState([]);

	const [msitem, setmsitem] = useState([]);
	const [msitef, setmsitef] = useState([]);

	const msitem_imgs = [
		[msitem01, "Renzcell Loresco"],
		[msitem02, "Jholichi Tempra"],
		[msitem03, "Denmarc Angeles"],
		[msitem04, "Jericho Villamor"],
		[msitem05, "Ralph Comlumbres"],
		[msitem06, "Ronald Reyes Jr."],
		[msitem07, "Jofrey Acosta"],
		[msitem08, "Marlo Mendoza"],
	];

	const msitef_imgs = [
		[msitef01, "Samantha Aquino"],
		[msitef02, "Kate Dispo"],
		[msitef03, "Jewell Silaran"],
		[msitef04, "Andrea Dela Cruz"],
		[msitef05, "Angeline Zarate"],
		[msitef06, "Iya Lomibao"],
		[msitef07, "Kathleen Quinto"],
	];

	useEffect(() => {
		setmlsemis1(props.pick.mlsemis1);
		setmlsemis2(props.pick.mlsemis2);
		setmlfinals(props.pick.mlfinals);

		setcodsemis1(props.pick.codsemis1);
		setcodsemis2(props.pick.codsemis2);
		setcodfinals(props.pick.codfinals);

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

	return (
		<>
			<div style={{ color: "white" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "10px",
					}}
				>
					<h6
						style={{
							margin: "0px 30px 0px 30px",
							textAlign: "center",
						}}
					>
						pick your victors and walk the path of glory!
					</h6>
				</div>
				<hr
					style={{
						color: "white",
						backgroundColor: "white",
						height: "2px",
					}}
				></hr>
				<div className="categorylabel">
					<img
						src={ml_logo}
						className="img"
						style={{ width: "50vw", maxHeight: "100px" }}
					></img>
				</div>
				<br></br>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Dropdown data-bs-theme="dark" style={{ margin: "30px" }}>
						<Dropdown.Toggle
							id="dropdown-basic"
							variant="dark"
							style={{
								borderRadius: "20px",
								padding: "15px",
								width: "200px",
							}}
						>
							{mlcategory}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() => {
									setmlcategory("Semi-Finals");
								}}
							>
								Semi-Finals
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => {
									setmlcategory("Finals");
								}}
							>
								Finals
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					{mlcategory == "Semi-Finals" && (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<div className="gamesDiv">
								<h2
									style={{
										letterSpacing: "5px",
									}}
								>
									MATCH 23
								</h2>
							</div>
							<div>
								<Countdown
									date={"2024-11-25T12:30:00"}
									renderer={renderer}
								/>
							</div>
							<div className="categorywrap" id="mobilelegends">
								<div
									className="mlTeamDiv"
									picked={
										mlsemis1 == "team1"
											? "picked"
											: "notpicked"
									}
									onClick={() => {
										setmlsemis1("team1");
										picked("mlsemis1", "team1");
									}}
								>
									<img
										src={mlteam1_img}
										className="img"
									></img>
								</div>
								<div
									className="mlTeamDiv"
									picked={
										mlsemis1 == "team2"
											? "picked"
											: "notpicked"
									}
									onClick={() => {
										setmlsemis1("team2");
										picked("mlsemis1", "team2");
									}}
								>
									<img
										src={mlteam2_img}
										className="img"
									></img>
								</div>
							</div>
							<div className="gamesDiv">
								<h2
									style={{
										letterSpacing: "5px",
									}}
								>
									MATCH 24
								</h2>
							</div>

							<div>
								<Countdown
									date={"2024-11-25T12:30:00"}
									renderer={renderer}
								/>
							</div>
							<div className="categorywrap" id="mobilelegends">
								<div
									className="mlTeamDiv"
									picked={
										mlsemis2 == "team3"
											? "picked"
											: "notpicked"
									}
									onClick={() => {
										setmlsemis2("team3");
										picked("mlsemis2", "team3");
									}}
								>
									<img
										src={mlteam3_img}
										className="img"
									></img>
								</div>
								<div
									className="mlTeamDiv"
									picked={
										mlsemis2 == "team4"
											? "picked"
											: "notpicked"
									}
									onClick={() => {
										setmlsemis2("team4");
										picked("mlsemis2", "team4");
									}}
								>
									<img
										src={mlteam4_img}
										className="img"
									></img>
								</div>
							</div>
						</div>
					)}
					{mlcategory == "Finals" && (
						<div style={{ margin: "50px" }}>
							<h2>TBA</h2>
						</div>
					)}
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
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Dropdown data-bs-theme="dark" style={{ margin: "30px" }}>
						<Dropdown.Toggle
							id="dropdown-basic"
							variant="dark"
							style={{
								borderRadius: "20px",
								padding: "15px",
								width: "200px",
							}}
						>
							{codcategory}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() => {
									setcodcategory("Semi-Finals");
								}}
							>
								Semi-Finals
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => {
									setcodcategory("Finals");
								}}
							>
								Finals
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					{codcategory == "Semi-Finals" && (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<div className="gamesDiv">
								<h2
									style={{
										letterSpacing: "5px",
									}}
								>
									MATCH 6
								</h2>
							</div>

							<div>
								<Countdown
									date={"2024-11-25T12:30:00"}
									renderer={renderer}
								/>
							</div>
							<div className="categorywrap" id="callofduty">
								<div
									className="codTeamDiv"
									picked={
										codsemis1 == "team1"
											? "picked"
											: "notpicked"
									}
									onClick={() => {
										setcodsemis1("team1");
										picked("codsemis1", "team1");
									}}
									style={{ pointerEvents: "none" }}
								>
									<img
										src={codmteam1_img}
										className="img"
									></img>
								</div>
								<div
									className="codTeamDiv"
									picked={
										codsemis1 == "team2"
											? "picked"
											: "notpicked"
									}
									onClick={() => {
										setcodsemis1("team2");
										picked("codsemis1", "team2");
									}}
									style={{ pointerEvents: "none" }}
								>
									<img
										src={codmteam2_img}
										className="img"
									></img>
								</div>
							</div>
							<div className="gamesDiv">
								<h2
									style={{
										letterSpacing: "5px",
									}}
								>
									MATCH 7
								</h2>
							</div>

							<div>
								<Countdown
									date={"2024-11-25T16:00:00"}
									renderer={renderer}
								/>
							</div>
							<div className="categorywrap" id="callofduty">
								<div
									className="codTeamDiv"
									picked={
										codsemis2 == "team3"
											? "picked"
											: "notpicked"
									}
									onClick={() => {
										setcodsemis2("team3");
										picked("codsemis2", "team3");
									}}
								>
									<img
										src={codmteam3_img}
										className="img"
									></img>
								</div>
								<div
									className="codTeamDiv"
									picked={
										codsemis2 == "team4"
											? "picked"
											: "notpicked"
									}
									onClick={() => {
										setcodsemis2("team4");
										picked("codsemis2", "team4");
									}}
								>
									<img
										src={codmteam4_img}
										className="img"
									></img>
								</div>
							</div>
						</div>
					)}
					{codcategory == "Finals" && (
						<div style={{ margin: "50px" }}>
							<h2>TBA</h2>
						</div>
					)}
				</div>
				{rule()}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div className="categorylabel">
						<h1
							style={{
								letterSpacing: "5px",
							}}
						>
							Mr. SITE
						</h1>
					</div>
					<br></br>
					<div>
						<Countdown
							date={"2024-11-27T13:30:00"}
							renderer={renderer}
						/>
					</div>
					<div className="categorywrap" id="mr_site">
						{msitem_imgs.map((contestant) => (
							<div
								className="msitemDiv"
								picked={
									msitem == contestant[1]
										? "picked"
										: "notpicked"
								}
								onClick={() => {
									console.log(contestant[1]);
									setmsitem(contestant[1]);
									picked("msitem", contestant[1]);
								}}
								key={contestant[1] + "/div"}
							>
								<img
									src={contestant[0]}
									className="msite_img"
									key={contestant[1] + "/img"}
								></img>
								<h5 key={contestant[1] + "/name"}>
									{contestant[1]}
								</h5>
							</div>
						))}
					</div>
				</div>
				{rule()}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div className="categorylabel">
						<h1
							style={{
								letterSpacing: "5px",
							}}
						>
							Ms. SITE
						</h1>
					</div>
					<br></br>
					<div>
						<Countdown
							date={"2024-11-27T13:30:00"}
							renderer={renderer}
						/>
					</div>
					<div className="categorywrap" id="ms_site">
						{msitef_imgs.map((contestant) => (
							<div
								className="msitefDiv"
								picked={
									msitef == contestant[1]
										? "picked"
										: "notpicked"
								}
								onClick={() => {
									console.log(contestant[1]);
									setmsitef(contestant[1]);
									picked("msitef", contestant[1]);
								}}
								key={contestant[1] + "/div"}
							>
								<img
									src={contestant[0]}
									className="msite_img"
									key={contestant[1] + "/img"}
								></img>
								<h5 key={contestant[1] + "/name"}>
									{contestant[1]}
								</h5>
							</div>
						))}
					</div>
				</div>
				{rule()}
			</div>
		</>
	);
}

export default Picks;
