import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #191919;
      color: #fff;
      border-radius: 4px;
      border: 0px;
      padding: 12px 20px;
      font-weight: bold;

      transition: background 0.3s;

      &:hover {
        background: #de1a22;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #de1a22;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    font-size: 18px;
    margin-top: 5px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  padding: 4px;
  span {
    color: #999;
    padding: 7 px;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-top: 5px;
  }
`;
