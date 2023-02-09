import React,{Component} from "react";
//-------class Component------------------
class Users extends Component
{
    render(){
        return(
            <>
            <h1>This is Class Component</h1>
            </>
        )
    }
}

//------functional component------------
function User() {
    return (
      <>
        <h1>This is functional Component</h1>
       <Users/>   {/*access class component here */}
        </>
    );
  }
  
  export default User;
  