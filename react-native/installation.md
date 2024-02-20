# Install the React Native SDK on your app

Get started with the MarkTag react native SDK

---

1. From the root of your project, run the following command to install the sdk:

::: code-group

```bash [npm]
npm install @markopoloai/marktag-mobile-sdk
```


```bash [yarn]
yarn add @markopoloai/marktag-mobile-sdk
```

::: 

1. Once installed, you can access the MarkTag SDK plugin by importing it in your code:

```javascript [React Native]
import * as MarkTag from "@markopoloai/marktag-mobile-sdk";
```

3. Initialize MarkTag SDK:

```javascript [React Native]
MarkTag.init(tag: 'tag.your-domain.com');
```

Done! You are now able to log events with MarTag
