import React, {useEffect} from 'react';
import './Main.css';

import logo from './../assets/logo.svg';
import like from './../assets/like.svg';
import dislike from './../assets/dislike.svg';

export default function Main({ match }){
    useEffect(() => {
        async function loadUsers(){

        }
        loadUsers();
    },[match.params._id] )
    
    return (
        <div className="main-container">
            <img src={logo} alt="TinDev"/>

            <ul>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/16408742?v=4" alt="TinDev" />
                    <footer>
                        <strong> Name User </strong>
                        <p> Description </p>
                    </footer>

                    <div className="buttons">
                        <button type="button"> <img src={dislike} alt="Dislike" /> </button>
                        <button type="button"> <img src={like} alt="Like" /> </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/16408742?v=4" alt="TinDev" />
                    <footer>
                        <strong> Name User </strong>
                        <p> Description </p>
                    </footer>

                    <div className="buttons">
                        <button type="button"> <img src={dislike} alt="Dislike" /> </button>
                        <button type="button"> <img src={like} alt="Like" /> </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/16408742?v=4" alt="TinDev" />
                    <footer>
                        <strong> Name User </strong>
                        <p> Description </p>
                    </footer>

                    <div className="buttons">
                        <button type="button"> <img src={dislike} alt="Dislike" /> </button>
                        <button type="button"> <img src={like} alt="Like" /> </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars3.githubusercontent.com/u/16408742?v=4" alt="TinDev" />
                    <footer>
                        <strong> Name User </strong>
                        <p> Description </p>
                    </footer>

                    <div className="buttons">
                        <button type="button"> <img src={dislike} alt="Dislike" /> </button>
                        <button type="button"> <img src={like} alt="Like" /> </button>
                    </div>
                </li>
            
            </ul>
        </div>
    );
}