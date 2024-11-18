import React from "react";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import "./components.css";
import Edit from "./Edit";
import crown from "../assets/crown.png";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

function Header(props) {
	const [showEdit, setShowEdit] = useState(false);
	const handleClose = () => setShowEdit(false);
	const handleShowEdit = () => setShowEdit(true);
	return (
		<>
			<div className="Header">
				<h1
					style={{
						position: "absolute",
						paddingTop: 15,
						left: 15,
						color: "#DCE0DF",
						fontFamily: "Freshman",
						fontSize: "calc(12px + 1.8vw)",
					}}
				>
					<img src={crown} style={{ width: 80, height: 60 }} />
					SITE PICKEMS
				</h1>

				<Dropdown
					as={ButtonGroup}
					data-bs-theme="dark"
					style={{
						position: "relative",
						right: "20px",
					}}
				>
					<Button variant="dark" id="username" disabled>
						{props.displayName}
					</Button>

					<Dropdown.Toggle
						split
						variant="dark"
						id="dropdown-split-basic"
					/>

					<Dropdown.Menu style={{ textAlign: "center" }}>
						{props.admin && (
							<Dropdown.Item
								onClick={() => {
									handleShowEdit();
								}}
								variant="secondary"
							>
								Edit
							</Dropdown.Item>
						)}
						<Dropdown.Item
							onClick={props.Logout}
							variant="secondary"
						>
							Logout
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={showEdit}
				onHide={handleClose}
				dialogClassName="modal-width"
				contentClassName="modal-height"
			>
				<Modal.Header
					closeButton
					style={{ backgroundColor: "rgb(90, 90, 90)" }}
				>
					<Modal.Title>SITE Pickems</Modal.Title>
				</Modal.Header>
				<form onSubmit={props.updateQuestions}>
					<Modal.Body>
						<Edit
							esports={props.esports}
							sgt={props.sgt}
							msite={props.msite}
							misc={props.misc}
						></Edit>
					</Modal.Body>
					<Modal.Footer
						style={{
							display: "flex",
							justifyContent: "center",
							position: "absolute",
							width: "100%",
							bottom: "0px",
							left: "0px",
							backgroundColor: "rgb(90, 90, 90)",
						}}
					>
						<Button
							variant="primary"
							type="submit"
							onClick={handleClose}
						>
							Submit
						</Button>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
}

export default Header;
