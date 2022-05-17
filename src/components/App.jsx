import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data/data.json';

export const App = () => {
  return (
    <>
    <div style={{padding:"50px"}}> <span style={{marginLeft: "30px",color:"red", fontSize:"40px"}}>Task 1</span>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
    </div>
    <div style={{padding:"50px"}}> <span style={{marginLeft: "30px",color:"red",fontSize:"40px"}}>Task 2</span>
        <Statistics  title="Upload stats" stats={data} />
        <Statistics  stats={data} />
    </div>
    
</>
  );
};
