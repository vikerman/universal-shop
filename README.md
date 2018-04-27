# universal-shop

An example repo to compare different stratgies.

1. [level1](https://github.com/vikerman/universal-shop/tree/master/level1/universal-shop) - Pure client-side rendered app.

2. [level2](https://github.com/vikerman/universal-shop/tree/master/level2/universal-shop) - SSR + Client-side app. Initial Paint improves but time to interactive becomes worse.

3. [level3](https://github.com/vikerman/universal-shop/tree/master/level3/universal-shop) - SSR + Bring up an empty shell app on the client - Provides a base line of how small we can make the client JS bundle including BrowserModule and nothing else.

4. [level4](https://github.com/vikerman/universal-shop/tree/master/level4/universal-shop) - SSR + Bring up add-to-cart and cart-icon Angular elements without bootstrapping the whole app  - Provides a more realistic sample of bringing up interesting parts of the app which we want to make interactive first.

5. level5 (TODO): Make the sidenav with animation active without bringing up the full app. Bootstrap the full app on route changes.
