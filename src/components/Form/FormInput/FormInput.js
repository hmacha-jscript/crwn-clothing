import React from "react";
import Label from "../Label/Label";
import "./form-input.styles.scss";

export default function FormInput({ handleChange, label, ...otherProps }) {
	return (
		<div className="group">
			{label ? (
				<Label className={`${label.length ? "shrink" : ""} form-input`}>
					{label}
				</Label>
			) : null}
			<input className="form-input" onChange={handleChange} {...otherProps} />
		</div>
	);
}
