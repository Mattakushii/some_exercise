import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/Header';
import styled from 'styled-components'
import CategoriesList from './components/Categories';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  width: 800px;
  height: 600px;
  background-color: gray;
`

function App() {
  const [selected, setSelected] = useState({
    categoryId: null,
    subCategoryId: null,
  })

  useEffect(()=> {
    console.log(selected);
  }, [selected])

  return (
    <Container>
      <Content>
        <Header/>
        <CategoriesList selected={selected} setSelected={setSelected}/>
      </Content>
    </Container>
  );
}

export default App;
