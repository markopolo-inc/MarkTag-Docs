# Install the Unity SDK on your app

Get started with the MarkTag Unity SDK

---

1. Download the Unity SDK from here: [MarkTag Unity SDK Asset](https://github.com/markopolo-inc/marktag-docs/releases/download/marktag-sdk-v1.0.0/marktag-sdk-unity.unitypackage)

2. Open your Unity project and go to `Assets` > `Import Package` > `Custom Package`

3. Select the downloaded MarkTag Unity SDK Asset and import it into your project

4. Once imported, you can access the MarkTag SDK plugin by importing it in your code:


```csharp [Unity]
Marktag.instance.Initialize("tag.your-domain.com");
```

::: warning
This method must be called before any other MarkTag method. Make sure to call it somewhere that will be executed first and will live for the duration of the app.
:::

::: tip
You can get the tag from your Markopolo dashboard at [https://app.markopolo.ai/marktag/pixel](https://app.markopolo.ai/marktag/pixel)
:::

Done! You are now able to log events with MarTag

