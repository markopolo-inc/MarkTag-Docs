# Add the MarkTag to your web application

1. Install and init MarkTag Script to your web application

```js
  <script>

	  window.mtrem = window.mtrem || [];
	  function mtag() { mtrem.push(arguments) };
	  mtag("init", "tag.your-domain.com", {"consent":true});

  </script>

  <script async type="text/javascript" src="tag.your-domain.com/script" />
```

Done! You are now able to log events with MarTag
