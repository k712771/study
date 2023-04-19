import React from 'react';

export default function Avartar({ image, isNew = false }) {
	return (
		<div className="avartar">
			<img src={image} alt="Avata" className="photo" />
			{ isNew && <span className="ico-new">NEW</span> }
		</div>
	);
}

