import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
             <h1>
                Welcome to the USer Dashboard, {user?.displayName ? user.displayName : "Unknown"}!
            </h1>
        </div>
    );
};

export default UserHome;