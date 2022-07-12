import React, { useEffect, useState } from "react";
import { Container, Card, Alert } from "react-bootstrap";
function GradientCard() {
	const [show, setShow] = useState(false);
	const colorMap = [
		{ color1: "FDEB71", color2: "F8D800" },
		{ color1: "ABDCFF", color2: "0396FF" },
		{ color1: "FEB692", color2: "EA5455" },
		{ color1: "90F7EC", color2: "32CCBC" },
		{ color1: "CE9FFC", color2: "7367F0" },
	];
	useEffect(() => {
		setTimeout(() => {
			setShow(false);
		}, 2000);
	}, [show]);
	return (
		<>
			<Container>
				{show && <Alert variant='primary p-2'>Copied to clipboard</Alert>}
			</Container>
			<Container className='d-flex gap-3'>
				{colorMap.map((color, index) => {
					let gradientText = `linear-gradient(135deg, #${color.color1} 10%,#${color.color2} 100%)`;
					let copyText = `background-image:linear-gradient(135deg, #${color.color1} 10%,#${color.color2} 100%);`;
					return (
						<Card
							key={index}
							style={{
								minHeight: "13rem",
								minWidth: "8rem",
								background: gradientText,
							}}>
							<button className="btn btn-sm btn-primary"
								onClick={() => {
									navigator.clipboard.writeText(copyText);
									setShow(true);
								}}>
								copy
							</button>
						</Card>
					);
				})}
			</Container>
		</>
	);
}

export default GradientCard;
