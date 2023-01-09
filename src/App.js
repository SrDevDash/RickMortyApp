import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar';
import logo from './img/Rick-And-Morty-Logo.png';
import Detail from './components/Details/detail';
import Login from './components/login/login';
import Favorites from './components/Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, deleteCharacter, deleteFavorite } from './redux/actions/actions';


function App() {

  //  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const characters = useSelector(state => state.allCharacter);
  const favorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();

  const username = 'test@gmail.com';
  const password = '123456';
  const location = useLocation();
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/');
    }
  }

  useEffect(() => {
    !access && navigate('/login');

  }, [access]);

  const onSearch = (id) => {
    const find = characters.find(character => {
      console.log(character.id, id)
      return character.id === id
    });


    !find &&
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            dispatch(addCharacter({ ...data, fav: false }))
          } else {
            window.alert('No hay personajes con ese ID');
          }
        });

    find && alert('ID repetido');
  }

  const onClose = (id) => {
    const find = favorites.find(favorite => favorite.id === id);
    find && dispatch(deleteFavorite(find.id));
    dispatch(deleteCharacter(id));
  }


  return (

    <div className='App'>

      {location.pathname !== '/login' && <NavBar
        onSearch={onSearch}
        setAccess={setAccess}
      />}

      <img className='logo' src={logo} alt='logo2' />
      <div>
      </div>
      <Routes>
        <Route exact path='/' element={<Cards
          characters={characters}
          onClose={onClose}
        />} />
        <Route exact path='/favorites' element={<Favorites onClose={onClose} favorite={true} />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route exact path='/login' element={<Login login={login} />} />
      </Routes>
    </div>

  )
}

export default App
