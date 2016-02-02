# Markdown strip tags

Strip tags module for Markdown

# Install

`npm install markdown-strip-tags --save`

# Example

## node 

```js
var md_strip_tags = require('markdown-strip-tags');
var text = "my_mail@example.com";
var res = md_strip_tags(text);
console.log(res); // my\_mail@example.com
```

## browser

```html
<script src="markdown-strip-tags.js"></script>
<script>
    var text = "my_mail@example.com";
    var res = md_strip_tags(text);
    console.log(res); // my\_mail@example.com
</script>
```

# Copylefts

Code originally written by Artur Atnagulov <i@atnartur.ru> under MIT License.

