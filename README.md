# jQuery

## What Is jQuery

[jQuery](https://api.jquery.com/) is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.

*	“Cross browser” - works the same in all* browsers.

*	Allows:
	*	Document traversal
	*	CSS Manipulation
	*	Event Handling
	*	Animation
	*	and more!

<img width="1000" alt="jquery-dom" src="https://user-images.githubusercontent.com/5384023/51519572-6a2c5880-1e32-11e9-99a0-000e18b63417.png">

jQuery is a javascript *Library*

A library is a large collection of code that gives us functionality that we don't have to write ourselves!  Let's go to the jQuery website and look at the source code.

It's just javascript!

## Including jQuery

Adding jQuery to your website

1.  Download and link to the file
```html
<script src="js/jquery-3.3.1.min.js"></script>
``` 

2.  Link to a remote version (CDN)

```html
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
``` 

![images/jquery-intro-1.png](images/jquery-intro-1.png)

![images/jquery-intro-2.png](images/jquery-intro-2.png)

## jQuery Syntax vs DOM Syntax

__Syntax:__ Spelling and grammar rules of a programming language.


Note:
Like with any language, there are formal rules around how to write it. This is the syntax.

<img width="1000" alt="jquery-select" src="https://user-images.githubusercontent.com/5384023/51520047-c0e66200-1e33-11e9-9d73-04d2d582e45b.png">

![images/jquery-select.png](images/jquery-select.png)

![images/jquery-select-1.png](images/jquery-select-1.png)

![images/jquery-select-2.png](images/jquery-select-2.png)

![images/jquery-select-3.png](images/jquery-select-3.png)

![images/jquery-select-4.png](images/jquery-select-4.png)

![images/jquery-select-5.png](images/jquery-select-5.png)

![images/jquery-select-6.png](images/jquery-select-6.png)

<img width="1000" alt="jquery-css-select" src="https://user-images.githubusercontent.com/5384023/51520072-d3609b80-1e33-11e9-90f0-3798bb5b4966.png">

### $

The Dollar Sign

```js
// longhand syntax
jQuery('p')

// shorthand syntax
$('p')

// use modern CSS selectors
$('main .title > .sub-title')
```

[jQuery Cheat Sheet](https://oscarotero.com/jquery/) provides us with a list of selector types we can use.  Notice how they are the same as our CSS selectors.

### Lab: jQuery Selectors

Open [exercise/jquery-selectors/index.html](exercise/jquery-selectors/index.html) in your browser. 

Open [exercise/jquery-selectors](exercise/jquery-selectors/) folder in your text editor.

Complete the exercises in [exercise/jquery-selectors/main.js](exercise/jquery-selectors/main.js).  You will see the results in the browser console.

Read more about [jQuery selectors](https://learn.jquery.com/using-jquery-core/selecting-elements/)

## Manipulating the DOM

![images/jquery-method-1.png](images/jquery-method-1.png)

![images/jquery-method-3.png](images/jquery-method-3.png)

![images/jquery-method-2.png](images/jquery-method-2.png)


![images/jquery-method-4.png](images/jquery-method-4.png)

![images/jquery-method-5.png](images/jquery-method-5.png)

![images/jquery-method-6.png](images/jquery-method-6.png)

![images/jquery-method-7.png](images/jquery-method-7.png)

![images/jquery-method-8.png](images/jquery-method-8.png)

![images/jquery-method-9.png](images/jquery-method-9.png)

![images/jquery-method-10.png](images/jquery-method-10.png)

![images/jquery-method-11.png](images/jquery-method-11.png)

![images/jquery-method-12.png](images/jquery-method-12.png)

![images/jquery-method-13.png](images/jquery-method-13.png)

![images/jquery-method-14.png](images/jquery-method-14.png)

### Getters

Once we select an element, we may want to get information from it like the text in the element or the value in a form.  jQuery provides us with methods that we can use to get information from an element.

**Example 1**
```html
<h1>Hello World</h1>
```
```js
$('h1').text() // Hello World
```

**Example 2**
```html
<ul>
    <li>Riyadh</li>
    <li>Boston</li>
    <li>Jeddah</li>
</ul>
```
```js
$('ul').html() // ??
```

### Setters

When we select an element, may want to change the information like update the text in the element or add html to an element.  jQuery provides us with methods that we can use to set information of an element.

**Example 1**
```html
<h1>Hello World</h1>
```
```js
$('h1').text('Goodbye World')
```

**Example 2**
```html
<ul>
    <li>Riyadh</li>
    <li>Boston</li>
    <li>Jeddah</li>
</ul>
```
```js
$('ul').html('<li>Home Town</li>') 
```

Notice the pattern of getters and setters.
```js
// GET
$('h1').text()
// SET
$('h1').text('Goodbye World')

// GET
$('ul').html() 
// SET
$('ul').html('<li>Home Town</li>') 
```

Read more about [jQuery DOM manipulation methods](https://learn.jquery.com/using-jquery-core/manipulating-elements/)

[jQuery Cheat Sheet](https://oscarotero.com/jquery/) provides us with a list of manipulation methods we can use.  



Another 
Discuss the difference between
- [.text()](http://api.jquery.com/text/)
- [.html()](http://api.jquery.com/html/)
- [.append()](http://api.jquery.com/append/)
- [.prepend()](http://api.jquery.com/prepend/)
- [.after()](http://api.jquery.com/after/)
- [.before()](http://api.jquery.com/before/)

We can also manipulate our html attributes or css properties with jQuery.

**Example 1**
```html
<img src='https://picsum.photos/200/300'>
```
```js
// GET
$('img').attr('src') // 'https://picsum.photos/200/300'

// SET
$('img').attr('src', 'https://picsum.photos/200/100')
```

**Example 2**
```html
<p id='main-text'>Hello World</p>
```
```js
// GET
$('p').attr('id') // 'main-text'

// SET
$('p').attr('id', 'new-class') 
```

Discuss the difference between
- [.attr()](http://api.jquery.com/attr/)
- [.css()](http://api.jquery.com/css/)
- [.addClass()](http://api.jquery.com/addClass/)
- [.removeClass()](http://api.jquery.com/removeClass/)
- [.toggleClass()](http://api.jquery.com/toggleClass/)
- [.hasClass()](http://api.jquery.com/hasClass/)

### Creating Elements in jQuery
To create a brand new element in jQuery you use this sytax:

```js
$('<h2></h2>')
```

or this syntax:

```js
$('<h2/>')
```

Kind of like a closing tag, but notice that the `/` is at the end!  You can use either, but I prefer the second one since it is shorter.

After creating an element you can assign it to a variable and chain other jQuery methods to it to customize it.  Like this.

```js
var $helloWorld = $('<h2/>').addClass('hello').text('Hello World')
```

But this isn't very useful on it's own.  This just creates the element in memory?  How do we append it to something that already exists on the dom?

1. First we select the parent element we want to append to.
2. Then we create the element and set it's attributes.
3. Then we append the element to the selected parent.

like this:

1.
```js
var $container = $('.container')
```

2.
```js
var $helloWorld = $('<h2/>').addClass('hello').text('Hello World')
```

3.
```js
$container.append($helloWorld)
```

If you prefer to, you can also chain all of these commands together, but I find that separating it into these three steps helps keeps things organized and prevents your head from spinning.


### Effects / Animations

![images/jquery-effects-1.png](images/jquery-effects-1.png)

![images/jquery-effects-2.png](images/jquery-effects-2.png)

![images/jquery-effects-3.png](images/jquery-effects-3.png)

![images/jquery-effects-4.png](images/jquery-effects-4.png)

![images/jquery-effects-5.png](images/jquery-effects-5.png)

### Events

![images/jquery-events.png](images/jquery-events.png)

![images/jquery-events-1.png](images/jquery-events-1.png)

![images/jquery-events-1a.png](images/jquery-events-1a.png)

![images/jquery-events-1b.png](images/jquery-events-1b.png)

![images/jquery-events-2.png](images/jquery-events-2.png)

![images/jquery-events-3.png](images/jquery-events-3.png)

![images/jquery-events-4.png](images/jquery-events-4.png)

![images/jquery-events-5.png](images/jquery-events-5.png)

![images/jquery-events-5a.png](images/jquery-events-5a.png)

![images/jquery-events-6.png](images/jquery-events-6.png)

![images/jquery-events-7.png](images/jquery-events-7.png)

![images/jquery-events-8.png](images/jquery-events-8.png)


Let's do some exercises!  Let's start with the `theme-switcher` exercise.

## Additional Resources

- [jQuery API Documentation](https://api.jquery.com/)
- [Live DOM tree viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)
- [jQuery Reference Cheatsheet](https://oscarotero.com/jquery/)
- [Printable jQuery Cheatsheet](http://htmlcheatsheet.com/jquery/)
