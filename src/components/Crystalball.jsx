import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Category from "./Category";
import "./components.css";

function Crystalball(props) {
	const [show, setShow] = useState(false);

	const pick = props.pick;
	const esports = props.esports;
	const sgt = props.sgt;
	const msite = props.msite;
	const misc = props.misc;
	const updatePicks = props.updatePicks;

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div style={{ color: "white" }}>
				<form onSubmit={updatePicks}>
					<Category
						category={esports}
						label="ESPORTS"
						pick={pick}
					></Category>

					<Category
						category={sgt}
						label="SITE GOT TALENT"
						pick={pick}
					></Category>

					<Category
						category={msite}
						label="MR. & MS. SITE"
						pick={pick}
					></Category>

					<Category
						category={misc}
						label="MISC"
						pick={pick}
					></Category>

					<div className="Submitdiv">
						<Button
							variant="primary"
							type="submit"
							onClick={handleShow}
						>
							Submit
						</Button>
					</div>
				</form>
			</div>

			<div style={{ height: "60px", width: "100vw" }}></div>
			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}
			>
				<Modal.Header closeButton>
					<Modal.Title>SITE Pickems</Modal.Title>
				</Modal.Header>
				<Modal.Body>Submitted!</Modal.Body>
				<Modal.Footer
					style={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Crystalball;
