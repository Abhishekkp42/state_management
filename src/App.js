import logo from './logo.svg';
import './App.css';
import { Groceryinput } from './components/Groceryinput';

function App() {

  // const getData= (data) =>{
  //   console.log("Data", data)
  // }

  return (
    <div className="App">
      <Groceryinput />


      {/* <Left getData={getData} />
      <Right /> */}
    </div>
  );
}

// function Left({getData}) {
//   const counter= 10;
//   getData(counter)
//   return (
//     <div>
//       Left: 
//     </div>
//   )
// }


export default App;
