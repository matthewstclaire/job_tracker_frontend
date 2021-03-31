import React from 'react'
import {Link} from 'react-router-dom'

// import HomeLink from '../components/navcomps/HomeLink'
// import CreateJobLink from '../components/navcomps/CreateJobLink'
// import JobsLink from '../components/navcomps/JobsLink'
// import JobsPage from '../containers/JobsPage';
// import { Link } from 'react-router-dom';



// const NavBarContainer = () =>
//     <div className="navbar">
//         <HomeLink />
//         <CreateJobLink />
//         <JobsLink />
//         {/* <LogOutLink /> */}
//     </div>


// class NavBarContainer extends React.Component{
//     render() {
//         return (
//             <div>
//               <ul id="navbar">
//                 {/* <li><Link to={About}>About</Link> */}
//                 <li><Link to={CreateJobLink}>CreateJob</Link></li>
//                 <li><Link to={HomeLink}>CreateJob</Link></li>
//                 {/* <li><Link to={JobsPage}>All Jobs</Link></li> */}
//                 {/* <li><Link to={Logout}>CreateJob</Link></li> */}
//                 {/* <li><a href="#">FAQ</a></li>
//                 <li><a href="#">Contact</a></li> */}
//               </ul>
//             </div>
//         );
//     }
// }

// class NavBarContainer extends React.Component{
//     render() {
//         return (
//             <div className="navbar">
//               <ul className="menu">
//               {/* <li><img src={Tiny} alt="Tiny Tiger Head" /></li> */}
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/create">Add Job</a></li>
//                 <li><a href="/about">About</a></li>
//                 <li><a href="/logout">Logout</a></li>
//               </ul>
//             </div>
//         )
//     }
// }

class NavBarContainer extends React.Component{
  render() {
      return (
          <div className="navbar">
            <ul className="menu">
            {/* <li><img src={Tiny} alt="Tiny Tiger Head" /></li> */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create">Create</Link></li>
              <li><Link to="/about">about</Link></li>
              {/* <li><Link to="/">Home</Link></li> */}
            </ul>
          </div>
      )
  }
}


export default NavBarContainer;