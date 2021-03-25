import styled from '@emotion/styled'
import MenuProduct from './MenuProduct'

const SearchResultsRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 36px;
`

const Menu = ({ menu, inputValue }) => {
    return (
        <SearchResultsRow>
            {menu.filter((product) => {
                if (inputValue == '') {
                    return product
                } else if (product.name.toLowerCase().includes(inputValue.toLowerCase())) {
                    return product
                }
            }).map((product) => (
                <MenuProduct product={product} />
            ))}
        </SearchResultsRow>
    )
}

export default Menu