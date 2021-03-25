import styled from '@emotion/styled'
import Menu from './components/Menu'
import { useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1084px;
  padding: 48px 16px 48px;
  margin: 0 auto;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`

const SearchInput = styled.input`
  width: 50%;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`

function App() {
  const menu = [
    {
      id: 1,
      image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg',
      name: 'Hamburger',
      price: 20,
    },
    {
      id: 2,
      image: 'https://assets.myfoodandfamily.com/adaptivemedia/rendition/195370-3000x2000.jpg?id=093000b4880e99e6cd87fa511235a789145c5a0a&ht=650&wd=1004&version=1&clid=pim',
      name: 'Cheeseburger',
      price: 30,
    },
    {
      id: 3,
      image: 'https://s3-eu-west-1.amazonaws.com/straus/media/products2/00d43b863f6e4467b2723bbf6a3ca39c.jpg',
      name: 'Double Hamburger',
      price: 35,
    },
    {
      id: 4,
      image: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200917151634-national-cheeseburger-day-2020-stock.jpg',
      name: 'Double Cheeseburger',
      price: 45,
    },
    {
      id: 5,
      image: 'https://www.recipetineats.com/wp-content/uploads/2017/07/Chicken-Burgers-4.jpg?w=500&h=375&crop=1',
      name: 'Chicken Burger',
      price: 30,
    },
    {
      id: 6,
      image: 'https://www.seriouseats.com/recipes/images/2012/06/20120625-burger-lab-lamb-burger-22.jpeg',
      name: 'Lamb Burger',
      price: 35,
    },
    {
      id: 7,
      image: 'https://sweetsimplevegan.com/wp-content/uploads/2019/06/Easy-5-Ingredient-Veggie-Burgers-Sweet-Simple-Vegan-thumbnail.jpg',
      name: 'Vegan Burger',
      price: 25,
    },
    {
      id: 8,
      image: 'https://s3-eu-west-1.amazonaws.com/straus/media/products2/2851ce2f1d454b71a6011b588e6bdecd.jpg',
      name: 'Hot Sauce Burger',
      price: 35,
    }
  ]

  let history = useHistory()
  const [inputValue, setInputValue] = useState(history.location.pathname.slice(1))

  const searchInputHandler = (e) => {
    setInputValue(e.target.value)
    history.push(`/${e.target.value}`)
  }

  return (
    <Container>
      <SearchInput
        value={inputValue}
        onChange={searchInputHandler}
        type="text"
        placeholder="Search for a burger" />
      <Menu
        inputValue={inputValue}
        setInputValue={setInputValue}
        menu={menu} />
    </Container>
  );
}

export default App;
