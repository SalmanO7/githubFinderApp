import React from 'react';
import { BrowserRouter as  Route, } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import User from './Component/Users/User';
import axios from 'axios';
import Search from './Component/Users/Search';
import Alert from './Component/Layout/Alert';
import About from './Component/Pages/About';
import './App.css'


class App extends React.Component {

  state = {
    users: [],
    loading: false,
    alert: null,
  };


  // async componentDidMount() {
  //   // console.log("Mounted")
  //   this.setState({ loading: true });
  //   const url = 'https://api.github.com/users';
  //   const res = await axios.get(url)
  //   console.log(res.data)
  //   this.setState({ users: res.data, loading: false })
  // }

  searchTextHandler = async (text) => {
    // console.log(text);
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.React_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url)
    // console.log(res.data);
    this.setState({ users: res.data.items, loading: false })
  }


  clearUsersHandler = () => {
    this.setState({ users: [] })
  }

  alertHandler = (msg, style) => {
    this.setState({ aler: { msg: msg, style: style } });

  };

  render() {
    const { users, loading } = this.state;
    return (
      // <Router>
        <div>
          <Navbar title=" GitHub Finder " icon="fab fa-github" />
          <div className='container'>
            <Alert onAlert={this.state.alert} />
          </div>
          
          {/* <Route exact path="/" render={(props) => ( */}
            <div className='container'>
              <Search
                onSearchText={this.searchTextHandler} onClearUsers={this.clearUsersHandler}
                showUsers={this.state.users.length > 0 ? true : false}
                onAlert={this.alertHandler}
              />
              <User users={users} loading={loading} />
            </div>
          {/* )} */}
          {/* /> */}
          <Route exact path='/about' element={<About/>} />
          
        </div>
      // </Router>
    );
  }
}
export default App;
