import styled from '@emotion/styled'

const Product = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    padding: 0 10px;
    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }
    span {
        margin: 10px 0;
        color: #FFF;
    }
    strong {
        color: #FFD700;
    }
`

const MenuProduct = ({ product }) => {
    return (
        <Product>
            <img src={product.image} />
            <span>{product.name}</span>
            <strong>{product.price} lei</strong>
        </Product>
    )
}

export default MenuProduct