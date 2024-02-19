# Log Events

Once you have installed MarkTag on your web app, you can start logging events

## Log Event

```js
mtag("event", payload);
```

::: info
Build `payload` object depending on the event type
:::

## Example

### View Content Event logging

```js
    mtag('event', {
        type: 'ViewContent',
        email: 'johndoe@example.com'
        phone: '+13425784032'
    })
```

## Predefined Events and it's Payload

---

::: details **View Content**

##### Add this event code to each page of your site to track when a customer visits it. MarkTag automatically collects the page URL and page information

\*\*

#### Schema

```js
    payload: {
        type: 'ViewContent',
        email: `<STRING: USER EMAIL>` // Optional
        phone: `<STRING: USER PHONE NUMBER>` // Optional
    }
```

#### Example

```js
payload: {
        type: 'ViewContent',
        email: 'john@example.com',
        phone: '+13425784032',
    }
```

<!-- | Payload      |      Type      |  Required |
| ------------- | :-----------: | ----: |
| type     | string| true |
| email      |   string    | false |
| phone |   string    |    false | -->

---

:::

<!-- ### View Item -->

::: details View Item

#### Add this event code to an item on your site to track when a customer clicks it to view details or add it to the item’s detail page. MarkTag automatically collects the page URL and page information.

<!--
| Payload      |      Type      |  Required | Description |
| ------------- | :-----------: | ----: |             ----: |
| `type`        | string        | true     | Event type |
| `email`       | string        | false    | User Email Address |
| `phone`       | string        | false    | User Phone Number |
| `value`       | number       | false     |  Value of this item  |
| `currency`    | string        | false     | Currency |
| `content_type` | enum('product' , 'image' , 'video' , 'blog') or any custom string | false |
| `products`    | array of objects        | false     |
| - `id`        | string        | true (within `products`) |  Unique id of product |
| - `name`       | string        | false (within `products`) | Product Name eg. "Shirt" |
| - `category`  | string        | false (within `products`) |
| - `variant`   | string        | false (within `products`) |
| - `description` | string        | false (within `products`) |
| - `quantity`  | number        | false (within `products`) |
| - `price`     | number        | false (within `products`) |
| - `coupon`    | string        | false (within `products`) |
| - `discount`  | number        | false (within `products`) | -->

\*\*

#### Schema

```js
paylaod: {
        type: 'ViewItem',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM >, // Optional
        currency: <STRING: CURRENCY OF THE VALUE>, // Optional
        products: <Array of Product object>, // Optional
        content_type: <'product' | 'image' | 'video' | 'blog' | string> // Optional
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

##### Example

```js



payload: {
        type: 'ViewItem',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        content_type: 'product',
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

<!-- ### Login Form -->

::: details Login

#### Add this event to track a customer login.

\*\*

#### Schema

```js
payload: {
        type: 'Login',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
payload: {
          type: 'Login',
          email: 'john@example.com',
          phone: '+13425784032',
    }
```

:::

::: details Signup

#### Add this event to track a new customer signup

\*\*

<!-- ### Signup  -->

#### Schema

```js
payload: {
        type: 'Signup',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
payload: {
          type: 'Signup',
          email: 'john@example.com',
          phone: '+13425784032',
    }
```

:::

::: details Complete Registration

#### Add this event to track when a customer completes registration.

\*\*

<!-- ### Complete Registration -->

#### Schema

```js
payload: {
        type: 'CompleteRegistration',
        email: '<USER EMAIL>', // Optional
        phone: '<USER PHONE NUMBER>', // Optional
        // You can add additional key-value pairs
    }
```

#### Example

```js
paload: {
          type: 'CompleteRegistration',
          email: 'john@example.com',
          phone: '+13425784032',
    }
```

:::

:::details Start Trial

#### Add this event to track when a customer starts a trial

\*\*

<!-- ### Start Trial -->

#### Schema

```js
payload:{
        type: 'StartTrial',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM >,
        predicted_ltv: <PREDICTED LTV>, // Optional
        currency: <STRING: CURRENCY OF THE VALUE>,
        products: <Array of Product object>,
    }
```

#### Product object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

#### Example

```js
  payload: {
        type: 'StartTrial',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

<!-- ### Add Payment Info -->

::: details Add Payment Info

#### Add this event to track when a customer adds payment info.

\*\*

#### Schema

```js
payload: {
        type: 'AddPaymentInfo',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        payment_type: <STRING: TYPE OF PAYMENT>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM>, // Optional
        currency: <NUMBER:CURRENCY OF VALUE>, //Optional
        products: <ARRAY of Product Object>, //Optional
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

#### Example

```js
payload:{
        type: 'AddPaymentInfo',
        email: 'john@example.com',
        phone: "+13425784032",
        payment_type: "Credit Card"
        value: 40.00,
        currency: "USD",
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

::: details Add Shipping Info

#### Add this event to track when a customer adds shipping info

\*\*

#### Schema

```js
payload: {
        type: 'AddShippingInfo',
        email: '<STRING : USER EMAIL>', // Optional
        phone: '<STRING: USER PHONE NUMBER>', // Optional
        shipping_tier: 'STRING: <TYPE OF SHIPPING>', // Optional
        value: <NUMBER: VALUE OF THIS ITEM>, // Optional
        currency: <STRING: CURRENCY OF VALUE>, //Optional
        products: <ARRAY of Product Object>, //Optional
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

#### Example

```js
payload: {
        type: 'AddShippingInfo',
        email: 'john@example.com',
        phone: '+13425784032',
        shipping_tier: 'GROUND',
        value: 40.00,
        currency: "USD",
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

<!-- ### View Cart -->

::: details **View Cart**

#### Add this event code to an item on your site to track when a customer views their cart.

\*\*

#### Schema

```js
payload:{
        type: 'ViewCart',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM >,
        currency: <STRING: CURRENCY OF THE VALUE>,
        products: <Array of Product object>,
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

```js
payload: {
        type: 'ViewCart',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

<!-- ### Add To Cart -->

::: details Add To cart

#### Add this event code to an item on your site to track when a customer adds it to their cart.

\*\*

#### Schema

```js
payload: {
        type: 'AddToCart',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM >,
        currency: <STRING: CURRENCY OF THE VALUE>,
        products: <Array of Product object>,
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

#### Examples

```js
payload: {
        type: 'AddToCart',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

<!-- ### Add To Wishlist -->

::: details Add To Wishlist

#### Add this event code to an item on your site to track when a customer adds it to their wishlist.

\*\*

#### Schema

```js
payload:{
        type: 'AddToWishlist',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM >,
        currency: <STRING: CURRENCY OF THE VALUE>,
        products: <Array of Product object>,
    }
```

#### Example

```js
payload: {
        type: 'AddToWishlist',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

<!-- ### Remove From Cart -->

::: details Remove From Cart

#### Add this event code to items in the cart on your site to track when a customer removes them from their cart.

\*\*

#### Schema

```js
payload: {
        type: 'RemoveFromCart',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM >,
        currency: <STRING: CURRENCY OF THE VALUE>,
        products: <Array of Product object>,
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

#### Example

```js
payload:{
        type: 'RemoveFromCart',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

<!-- ### Begin Checkout -->

::: details Begin Checkout

#### Add this event to your site to track when a customer begins to checkout.

\*\*

#### Schema

```js
paylaod: {
        type: 'BeginCheckout',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: TOTAL MONETARY VALUE OF THIS TRANSACTION >,
        currency: <STRING: 3 DIGIT CURRENCY CODE OF THE VALUE>,
        products: <Array of Product object>,
        shipping_cost: <NUMBER: SHIPPING COST>, // Optional
        tax: <NUMBER: TAX AMOUNT> // Optional
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

#### Example

```js
payload: {
        type: 'BeginCheckout',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

::: details Purchase

#### Add this event to track when a customer makes a purchase.

\*\*

<!-- ### Purchase -->

#### Schema

```js
payload: {
        type: 'Purchase',
        email: <STRING: USER EMAIL> // Optional
        phone: <STRING: USER PHONE NUMBER> // Optional
        value: <NUMBER: TOTAL MONETARY VALUE OF THIS TRANSACTION >
        currency: <STRING: 3 DIGIT CURRENCY CODE OF THE VALUE>
        products: <Array of Product object>,
        shipping_cost: <NUMBER: SHIPPING COST> // Optional
        tax: <NUMBER: TAX AMOUNT> // Optional
        transaction_id: <STRING: UNIQUE ID OF THIS TRANSACTION> // Optional
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

#### Example

```js
payload: {
        type: 'Purchase',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        shipping_cost: 5.0,
        tax: 2.5,
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

<!-- ### Refund -->

::: details Refund

#### Add this event to track when a customer makes a refund.

\*\*

#### Schema

```js
payload:{
        type: 'Refund',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM >,
        currency: <STRING: CURRENCY OF THE VALUE>,
        products: <Array of Product object>,
        transaction_id:<STRING: UNIQUE ID OF THIS TRANSACTION> // Optional,
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

#### Example

```js
payload: {
        type: 'Refund',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        transaction_id: 'TRS123',
        products: [
          {
            id: 'SKU-345',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'Blue',
            description: "Men's blue formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
          {
            id: 'SKU-346',
            name: 'Formal Shirt',
            category: "Apparel, Men's Clothing",
            variant: 'White',
            description: "Men's white formal shirt",
            quantity: 2,
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

::: details Search

#### Add this event to the search bar of your site to track when an user searches for term or product.

\*\*

<!-- ### Search -->

#### Schema

```js
payload: {
        type: 'Search',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        item_id: <STRING: ITEM ID OF THE SHARED ITEM> // Optional
        search_term: <STRING: SEARCH TERM>, // Optional
    }
```

#### Example

```js
payload: {
        type: 'Search',
        email: 'john@example.com',
        phone: '+13425784032',
        search_term: 'Flowers',
    }
```

:::

::: details Share

#### Add this event to share buttons on your site to track when an user share something from your site.

\*\*

<!-- ### Share -->

### Schema

```js
payload: {
        type: 'Share',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        item_id: <STRING: ITEM ID OF THE SHARED ITEM> // Optional
        share_method: <STRING: SHARE METHOD>, // Optional
    }
```

#### Example

```js
payload: {
        type: 'Share',
        email: 'john@example.com',
        phone: '+13425784032',
        share_method: 'Facebook',
    }
```

:::

<!-- ### Subscribe -->

::: details Subscribe

#### Add this event to track when a customer subscribes to a plan.

\*\*

#### Schema

```js
paylad:{
        type: 'Subscribe',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: TOTAL MONETARY VALUE OF THIS TRANSACTION >,
        currency: <STRING: 3 DIGIT CURRENCY CODE OF THE VALUE>,
        predicted_ltv: <NUMBER: PREDICTED LTV OF THIS SUBSCRIPTION>
        products: <Array of Product object>,
    }
```

#### Product Object

```js
{
  /** Required: Unique id of product */
  id: string;

  /** Optional: Product Name eg. "Shirt" */
  name: string;

  /** Optional: Product Category
   * eg. "Apparel" or "Apparel, Men's Clothing" */
  category: string;

  /** Optional: Product's variant eg. "Blue" */
  variant: string;

  /** Optional: Quantity of this product added to cart or purchased eg. 5 */
  quantity: number;

  /** Optional: Price of the Product eg. 7.59 */
  price: number;

  /** Optional: Description of the Product */
  description: string;

  /** Optional: Any coupon used through checkout */
  coupon: string;

  /** Optional: Any monetary discount added to the product
   * eg. if 5 USD discount is added, discount value should be 5.00.
   * If any percentage discount is added, you need to convert the percentage to monetary value*/
  discount: number;
}
```

#### Example

```js
payload: {
        type: 'Subscribe',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 10.0,
        currency: 'USD',
        products: [
          {
            id: 'Plan-034',
            name: 'Premium',
            description: 'Unlimited Streaming',
            price: 10.0,
            coupon: 'HAPPY10',
            discount: 2.0,
          },
        ],
    }
```

:::

<!-- ### Lead -->

::: details Lead

#### Schema

#### Add this event to your lead form’s CTA button to track information when an user submits a lead form.

\*\*

```js
paylaod: {
        type: 'Lead',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: TOTAL MONETARY VALUE OF THIS LEAD >, // Optional
        currency: <STRING: 3 DIGIT CURRENCY CODE OF THE VALUE>, // Optional
    }
```

#### Example

```js
payload:  {
        type: 'Lead',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
    }
```

:::

<!-- ### Submit Application -->

::: details Submit Application

#### Add this event to your application form’s CTA button to track information when an user submits an application form.

\*\*

#### Schema

```js
payload: {
        type: 'SubmitApplication',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
        application_id: <STRING: UNIQUE ID OF THE APPLICATION>, // Optional
    }
```

#### Example

```js
payload:  {
        type: 'SubmitApplication',
        email: 'john@example.com',
        phone: '+13425784032',
    }
```

:::

<!-- ### Contact -->

::: details Contact

#### Add this event to a contact form to track when a customer wants to contact your business.

\*\*

#### Schema

```js
payload: {
        type: 'Contact',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
payload:{
        type: 'Contact',
        email: 'john@example.com',
        phone: '+13425784032',
    }
```

:::

::: details Donate

#### Add this event to track when someone donates to your organization.

\*\*

<!-- ### Donate -->

#### Schema

```js
payload:{
        type: 'Donate',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
payload: {
        type: 'Donate',
        email: 'john@example.com',
        phone: '+13425784032',
    }
```

:::

<!-- ### Schedule -->

::: details Schedule

#### Add this event to track when someone schedules a call or meeting with your business.

\*\*

```js
payload: {
        type: 'Schedule',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
payload:  {
        type: 'Schedule',
        email: 'john@example.com',
        phone: '+13425784032',
    }
```

:::

## Custom Events

#### It has no fixed payload schema and it can be build using any custom parameters

```js

  payload:{
    type: "share_image",
    "image_name": name,
    "full_text": text,
  }

```
