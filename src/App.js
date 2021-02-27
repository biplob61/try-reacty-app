import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends = ['biplob', 'moni']
  const products = [{name:'Photoshop',price:'$90'},
  {name:'Illustrator',price:'60'},
  {name:'pdf reader',price:'40'}]
  const productNames = products.map(productName=>productName.name)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        
        <ul>
          <li>{productNames}</li>
          <li>{friends[0]}</li>
          <li>{friends[1]}</li>
        </ul>    
        <Users></Users>
        <Person name= {friends[0]}></Person>
        <Person name={friends[1]} ></Person>
        <Product name= {products[0].name} price = {products[0].price}></Product>
        <Product name= {products[1].name} price = {products[1].price}></Product>
        <Product name= {products[2].name} price = {products[2].price}></Product>
      </header>
    </div>
  );
}
function Users() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
    
  })
  return(
    <div>
      <h3>DynamicUser{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const[count,setCount]=useState(0);
  const handleIncrease= ()=>setCount(count+1);
  
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width: '200px'
  }
  return(
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Person(propts){
  return( 
  <div style={{border: '2px solid red',margin:'2px'}}>
    <h3>{propts.name}</h3>
  </div>
  )

}
export default App;
