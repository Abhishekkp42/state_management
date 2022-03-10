export const GroceryList = ({title,status,id, handleDelete}) => {
    return (<div>
        <p>{title} <button id="btn" onClick={() => {
            handleDelete(id)
        }}>Delete</button></p>
        
    </div>
    )}