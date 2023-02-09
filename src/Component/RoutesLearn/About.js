import { useLocation } from "react-router-dom"
import College from "./College";
import School from "./School";

export default function About(){
    const {search} =useLocation();
    const aboutData=search.split("=")[1];
    return(
        <div>
            <h1>This is about Page</h1>
            {aboutData==='college' && <College/>}
            {aboutData==='school' && <School/>}
        </div>
    )
}