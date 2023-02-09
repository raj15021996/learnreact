const Home=()=>{
    const handleLogOut=()=>{
     localStorage.clear();
     window.location.reload(); 
    }
    return (
      <>
      <h1>Welcome to my home Page</h1>
      <button onClick={handleLogOut}>Log out</button>
      </>
    )
  }
  export default Home;