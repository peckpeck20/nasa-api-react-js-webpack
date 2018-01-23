import React from 'react';

const AstronomyCard = (props) => {
	//deconstruct object passed from parent via props
	const { date, explanation, hdurl, media_type, title, url, service_version } = props.apiFetch;

	//switch between images and video
	let playerSwitch = () => {
		switch(media_type) {
			case('video'):
				return (
					<iframe 
					allowFullScreen 
					frameBorder="0"
	    			height="520"
	    			width="720"
	    			src={url}>
					</iframe>
				)

			case('image'):
				return (
					<a href={ hdurl } className="astronomy-image-wrapper">
						<img src = { url } alt = { title } />
					</a>
					)
			default:
				return null
		}
	}

	return (
		<div className="astronomy-card">
			<h5 className="astronomy-title">{ title }</h5>

			{ playerSwitch() }

			<p>{ explanation }</p>

			<span> { date }  { service_version }</span>
			<span> by Jose Zapata 2018 </span>

		</div>
	)
}

export default AstronomyCard;