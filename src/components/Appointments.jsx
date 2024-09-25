import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Appointments.css';

const Appointments = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Unauthorized access. Please log in again.');
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get('http://localhost:5003/api/users', { // Updated to port 5003
                    headers: {
                        Authorization: `Bearer ${token}` // Send the JWT token for authorization
                    }
                });
                setUsers(response.data); // Set the user data from the response
            } catch (err) {
                setError(err.response ? err.response.data.error : 'Error fetching users');
            } finally {
                setLoading(false); // Ensure loading is false at the end
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="appointments__container">
            <h2 className="appointments__heading">User List</h2>
            {loading ? (
                <p>Loading users...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <table className="appointments__table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Appointments;
