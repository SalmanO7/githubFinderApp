import React from 'react'
import './UserItem.css'


const UserItem = (props)=> {
    // state = {
    //     id: '1',
    //     login: "mojombo",
    //     html_url: "https://github.com/mojombo",
    //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    // }

    // constructor(){
    //     super();
    // }
    
        const { login, html_url, avatar_url } = props.users;
        return (
            <div className='user'>
                <img src={avatar_url} alt='profile' />
                <h2>{login}</h2>
                <a href={html_url}>Profiles</a>
            </div>
        )
    }


export default UserItem;