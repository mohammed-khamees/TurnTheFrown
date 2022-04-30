import React from 'react';
import './style.css';

function FilpBtn({ flip }) {
	return (
		<button className="flipBtn" onClick={flip}>
			Flip
		</button>
	);
}

export default FilpBtn;
