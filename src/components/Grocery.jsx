import { useState } from "react";
import { Groceryinput } from "./Groceryinput";
import { v4 as uuid } from "uuid";
import { GroceryList } from "./GroceryList";

export const Grocery= () => {
	const [groceries, setGroceries] = useState([])

	function addToList(title) {
		const x= {
			id: uuid(),
			title,
			status: false
		}

		setGroceries([...groceries, x])
		console.log("x", groceries)
		
	}

	const handleDelete= (id) => {
		setGroceries(groceries.filter((del) => del.id!==id))
		console.log("ss", groceries)
	}

	return (
		<div>
			<Groceryinput addToList={addToList} />
			{groceries.map((e) => {
				return <GroceryList handleDelete= {handleDelete} key={e.id} {...e}/>
			})}
			
		</div>
	)
}