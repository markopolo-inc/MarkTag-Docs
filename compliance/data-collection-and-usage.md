# Set data collection and usage

In some cases, you may wish to temporarily or permanently disable collection of events data, such as to collect end-user consent or to fulfill legal obligations. MarkTag offers multiple options for disabling and deactivating events collection. Used together, they support many typical use cases.

## Opt out

If you want to offer a way for the user to opt out of analytics, you can use the `setConsent()` call.

```dart
await MarkTag.instance.setConsent(granted: false);
```

This will completely disable event tracking for this user.

## Cookieless Tracking 

The plugin uses cookies by default. If this is turned off, user information like `userId` will not be stored in local storage.

```dart
await MarkTag.instance.useCookies(false);
```
