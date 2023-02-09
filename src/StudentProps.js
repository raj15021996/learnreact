//-----------class prop---------
import React from 'react' 
export default class Student extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:"red", margin:10}}>
                <h1>{this.props.name}</h1>
                 <h3> {this.props.email}</h3>
            </div>
        )
    }
}

//------------func props--------

// function Student(props){
//     return(
//         <div style={{backgroundColor:"red", margin:10}}>
//             <h1>{props.name}</h1>
//             {/* <h1>Roll No: {props.rollNo}</h1> */}
//         </div>
//     )
// }
// export default Student
