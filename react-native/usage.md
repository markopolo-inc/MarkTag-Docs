# Log events

Make sure you have [created a MarkTag container](https://app.markopolo.ai/marktag/pixel), [installed](./installation.md), and initialized the SDK before logging events.

## Prerequisites

Schema definition for `MarkTagEventItem`:

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

## Log Custom Event

```javascript
await MarkTag.logEvent({
  event: "CustomEvent", // Required
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log View Item

```javascript
await MarkTag.logViewItem({
  currency: "USD",
  value: 119.99,
  type: "product",
  items: [
    // MarkTagEventItem[]
    {
      id: "edea4360-5752-4b74-a8bf-0162fc809f06",
      name: "Keychron K2 Pro",
      description: "Mechanical Keyboard",
      variant: "VA/Black",
      coupon: "10_OFF",
      discount: 9.99,
      price: 119.99,
      currency: "USD",
      quantity: 1,
      category: "keyboard",
    },
  ],
});
```

## Log View Content

Log view content takes in any parameters you provide.

```javascript
await MarkTag.logViewContent({
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Page View

```javascript
await MarkTag.logPageView("/dashboard");
```

## Log View Cart

```javascript
await MarkTag.logViewCart({
  currency: "USD",
  value: 119.99,
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
  items: [
    {
      id: "edea4360-5752-4b74-a8bf-0162fc809f06",
      name: "Keychron K2 Pro",
      description: "Mechanical Keyboard",
      variant: "VA/Black",
      coupon: "10_OFF",
      discount: 9.99,
      price: 119.99,
      currency: "USD",
      quantity: 1,
      category: "keyboard",
    },
  ],
});
```

## Log Begin Tutorial

```javascript
await MarkTag.logBeginTutorial({
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Complete Tutorial

```javascript
await MarkTag.logCompleteTutorial({
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Contact

```javascript
await MarkTag.logContact({
  email: "user@email.com", // Optional
  phone: "xxxxxxxxxxx", // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Find Location

```javascript
await MarkTag.logFindLocation({
  location: "Dhaka", // Optional
  lat: 23.8103, // Optional
  long: 90.4125, // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Add Payment Info

```javascript
await MarkTag.logAddPaymentInfo({
  paymentType: "credit_card", // Optional
  currency: "USD", // Optional
  value: 120, // Optional
  items: MarkTagEventItem[], // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Add Shipping Info

```javascript
await MarkTag.logAddShippingInfo({
  shippingTier: "standard", // Optional
  currency: "USD", // Optional
  value: 120, // Optional
  items: MarkTagEventItem[], // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Add to Wishlist

```javascript
await MarkTag.logAddToWishlist({
  currency: "USD",
  value: 120,
  products: MarkTagEventItem[], // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Begin Checkout

```javascript
await MarkTag.logBeginCheckout({
  currency: "USD",
  value: 120,
  products: MarkTagEventItem[], // Optional
  shippingCost: 10, // Optional
  tax: 5, // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Add To Cart

```javascript
await MarkTag.logAddToCart({
  currency: "USD",
  value: 120,
  items: MarkTagEventItem[], // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Customize Product

```javascript
await MarkTag.logCustomizeProduct({
  currency: "USD", // Optional
  value: 120, // Optional
  items: MarkTagEventItem[], // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Initiate Checkout

```javascript
await MarkTag.logInitiateCheckout({
  currency: "USD",
  value: 120,
  items: MarkTagEventItem[], // Optional
  shippingCost: 10, // Optional
  tax: 5, // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Donate

```javascript
await MarkTag.logDonate({
  currency: "USD", // Optional
  value: 120, // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Lead

```javascript
await MarkTag.logLead({
  currency: "USD", // Optional
  value: 120, // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Login

```javascript
await MarkTag.logLogin({
  method: "email", // Optional
  email: "user@email.com", // Optional
  phone: "xxxxxxxxxxx", // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Signup

```javascript
await MarkTag.logSignup({
  method: "email", // Optional
  email: "user@email.com", // Optional
  phone: "xxxxxxxxxxx", // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Purchase

```javascript
await MarkTag.logPurchase({
  currency: "USD", // Optional
  value: 120,
  transactionId: "1234567890", // Optional
  tax: 5.34, // Optional
  coupon: "FLASH_SALE", // Optional
  items: MarkTagEventItem[],
});
```

## Log Refund

```javascript
await MarkTag.logRefund({
  currency: "USD", // Optional
  value: 120, // Optional
  transactionId: "1234567890", // Optional
  items: MarkTagEventItem[],
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Remove From Cart

```javascript
await MarkTag.logRemoveFromCart({
  currency: "USD",
  value: 120,
  items: MarkTagEventItem[], // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Schedule

```javascript
await MarkTag.logSchedule({
  date: "2022-12-31", // Optional
  time: "12:00:00", // Optional
  timezone: "Asia/Dhaka", // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Search

```javascript
await MarkTag.logSearch({
  searchTerm: "keyboard", // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Share

```javascript
await MarkTag.logShare({
  itemId: "1234567890", // Optional
  method: "facebook", // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Start Trial

```javascript
await MarkTag.logStartTrial({
  currency: "USD",
  value: 120,
  predictedLifetimeValue: 1000, // Optional
  products: MarkTagEventItem[], // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Submit Application

```javascript
await MarkTag.logSubmitApplication({
  applicationId: "66b38854-7069-49fa-87d3-1c1a0754f496", // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```

## Log Subscribe

```javascript
await MarkTag.logSubscribe({
  currency: "USD",
  value: 120,
  predictedLifetimeValue: 1000, // Optional
  products: MarkTagEventItem[], // Optional
  customParameter1: "value", // Custom parameters
  customParameter2: "value", // Custom parameters
});
```
