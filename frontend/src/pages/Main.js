import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import './Main.css';

import api from '../services/api';

import logo from './../assets/logo.svg';
import like from './../assets/like.svg';
import dislike from './../assets/dislike.svg';

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  /**
   * Chamada API para carregar os usuários
   */
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params._id
        }
      });
      setUsers(response.data);
    }
    loadUsers();
  }, [match.params._id])

  useEffect(() => {
    const socket = io('http://localhost:3333');
    
  },  [match.params._id])

  async function handleLike(id) {
    await api.post(`/dev/${id}/likes`, null, {
      headers: {
        user: match.params.id
      }
    });
    // filtrando os usuários que não tem o mesmo id
    setUsers(users.filter(user => user._id !== id))
  }

  async function handleDislike(id) {
    await api.post(`/dev/${id}/dislikes`, null, {
      headers: {
        user: match.params.id
      }
    });
    // filtrando os usuários que não tem o mesmo id
    setUsers(users.filter(user => user._id !== id))
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="TinDev" />
      </Link>
      {
        users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user._id} >
                <img src={user.avatar} alt={user.name} />
                <footer>
                  <strong> {user.name} </strong>
                  <p> {user.bio} </p>
                </footer>

                <div className="buttons">
                  <button type="button" onClick={() => handleDislike(user._id)}>
                    <img src={dislike} alt="Dislike" />
                  </button>
                  <button type="button" onClick={() => handleLike(user._id)}>
                    <img src={like} alt="Like" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
            <div className="empty">Acabou!</div>
          )
      }
    </div>
  );
}