import { useEffect, useState } from "react";
import "./styles.css";
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AppPagination from "./AppPaggination";
import Typography from "@mui/material/Typography"
import moment from "moment/moment";
import DrillDown from "./DrillDown";

export default function App() {
  const [user, setUser] = useState([{}]);
  const[page,setPage]=useState(1);
  const[pageNumber,setPageNumber]=useState(10);
  // const [commitsData,setCommitsData]=useState([]);

  const fetchApi = () => {
    const days30Before = moment().subtract(30, 'days').format('YYYY-MM-DD');
    // console.log(`date:-${days30Before }`)
    fetch(`https://api.github.com/search/repositories?q=created:>${days30Before}&sort=stars&order=desc&page=${page}`)
    .then((res) => res.json())
      .then((data) => {
    
        // console.log(data.items)
        setUser(data?.items);
        setPageNumber(data?.total_count);
        // console.log(pageNumber);
      })
  }
  useEffect(() => {
    fetchApi();
  }, [page])

  return (
    <div className="Main-Container">
      <h1>Most Started Repo</h1>
      {
        user?.map((items) => {
          return <div className="container">
            <div className='img-container'>
              <img src={items?.owner?.avatar_url}
                alt='avatar' />
            </div>
            <div className="userDetails">
              <p className="userName">{items?.name}</p>
              <p className="userDiscription">{items?.description}</p>
              <div className="inner-container">
                <div className="star">
                  <div className="starIcon"><StarOutlineIcon fontSize="small" /></div>
                  <div className="starNo"> Star {items?.stargazers_count}</div>
                </div>
                <div className="star">
                <div className="starIcon"><ModeStandbyIcon fontSize="small" /></div>
                  <div className="starNo"> Issues {items?.open_issues}</div>
                </div>
                <div className="lastUpdate">
                  <Typography
                  color='primary'
                  inline>
                  Pushed at { moment(items.created_at).format('YYYY-MM-DD') } by { items?.owner?.login }
                </Typography>
                </div>
              </div>
            </div>
            <div className="drillDown">
             <DrillDown setUser={user}/>
            </div>
          </div>
        })
      }
      <AppPagination setPage={setPage} pageNumber={pageNumber}/>
    </div>
  );
}
