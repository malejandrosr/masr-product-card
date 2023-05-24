import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en <ProductImage />', () => {
	it('Debe mostrar el componente correctamente con una imagen personalizada', () => {
		const wrapper = renderer.create(
			<ProductImage img="./image.png" className="custom-class" />
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('Debe de mostrar el componente con la imagen del producto', () => {
		const wrapper = renderer.create(
			<ProductCard product={product2}>
				{() => (
					<>
						<ProductImage />
					</>
				)}
			</ProductCard>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
