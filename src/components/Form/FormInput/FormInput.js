import React from "react";
import Label from "../Label/Label";
import "./form-input.styles.scss";

export default function FormInput({ handleChange, label, ...otherProps }) {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...otherProps} />
			{label ? (
				<Label
					className={`${otherProps.value.length ? "shrink" : ""} form-input`}
				>
					{label}
				</Label>
			) : null}
		</div>
	);
}
