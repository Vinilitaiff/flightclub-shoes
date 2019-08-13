import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /*criar espacamento com largura igual*/
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      max-width: 250px;
      align-self: center;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 15px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #191919;
      color: #fff;
      border-radius: 4px;
      border: 0px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.3s;

      &:hover {
        background: #de1a22;
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }
      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
