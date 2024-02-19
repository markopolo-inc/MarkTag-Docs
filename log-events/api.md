# Get started with MarkTag REST API

This quickstart shows you how to use MarkTag REST API to send event.

## Prequisites

You must setup mark tag container to send event data to your tag container.
https://app.markopolo.ai/marktag/pixel

## Guide

Once you've successfully created your MarkTag container, proceed to these steps to send events to your tag container.

### Endpoint

```
POST /mark
```

### Request Headers

```
- Host: https://tag.your-domain.com
- User-Agent: userAgent
- Content-event: application/json
- Cookie: _fbp=fbpValue; _fbc=fbcValue; _ttp: ttpValue


```

## Cookies Used on This Website

This table provides information about the cookies used on this website.

| Cookie Name         | Description                                                                                                    | Required |
|---------------------|----------------------------------------------------------------------------------------------------------------- | -------- |
| `_fbp`              | When the Meta Pixel is installed on a website, and the Pixel uses first-party cookies, the Pixel automatically saves a unique identifier to an _fbp cookie for the website domain if one does not already exist. See [here](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/) for more information. | No       |
| `_fbc`              | When a user clicks on an ad on Facebook, the link sometimes includes a fbclid query parameter. When the user lands on the target website, if the website has a Meta Pixel that uses first-party cookies, the Pixel automatically saves the fbclid query parameter to an _fbc cookie for that website domain. See [here](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/) for more information. | No       |
| `_ttp_`             | To measure and improve the performance of your advertising campaigns and to personalize the user's experience (including ads) on TikTok. See [here](https://ads.tiktok.com/help/article/using-cookies-with-tiktok-pixel?lang=en) for more information. | No       |


### Request Body

```js

{
    "x-cf-ip": IP,  //user ip address
    "x-cf-loc": Location, //user country code
    "pageUrl": PageURL, // page URL from where event triggered
    "event": Event, // event event
    "muid": MUID, //unique identifier of each user
    "mt_ref_src":"", //optional
    //add other body depending on event type
}
```


::: info
Additional body data needs to be sent depending on the event type
:::

## Event Data Fields

This table summarizes the fields included in the event data payload:

| Field Name                             | Description                                  | Required |
| -------------------------------------- | -------------------------------------------- | -------- |
| `x-cf-ip`                              | User IP address                              | Yes      |
| `x-cf-loc`                             | User location (country code)                 | Yes      |
| `pageUrl`                              | Page URL where the event was triggered       | Yes      |
| `event`                                | Specific event that occurred                 | Yes      |
| `muid`                                 | Unique identifier for each user              | Yes      |
| `mt_ref_src`                           | Optional referrer source                     | No       |
| **Additional Fields (Event Specific)** | Additional fields specific to the event type | Varies   |

**Note:** The "Additional Fields" section will vary depending on the specific event type. Please refer to the documentation for your specific event types to determine the additional fields required or available mentioned below.

### Curl Example

This is a sample of sending event data to the tag server

```curl

curl --location 'https://tag.your-domain.com' \
--header 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \
--header 'Content-event: application/json' \
--header 'Cookie: _muid=value; \
--data-raw '{
    "x-cf-ip": "101.2.167.255",
    "x-cf-loc": "BD",
    "pageUrl": "https://test-wp.markopoloai.com/checkout/",
    "event": "Purchase",
    "email": "john@example.com",
    "muid": "ce2825f6-931d-4011-91bc-70dc7b535e10",
    "shipping_cost": "25",
    "tax": 0,
    "value": 113,
    "currency": "USD",
    "mt_ref_src":"",
    "products": [
        {
            "id": 96,
            "name": "Mark-test-prod",
            "variant": "",
            "quantity": 4,
            "price": 12
        },
        {
            "id": 36,
            "name": "new",
            "variant": "",
            "quantity": 2,
            "price": 20
        }
    ]
}'
```

---



## Standard Events

---

::: details **View Content**

---

##### Add this event code to each page of your site to track when a customer visits it. MarkTag automatically collects the page URL and page information

\*\*

#### Schema

```js
{
  event: "ViewContent",
  email: `<STRING: USER EMAIL>`; // Optional
  phone: `<STRING: USER PHONE NUMBER>`; // Optional
}
```

#### Example

```js
 {
        event:"ViewContent",
        email: 'john@example.com',
        phone: '+13425784032',
    }
```

<!-- | Payload      |      event      |  Required |
| ------------- | :-----------: | ----: |
| event     | string| true |
| email      |   string    | false |
| phone |   string    |    false | -->

---

:::

<!-- ### View Item -->

::: details View Item

---

#### Add this event code to an item on your site to track when a customer clicks it to view details or add it to the item’s detail page. MarkTag automatically collects the page URL and page information.

<!--
| Payload      |      event      |  Required | Description |
| ------------- | :-----------: | ----: |             ----: |
| `event`        | string        | true     | Event event |
| `email`       | string        | false    | User Email Address |
| `phone`       | string        | false    | User Phone Number |
| `value`       | number       | false     |  Value of this item  |
| `currency`    | string        | false     | Currency |
| `content_event` | enum('product' , 'image' , 'video' , 'blog') or any custom string | false |
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
 {
        event: 'ViewItem',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM >, // Optional
        currency: <STRING: CURRENCY OF THE VALUE>, // Optional
        products: <Array of Product object>, // Optional
        content_event: <'product' | 'image' | 'video' | 'blog' | string> // Optional
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



 {
        event: 'ViewItem',
        email: 'john@example.com',
        phone: '+13425784032',
        value: 40.0,
        currency: 'USD',
        content_event: 'product',
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
 {
        event: 'Login',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
 {
          event: 'Login',
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
 {
        event: 'Signup',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
 {
          event: 'Signup',
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
 {
        event: 'CompleteRegistration',
        email: '<USER EMAIL>', // Optional
        phone: '<USER PHONE NUMBER>', // Optional
        // You can add additional key-value pairs
    }
```

#### Example

```js
paload: {
          event: 'CompleteRegistration',
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
{
        event: 'StartTrial',
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
   {
        event: 'StartTrial',
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
 {
        event: 'AddPaymentInfo',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        payment_event: <STRING: event OF PAYMENT>, // Optional
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
{
        event: 'AddPaymentInfo',
        email: 'john@example.com',
        phone: "+13425784032",
        payment_event: "Credit Card"
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
 {
        event: 'AddShippingInfo',
        email: '<STRING : USER EMAIL>', // Optional
        phone: '<STRING: USER PHONE NUMBER>', // Optional
        shipping_tier: 'STRING: <event OF SHIPPING>', // Optional
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
 {
        event: 'AddShippingInfo',
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
{
        event: 'ViewCart',
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
 {
        event: 'ViewCart',
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
 {
        event: 'AddToCart',
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
 {
        event: 'AddToCart',
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
{
        event: 'AddToWishlist',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: VALUE OF THIS ITEM >,
        currency: <STRING: CURRENCY OF THE VALUE>,
        products: <Array of Product object>,
    }
```

#### Example

```js
 {
        event: 'AddToWishlist',
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
 {
        event: 'RemoveFromCart',
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
{
        event: 'RemoveFromCart',
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
        event: 'BeginCheckout',
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
 {
        event: 'BeginCheckout',
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
 {
        event: 'Purchase',
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
 {
        event: 'Purchase',
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
{
        event: 'Refund',
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
 {
        event: 'Refund',
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
 {
        event: 'Search',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        item_id: <STRING: ITEM ID OF THE SHARED ITEM> // Optional
        search_term: <STRING: SEARCH TERM>, // Optional
    }
```

#### Example

```js
 {
        event: 'Search',
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
 {
        event: 'Share',
       email: <STRING: USER EMAIL>   , // Optional
       phone:<STRING: USER PHONE NUMBER>, // Optional
        item_id: <STRING: ITEM ID OF THE SHARED ITEM> // Optional
        share_method: <STRING: SHARE METHOD>, // Optional
    }
```

#### Example

```js
 {
        event: 'Share',
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
        event: 'Subscribe',
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
 {
        event: 'Subscribe',
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
        event: 'Lead',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
        value: <NUMBER: TOTAL MONETARY VALUE OF THIS LEAD >, // Optional
        currency: <STRING: 3 DIGIT CURRENCY CODE OF THE VALUE>, // Optional
    }
```

#### Example

```js
  {
        event: 'Lead',
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
 {
        event: 'SubmitApplication',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
        application_id: <STRING: UNIQUE ID OF THE APPLICATION>, // Optional
    }
```

#### Example

```js
  {
        event: 'SubmitApplication',
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
 {
        event: 'Contact',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
{
        event: 'Contact',
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
{
        event: 'Donate',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
 {
        event: 'Donate',
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
 {
        event: 'Schedule',
        email: <STRING: USER EMAIL>, // Optional
        phone: <STRING: USER PHONE NUMBER>, // Optional
    }
```

#### Example

```js
  {
        event: 'Schedule',
        email: 'john@example.com',
        phone: '+13425784032',
    }
```

:::

## Custom Events

#### It has no fixed payload schema and it can be build using any custom parameters

```js

  {
    event: "share_image",
    "image_name": name,
    "full_text": text,
  }

```
