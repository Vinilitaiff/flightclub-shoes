import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/1/4/143598_01.jpg"
          alt="Yezzy"
        />
        <strong>Descricao</strong>
        <span>R$412</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/1/4/143598_01.jpg"
          alt="Yezzy"
        />
        <strong>Descricao</strong>
        <span>R$412</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/1/4/143598_01.jpg"
          alt="Yezzy"
        />
        <strong>Descricao</strong>
        <span>R$412</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/1/4/143598_01.jpg"
          alt="Yezzy"
        />
        <strong>Descricao</strong>
        <span>R$412</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/1/4/143598_01.jpg"
          alt="Yezzy"
        />
        <strong>Descricao</strong>
        <span>R$412</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/1/4/143598_01.jpg"
          alt="Yezzy"
        />
        <strong>Descricao</strong>
        <span>R$412</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
