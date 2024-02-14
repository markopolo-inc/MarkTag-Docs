# Manual Logging with MarkTag

This guide shows you how to log events in your app. You can track both predefined events and custom events with MarkTag

## Predefined Events

After you have created a `MarkTag` instance, you can start logging events

### Log Purchase

```dart
await MarkTag.instance.logPurchase(
    currency: "USD",
    value: 120,
    tax: 5.34,
    coupon: "FLASH_SALE",
    items: [
        MarkTagEventItem(
            id: "38a9a920-41d9-415e-9b1c-a6ef9b61ee61",
            name: "Keychron K2 Pro",
            price: 120,
            currency: "USD",
            quantity: 1,
            category: "keyboard",
            metadata: {
                "categoryId": "061b61ca-5830-400e-9b74-b374d445b309"
            }
        )
    ]
)
```

### Log Page View

```dart
await MarkTag.instance.logPageView(name: "/dashboard");
```

### Log View Item

```dart
await MarkTag.instance.logViewItem(
    currency: "USD",
    value: 122,
    items: [
        MarkTagEventItem(
            id: "38a9a920-41d9-415e-9b1c-a6ef9b61ee61",
            name: "Blue Hoodie",
            price: 122,
            currency: "USD",
            quantity: 1,
            category: "winter",
            metadata: {
                "categoryId": "061b61ca-5830-400e-9b74-b374d445b309"
            }
        )
    ]
)
```

### Log Login

```dart
await MarkTag.logLogin(
    method: "email",
    metadata: {
        "userName": "John Doe",
        "email": "john@email.com",
    }
)
```

### Other predefined events:

1. logAddToCart
2. logRemoveFromCart
3. logShare
4. logSignUp

## Custom Events

```dart
await MarkTag.instance.logEvent(
    name: "share_image",
    metadata: {
        "image_name": name,
        "full_text": text,
    },
);
```
