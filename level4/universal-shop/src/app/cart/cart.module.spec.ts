import { CartModule } from './cart.module';

describe('CartModule', () => {
  let cartModule: CartModule;

  beforeEach(() => {
    cartModule = new CartModule();
  });

  it('should create an instance', () => {
    expect(cartModule).toBeTruthy();
  });
});
