import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./components.css";
import crown from "../assets/crown.png";

function Header(props) {
	const useScreenWidth = () => {
		const [screenWidth, setScreenWidth] = useState(window.innerWidth);

		useEffect(() => {
			const handleResize = () => setScreenWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}, []);

		return screenWidth;
	};
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
						fontSize: "calc(12px + 2.0vw)",
					}}
				>
					<img src={crown} style={{ width: 80, height: 60 }} />
					SITE PICKEMS
				</h1>
				<DropdownButton
					id="user-dropdown"
					title={props.displayName}
					variant="dark"
					data-bs-theme="dark"
				>
					<Dropdown.Item onClick={props.Logout} variant="secondary">
						Logout
					</Dropdown.Item>
				</DropdownButton>
			</div>
		</>
	);
}

export default Header;
