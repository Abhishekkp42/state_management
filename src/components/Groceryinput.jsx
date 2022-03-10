import { useState } from "react"

export const Groceryinput= ({addToList}) =>{
const [text,setText] = useState("");

	return (
		<div>
			<input type="text"
			onChange={(e) => {
				setText(e.target.value);
			}} />

			<button onClick={() => {
				addToList(text);
			}}>Add</button>
		</div>
	)
}