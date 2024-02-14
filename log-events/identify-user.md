# Identify User

Some user related attributes like location, ip, etc. are automatically tracked. For farther customer identification, use the `identify` method.

```dart
await MarkTag.instance.identify("user@email.com", {
    id: "55cd3ba4-21e4-42c7-94e2-e48022c3e1fc",
    phone: "8800000000",
    name: "User",
    age: 23,
    gender: "male",
})
```

These information will be automatically passed with each events to identify the user.
