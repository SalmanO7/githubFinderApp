import React, { Component } from "react";
import './Search.css'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text: ''
    };
    textHandler = (e) => {
        this.setState({ text: e.target.value })
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.text === "") {
            this.props.onAlert('Please Enter A user name', 'light');
        } else {
            this.props.onSearchText(this.state.text)
            this.setState({ text: "" });

        }
        // console.log(this.state.text);
    };

    render() {
        return (
            <>
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <input type="text" className="input
                    " name="text" placeholder="Search Users"
                        onChange={this.textHandler}
                        value={this.state.text} />
                    <input className="search" type="submit" value='Search' />
                </form>
                {this.props.showUsers && (<button className="btns" onClick={this.props.onClearUsers} >Clear User</button>)}
            </>
        )
    }
}

Search.propTypes = {
    showUsers: PropTypes.bool.isRequired,
    onClearUsers: PropTypes.func.isRequired,
    onSearchText: PropTypes.func.isRequired,
}
export default Search