import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/adminlogin.css'; // Import your stylesheet if needed

const Adminlogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the username and password match your criteria
        if (username === 'admin' && password === 'password') {
            // Show popup
            setShowPopup(true);

            // Redirect after a delay (adjust the delay based on your needs)
            setTimeout(() => {
                navigate('/des');
            }, 2000); // 2000 milliseconds (2 seconds)
        } else {
            // Unsuccessful login logic (show error message, clear inputs, etc.)
            console.log('Invalid credentials. Please try again.');
            setUsername('');
            setPassword('');
        }
    };

    return (
        <div className="contain">
            <div id="form-ui">
                <form onSubmit={handleLogin} id="form">
                    <div id="form-body">
                        <div id="welcome-lines">
                            <div id="welcome-line-1">Thrifty Tech</div>
                            <div id="welcome-line-2">Welcome Back</div>
                        </div>
                        <div id="input-area">
                            <div className="form-inp">
                                <input
                                    placeholder="Username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-inp">
                                <input
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div id="submit-button-cvr">
                            <button id="submit-button" type="submit">
                                Login
                            </button>
                        </div>
                        <div id="bar"></div>
                    </div>
                </form>
            </div>

            {showPopup && (
                <div className="popup">
                    <p>Login Successful!</p>
                </div>
            )}
        </div>
    );
};

export default Adminlogin;
