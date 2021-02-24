import React,{ useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
    const heros = ['Arfin', 'Masud', 'Rana', 'Provas', 'Jolil','Alom']
    const products = [
        {name: 'Photoshop', price: '$90.99'},
        {name: 'Illustrator', price: '$59.99'},
        {name: 'PDF Reader', price: '$39.99'}
    ]
    // var name = "Moshiur Rahman";
    // var name2 = "Alve khan";
    // var style ={
    //     color: 'red',
    //     backgroundColor: 'green'
    // }
    return ( 
        <div className = "App" >
        <header className = "App-header" >
        {/* <img src = { logo }
        className = "App-logo"
        alt = "logo"/>
        <p>Edit <code> src / App.js </code> and save to reload. </p> 
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React </a> */}
        {/* <h1 className= "" style={style}>My name: {name} </h1>
        <h1 style={{backgroundColor: 'cyan', color:'yellow'}}>My name: {name2} </h1> */}
        {/* <p>I am react person</p>
        
        <Person name='Moshiur Rahman' work='Web Development'></Person>
        <Person name='Kodu Azad' work= 'Chapa mara'></Person>
        <Person name='Leonel Messi' work='Football player'></Person>
        <Person name='Sakib al Hasan' work='Cricket player'></Person> */}
        
        <Counter></Counter>
        <Users></Users>
        <ul>
            {
                heros.map(hero => <li>{hero}</li>)
            }

            {
                products.map(product => <li>{product.name}</li>)
            }
        </ul>

        {
            products.map(pd => <Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        </header>
        </div>
    );

}
// function Person(props){
//     const personStyle={
//         border:' 4px solid green',
//         margin:'20px',
//         padding: '10px'
//     }

//     return (
//     // <div style={{border:'3px solid red',margin:'10px'}}>
//     <div style={personStyle}>
//         <h1>Name: {props.name}</h1>
//         <h3>{props.work}</h3>    
//     </div>
//     ) 
// }\

//data load from api function...
function Users(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUsers(data));
        
    })
    return (
        <div>
            <h3>Dynamic Users: {users.length}</h3>
                <ol>
                    {
                        users.map(user => <li>{user.name}, Phone: {user.phone}</li>)
                    }
                </ol>
        </div>
    )
}

//function for count
function Counter(){
    const [count, setCount] = useState(10);
    // const handleIncrease = () =>setCount(count + 1);
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() =>setCount(count - 1)}>Decrease</button>
            <button onClick={() =>setCount(count + 1)}>Increase</button>
        </div>
    )
}

//function for card...
function Product(props){
    const productStyle={
        border:'3px solid blue',
        borderRadius:'5px',
        backgroundColor:'salmon',
        height:'200px',
        width:'200px',
        margin:'1rem',
        // float:'left'
    }
    const {name, price} = props.product;
    return (
        <div style={productStyle}>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <button>Buy now</button>
        </div>
    )
}

export default App;