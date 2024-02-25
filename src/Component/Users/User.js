import UserItem from './UserItem';
import React from 'react';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';


const User = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    }
    else {

        return (
            <div style={userStyle}>
                {users.map((user) => {
                    return <UserItem key={user.id} users={user} />
                })}
            </div>
        );
    }


};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gridGap: '1rem'
}

User.propType = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.array.isRequired,
}

export default User