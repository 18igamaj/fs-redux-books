import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import axios from 'axios'
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {

  

  const dispatch = useDispatch()

  // TODO - GET Book List from server
  // we will axios.get (stuff)
  // then( when the response comes back, update redux)

  const fetchBookList = () => {

    axios.get('/books')
    .then(response => {
      // sending data to redux store 
      dispatch({type:'SET_BOOK_LIST', payload:response.data});
    }).catch(err => {
      console.log('Oh no or axios get!', err)
    })
  }

  useEffect(() => {
    fetchBookList()
  }, []);

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBookList={fetchBookList} />
        <BookList />
      </main>
    </div>
  );
}

export default App;