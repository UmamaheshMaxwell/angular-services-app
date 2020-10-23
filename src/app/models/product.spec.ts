import { Product } from './product';

describe('Prodct', () => {
  it('should create an instance', () => {
    expect(new Product("PROD1", "PRODUCT1", 2345)).toBeTruthy();
  });
});
