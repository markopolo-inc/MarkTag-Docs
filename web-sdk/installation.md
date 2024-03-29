# Add the MarkTag to your web application

1. Install and init MarkTag Script to your web application

```js
  <script>

	  window.mtrem = window.mtrem || [];
	  function mtag() { mtrem.push(arguments) };
	  mtag("init", "{{TAG_DOMAIN}}", {"consent":true});

  </script>

  <script async type="text/javascript" src="{{TAG_DOMAIN}}/script" />
```
Make sure to replace {{TAG_DOMAIN}} with your marktag domain from app.markopolo.ai  
Done! You are now able to log events with MarkTag
