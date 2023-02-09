// import './App.css';
import User from './User';
import CounterTask from "./CounterTask";
import ClassComp from './Component/classComp';
import FunComp from './Component/funComp';
import React,{useEffect, useState} from 'react' //for functional state
// import React,{Component} from 'react'//for class state
import Student from './StudentProps'  //func/class props eg.
import Uncontrolled from './Component/Uncontrolled.js';
import Todo from './Component/Todo/Todo';
import Login from './Component/Login/Login';
import FetchApi from './Component/Fetch/FetchApi';
import Calc1 from './Component/Calculator/Calc1';
import Calc2 from './Component/Calculator/Calc2';
import {BrowserRouter} from "react-router-dom"
import MainFile from './Component/RoutesLearn/MainFile';
import CharacterCount from './Component/CharacterCount';
import SquareData from './Component/Square/Square';
import FetchName from './Component/Fetch/FetchName';
import Fetch3 from './Component/Fetch/Fetch3';
import Fetch4 from './Component/Fetch/Fetch4';
import WithdrawForm from './Component/Login/WithdrawForm';
import LoginAuthentication from './Component/Login/LoginAuthentication';
import Authentication from './Component/FireBaseProject/Authentication'
import UserRepos from './Component/Webelight/UserRepos';
import WeatherStack from './Weather-App/WeatherStack';
import Parents from './Component/LiftingStateUp/ParentComponent'
import LazyLoad from './Component/LazyLoading/LazyLoad';
import AxiosFetch from './Component/Fetch/axios/AxiosFetch';
import AxiosAsyncAwait from './Component/Fetch/axios/AxiosAsyncAwait';
import UseReducer from './Component/UseReduce/UseReducer';
import NewContextApi from './Component/Context API/NewContest'
import HocCounter from './Component/HOC/HocCounter';
import TitleCount from './Component/Custom_Hook/TitleCount';
import  ProgressBars  from './Component/Progressbar/Progressbar';
import UseImperative from './Component/UseImperativeHandle/Parent'
import UseMemo from './Component/UseCallback&Memo/UseMemo';
import UseCallBack from './Component/UseCallback&Memo/UseCallBack';
function App(){
  return(
    <div className='App'>
    {/* <UseMemo/> */}
     {/* <UseCallBack/> */}
    {/* <UseImperative/> */}
       {/* <ProgressBars/> */}
      {/* <TitleCount/> */}
     {/* <HocCounter/> */}
      {/* <Uncontrolled/> */}
      {/* <Todo/> */}
      {/* <Login/> */}
      {/* <LoginAuthentication/> */}
      {/* <Authentication/> */}
      {/* <WithdrawForm/> */}
     {/* <FetchApi/> */}
      {/* <FetchName/> */}
      {/* <Fetch3/> */}
      {/* <Fetch4/> */}
      {/* <Fetch5/> */}
      {/* <AxiosFetch/> */}
      {/* <AxiosAsyncAwait/> */}
     {/* <Calc1/> */}
     {/* <Calc2/> */}
    
     {/* <BrowserRouter>
         <MainFile />   
     </BrowserRouter> */}
    
      
     {/* <CharacterCount/> */}
    {/* <SquareData/> */}
    {/* <UserRepos/> */}
    {/* <WeatherStack/> */}
    {/* <Parents/> */}
    {/* <LazyLoad/> */}
    {/* <UseReducer/> */}
    {/* <NewContextApi/> */}
    </div>
  )
}


//----------useEffect---------------------
// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);
//   const [print, setPrint] = useState(false);
//   useEffect(()=>{    //useEffect hooks with condition if call if data or print element mount.
//     console.log("work done");
//   },[data,print])//we argument in [] for giving condition of access 
//   // if we dont pass agrument then useEffect apply all over the execution
//   return (
//     <div className="App">
//       <h1>Get Input from box</h1>
//       {/* <h1>{data}</h1> */}
//       {print ? <h1>{data}</h1> : null}
//       <input
//         type="text"
//         onChange={(val) => {
//           setData(val.target.value);
//           setPrint(false);
//         }}
//       />
//       <button onClick={() => setPrint(true)}>print</button>
//     </div>
//   );
// }

//----------hide in class --------------

// class App extends React.Component{
 
//     state = {cond:false};
  
//   handletrue=()=>{
//     this.setState({cond:true})
//   }
//   handlefalse=()=>{
//     this.setState({cond:false})
//   }
//   render(){
//   return(
//     <div className="App">
//             { this.state.cond ? <h1>Hello World!--True</h1>:<h1>Hello My world!--false</h1> }
//              <button onClick={this.handletrue}>true</button>
//              <button onClick={this.handlefalse}>false</button>
//         </div>
//   )
// }
// }


//---------Conditional rendering from Profile.js------
// import Profile from './Profile';
// function App(){
//   return(
//     <div className='App'>
//     <Profile/>
//     </div>
//   )
// }


// ------------form----------------------
// function App(){
//   const [name,setName]= useState("");
//   const [intrest,setInterest]= useState("");
//   const [tnc,setTnc]= useState(false);

//   function getForm(e){
//     console.log(name,intrest,tnc)
//   e.preventDefault();
//   }
//   return(
//     <div className='App'>
//       <h1>Form in  React</h1>
//       <form onSubmit={getForm}>
//        <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br></br>
//        <select onChange={(e)=>setInterest(e.target.value) }>
//        <option>Select</option>
//         <option>marvel</option>
//         <option>DC</option>
//        </select><br></br>
//        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Agree</span>
//        <button onClick="submit">Submit</button>
//       </form>
//     </div>
//   )
// }



//-----------Hide/Show---------------------
// function App(){
//   const [status,setStatus] = useState(false)
//   return(
//     <div className='App'>
//     {
//       status? <h1>Hello World!</h1>:null
//     }
    
//     {/* <button onClick={()=>setStatus(false)}>Hide</button>
//     <button onClick={()=>setStatus(true)}>Show</button> */}
//     <button onClick={()=>setStatus(!status)}>toggle</button>
//     </div>
//   )
// }

//-----------input value get----------------

// function App(){
//   const [data , setData] = useState(null)
//   const [print , setPrint] = useState(false)
//   function getvalue(val){
//     setData(val.target.value)
//     setPrint(false);
//   }

//   return(
//     <div className='App'>
//       <h1>Get Input from box</h1>
//       {/* <h1>{data}</h1> */}
//       {
//         print? <h1>{data}</h1> : null
//       }
//       <input type="text" value={data} onChange={getvalue}/>
//       <button onClick={()=>{
      
//       setPrint(true)
//      }}>print</button>
//     </div>
//   )
// }


//----------counter Task class-----------------------
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { val: 0 };
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.val}</h1>
//         <button onClick={() => this.setState({ val: this.state.val + 1 })}>
//           ins
//         </button>
//         <button onClick={() => this.setState({ val: this.state.val - 1 })}>
//           dec
//         </button>
//       </div>
//     );
//   }
// }

//----------counter Task function-----------------------

// function App(){
//   return(
//     <React.Fragment>
//       <CounterTask/>
//     </React.Fragment>
//   )
// }
//--------class props---------------------
// class App extends React.Component{
//   constructor(){
//     super();
//      this.state = {
//       name:"raj"
//      }
//   }
//   render(){
//   return(
//     <div className='App'>
//       <h1>Props!</h1>
//       <Student name={this.state.name} email="rajlyd18@gmail.com"/>
//       <button onClick={()=>this.setState({name:"Raksha"})}>Update</button>
//     </div>
//     )
//   }
// }

// ---------------functional props---------
// function App(){
//   const [name,setName] = useState("Hello World!");
//   return(
//     <div className='App'>
//       <h1>Props in React</h1>
//       <Student name={name}/>
//       <Student name={"Raksha"} rollNo={2}/>
//       <Student name={"Rupali"} rollNo={3}/>
//       <button onClick={()=>{setName("Hello Raj!")}}>Update </button>
//     </div>
//   )
// }

// -----------------class state-------------------
// class App extends Component
// {
//   constructor(){
//     super()  //for access This keyword (for call parent constructor)
//     this.state = {
//       data:"Hello app",
//       num:0
//     }
//   }
//  updateData() {
//     this.setState({data:"Hello Class"})
//   }
//   updateNum(){
//     this.setState({num:this.state.num+1})
//   }
//   render(){
//     return(
//     <>
//       <h1>{this.state.data}</h1>
//       <h2>{this.state.num}</h2>
//       <button onClick={()=>this.updateData()}>Update</button>
//       <button onClick={()=>this.updateNum()}>Update Number</button>
//     </>
//     );
//   }
// }


// -----------functional state---------------------

// function App(){
//   const [data,setData]= useState("Hello App")
   
//   function updateData(){
//     setData('Hello state ')
//   }
//   return(
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update</button>
//     </div>
//   )
// }


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello App</h1>
//       <User/>
//       <ClassComp/>
//       <FunComp/>
//     </div>
//   );
// }

export default App;
