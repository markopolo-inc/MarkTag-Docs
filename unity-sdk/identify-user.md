# Identify user

MarkTag automatically assigns an unique ID to every user. But you can add more information to farther classify the user.

```csharp [Unity]
Marktag.instance.SetUser("test@test.com", "1234567890");
```

Note that if you call `Marktag.LogLogin()` or `Marktag.LogSignup()` upon authentication, you can skip this step. But you can still use this when you expect the user to be already logged in to your app.
