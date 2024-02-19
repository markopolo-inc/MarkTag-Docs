# Usage

Once you've successfully created your MarkTag container, proceed to these steps to send events to your tag container.

## Prerequisites

Schema definition for products

| Key         | Type     | Required | Description                                                 |
| ----------- | -------- | -------- | ----------------------------------------------------------- |
| id          | `string` | ❌       | Unique id of product                                        |
| name        | `string` | ❌       | Product Name eg. "Shirt"                                    |
| category    | `string` | ❌       | Product Category eg. "Apparel" or "Apparel, Men's Clothing" |
| variant     | `string` | ❌       | Product's variant eg. "Blue"                                |
| quantity    | `number` | ❌       | Quantity of this product added to cart or purchased eg. 5   |
| price       | `number` | ❌       | Price of the Product eg. 7.59                               |
| description | `string` | ❌       | Description of the Product                                  |
| coupon      | `string` | ❌       | Any coupon used through checkout                            |
| discount    | `number` | ❌       | Any monetary discount added to the product                  |

## View Content

Add this event code to each page of your site to track when a customer visits it. MarkTag automatically collects the page URL and page information

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

## View Item

Add this event code to an item on your site to track when a customer clicks it to view details or add it to the item’s detail page. MarkTag automatically collects the page URL and page information.

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

## Login

Add this event to track a customer login.

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

## Signup

Add this event to track a new customer signup

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

## Complete Registration

Add this event to track when a customer completes registration.

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
{
    event: 'CompleteRegistration',
    email: 'john@example.com',
    phone: '+13425784032',
}
```

## Start Trial

Add this event to track when a customer starts a trial

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

<!-- ### Add Payment Info -->

## Add Payment Info

Add this event to track when a customer adds payment info.

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

## Add Shipping Info

#### Add this event to track when a customer adds shipping info

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

<!-- ### View Cart -->

## View Cart

Add this event code to an item on your site to track when a customer views their cart.

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

<!-- ### Add To Cart -->

## Add To cart

Add this event code to an item on your site to track when a customer adds it to their cart.

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

<!-- ### Add To Wishlist -->

## Add To Wishlist

Add this event code to an item on your site to track when a customer adds it to their wishlist.

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

<!-- ### Remove From Cart -->

## Remove From Cart

Add this event code to items in the cart on your site to track when a customer removes them from their cart.

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

<!-- ### Begin Checkout -->

## Begin Checkout

Add this event to your site to track when a customer begins to checkout.

#### Schema

```js
 {
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

## Purchase

Add this event to track when a customer makes a purchase.

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

<!-- ### Refund -->

## Refund

Add this event to track when a customer makes a refund.

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

## Search

Add this event to the search bar of your site to track when an user searches for term or product.

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

## Share

Add this event to share buttons on your site to track when an user share something from your site.

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

<!-- ### Subscribe -->

## Subscribe

Add this event to track when a customer subscribes to a plan.

#### Schema

```js
{
    event: 'Subscribe',
    email: <STRING: USER EMAIL>, // Optional
    phone: <STRING: USER PHONE NUMBER>, // Optional
    value: <NUMBER: TOTAL MONETARY VALUE OF THIS TRANSACTION >,
    currency: <STRING: 3 DIGIT CURRENCY CODE OF THE VALUE>,
    predicted_ltv: <NUMBER: PREDICTED LTV OF THIS SUBSCRIPTION>
    products: <Array of Product object>,
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

<!-- ### Lead -->

## Lead

Add this event to your lead form’s CTA button to track information when an user submits a lead form.

#### Schema

```js
{
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

<!-- ### Submit Application -->

## Submit Application

Add this event to your application form’s CTA button to track information when an user submits an application form.

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

<!-- ### Contact -->

## Contact

Add this event to a contact form to track when a customer wants to contact your business.

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

## Donate

Add this event to track when someone donates to your organization.

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

<!-- ### Schedule -->

## Schedule

Add this event to track when someone schedules a call or meeting with your business.

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

## Custom Events

It has no fixed payload schema and it can be build using any custom parameters

```js
{
    event: "share_image",
    "customParameter1": "value1",
    "customParameter2": "value2",
}
```
