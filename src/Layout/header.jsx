import logo from "../images/react.png"

// main header function 
function Header (){
    return(
      <div className="pt-2 py-1 pl-2" style={{backgroundColor:"black"}}>
        <img src={logo} alt="" style={{height:"35px", verticalAlign:"top"}}/> {" "}
       <span className="h2 pt-4 text-white-50">Routing in React</span>
      </div>
    )
  }

 export default Header  