import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/1/4/143598_01.jpg"
                alt="Tenis"
              />
            </td>
            <td>
              <strong>Tenis Top</strong>
              <span>R$431</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={16} color="#de1a22" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={16} color="#de1a22" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$215,5</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={16} color="#de1a22" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1231,41</strong>
        </Total>
      </footer>
    </Container>
  );
}
