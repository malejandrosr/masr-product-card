import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from '../data/products';

describe('Pruebas en <ProductTitle />', () => {
	it('Debe mostrar el componente correctamente con el título personalizado', () => {
		const wrapper = renderer.create(
			<ProductTitle title="Custom Product" className="custom-class" />
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('Debe de mostrar el componente con el nombre del producto', () => {
		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{() => (
					<>
						<ProductTitle />
					</>
				)}
			</ProductCard>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
