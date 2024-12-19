# Log Events

Make sure you have [created a MarkTag container](https://app.markopolo.ai/marktag/pixel), [installed](./installation.md), and initialized the SDK before logging events.

## Prerequisites

Schema definition for `MarkTagEventItem`:

| Key      | Type     | Required | Description                                               |
| -------- | -------- | -------- | --------------------------------------------------------- |
| id       | `string` | ❌       | Unique id of product                                      |
| name     | `string` | ❌       | Product Name eg. "Gold Sword"                             |
| category | `string` | ❌       | Product Category eg. "Weapons"                            |
| variant  | `string` | ❌       | Product's variant eg. "Golden"                            |
| quantity | `int`    | ❌       | Quantity of this product added to cart or purchased eg. 5 |
| price    | `double` | ❌       | Price of the Product eg. 99.99                           |

## Log Custom Event

```csharp
// Simple event
Marktag.instance.LogEvent("TestEvent");

// Event with custom parameters
Marktag.instance.LogEvent("TestCustomEvent", new Dictionary<string, object>
{
    { "custom_key", "custom_value" }
});
```

You can use this method to log any event that we don't have a specific method for. For example, `PlayerDeath`, `PlayerWin`, `PlayerLose`, `EnemyKilled`, `ItemPurchased`, etc.

## Log View Item

```csharp
var items = new MarkTagEventItem[]
{
    new MarkTagEventItem 
    { 
        id = "123",
        name = "Gold Sword",
        price = 99.99,
        quantity = 1,
        category = "Weapons",
        variant = "Golden"
    }
};

Marktag.instance.LogViewItem("USD", 99.99, "weapon", items);
```

## Log View Cart

```csharp
var cartItems = new MarkTagEventItem[]
{
    new MarkTagEventItem 
    { 
        id = "123",
        name = "Gold Sword",
        price = 99.99,
        quantity = 1,
        category = "Weapons",
        variant = "Golden"
    }
};

Marktag.instance.LogViewCart("USD", 99.99, cartItems);
```

## Log Begin Tutorial

```csharp
// Simple tutorial start
Marktag.instance.LogBeginTutorial();

// With metadata
var metadata = new Dictionary<string, object>
{
    { "tutorial_id", "basic_training" },
    { "difficulty", "beginner" }
};
Marktag.instance.LogBeginTutorial(metadata);
```

## Log Complete Tutorial

```csharp
var metadata = new Dictionary<string, object>
{
    { "tutorial_id", "basic_training" },
    { "completion_time", 300 }
};
Marktag.instance.LogCompleteTutorial(metadata);
```

## Log Add To Cart

```csharp
var items = new MarkTagEventItem[]
{
    new MarkTagEventItem 
    { 
        id = "123",
        name = "Gold Sword",
        price = 99.99,
        quantity = 1,
        category = "Weapons",
        variant = "Golden"
    }
};

Marktag.instance.LogAddToCart("USD", 99.99, items);
```

## Log Begin Checkout

```csharp
var items = new MarkTagEventItem[]
{
    new MarkTagEventItem 
    { 
        id = "123",
        name = "Gold Sword",
        price = 99.99,
        quantity = 1,
        category = "Weapons",
        variant = "Golden"
    }
};

Marktag.instance.LogBeginCheckout("USD", 99.99, items, 5.99, 8.99);
```

## Log Add To Wishlist

```csharp
var items = new MarkTagEventItem[]
{
    new MarkTagEventItem 
    { 
        id = "123",
        name = "Gold Sword",
        price = 99.99,
        quantity = 1,
        category = "Weapons",
        variant = "Golden"
    }
};

var metadata = new Dictionary<string, object>
{
    { "wishlist_name", "My Gaming Wishlist" },
    { "source", "game_store" }
};
Marktag.instance.LogAddToWishlist("USD", 99.99, items, metadata);
```

## Log Login

```csharp
Marktag.instance.LogLogin("google", "user@example.com");
```

## Log Donate

```csharp
// Simple donation
Marktag.instance.LogDonate("USD", 50.00);

// Donation with metadata
var metadata = new Dictionary<string, object>
{
    { "campaign_id", "holiday2023" },
    { "donor_type", "anonymous" }
};
Marktag.instance.LogDonate("USD", 100.00, metadata);
```

## Log Initiate Checkout

```csharp
var items = new MarkTagEventItem[]
{
    new MarkTagEventItem 
    { 
        id = "123",
        name = "Gold Sword",
        price = 99.99,
        quantity = 1,
        category = "Weapons",
        variant = "Golden"
    }
};
Marktag.instance.LogInitiateCheckout("USD", 99.99, items, 5.99, 8.99);
```

## Log Signup

```csharp
var metadata = new Dictionary<string, object>
{
    { "referral_source", "friend" },
    { "user_type", "premium" }
};
Marktag.instance.LogSignup("email", "newuser@example.com", "1234567890", metadata);
```

## Log Start Trial

```csharp
var products = new[]
{
    new MarkTagEventItem
    {
        id = "premium_trial",
        name = "Premium Game Pass Trial",
        price = 0.00,
        quantity = 1,
        category = "subscription",
        variant = "7_day_trial"
    }
};

Marktag.instance.LogStartTrial(
    currency: "USD",
    value: 0.00,
    predictedLifetimeValue: 59.99,
    products: products,
    metadata: new Dictionary<string, object>
    {
        { "trial_trigger", "level_completion" },
        { "player_level", 4 },
        { "days_played", 3 }
    }
);
```

## Log Search

```csharp
Marktag.instance.LogSearch("golden weapons", new Dictionary<string, object>
{
    { "inventory_size", 12 },
    { "player_level", 4 }
});
```

## Log Share

```csharp
Marktag.instance.LogShare(
    itemId: "achievement_1",
    method: "discord",
    metadata: new Dictionary<string, object>
    {
        { "player_level", 4 },
        { "play_time_hours", 12 }
    }
);
```

## Log Subscribe

```csharp
var subscriptionProducts = new[]
{
    new MarkTagEventItem
    {
        id = "premium_monthly",
        name = "Premium Monthly Subscription",
        price = 14.99,
        quantity = 1,
        category = "subscription",
        variant = "monthly"
    }
};

var metadata = new Dictionary<string, object>
{
    { "subscription_tier", "premium" },
    { "subscription_period", "monthly" },
    { "payment_method", "credit_card" },
    { "is_auto_renewal", true }
};

Marktag.instance.LogSubscribe(
    currency: "USD",
    value: 14.99,
    predictedLifetimeValue: 179.88,
    products: subscriptionProducts,
    metadata: metadata
);
```

## Log Session Duration

::: warning
The unity SDK does not support automatic session duration logging. You need to manually log the session duration. 
The session duration is the time between the user starts the app and the user closes the app. The unit is in seconds. 
You may also need to pause and resume the session duration when the user is inactive. The event below should be called
when the user closes the app.
:::

```csharp
var sessionMetadata = new Dictionary<string, object>
{
    { "level_reached", 4 },
    { "xp_gained", 100 },
    { "game_mode", "singleplayer" },
    { "device_type", SystemInfo.deviceType.ToString() },
    { "platform", Application.platform.ToString() }
};

Marktag.instance.LogSessionDuration(
    duration: 100,
    metadata: sessionMetadata
);
```
