# Get started with MarkTag mobile SDK

This quickstart shows you how to add MarkTag SDK to your app and begin logging events.

## Add the MarkTag SDK to your flutter project

1. From the root of your project, run the following command to install the plugin:

::: code-group

```bash [React Native]
$ npm install marktag-mobile-sdk
```

```bash [Flutter]
$ flutter pub add marktag_mobile_sdk
```

:::

1. Once installed, you can access the MarkTag SDK plugin by importing it in your code:

::: code-group

```javascript [React Native]
import * as MarkTag from "marktag-mobile-sdk";
```

```dart [Flutter]
import 'package:marktag_mobile_sdk/marktag_mobile_sdk.dart';
```

:::

3. Initialize MarkTag SDK:

::: code-group

```javascript [React Native]
MarkTag.init(tag: 'tag.your-domain.com');
```

```dart [Flutter]
MarkTag mark = MarkTag.instance.init(tag: 'tag.your-domain.com');
```

:::

Done! You are now able to log events with MarTag
