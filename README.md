# JS Framework Tech Test

This test is designed to test your JavaScript and JQuery skills by developing a simple frontend framework similar to AngularJS.

Part 1
-------

Add javascript to 'MyFramework.js' so that in the HTML page below as the user enters their name in the input box, that name appears character by character in the mf-bind span.

```html
<!DOCTYPE html>
<html>

<body mf-app>
  <input type='text'
         mf-model='name'
         placeholder = 'Enter your name'>
  <h1>Hello <span mf-bind='name'</span></span><h1>
  <script src='https://code.jquery.com/jquery-2.1.4.min.js'></script>
  <script src='MyFramework.js'></script>
  </script>
</body>
</html>
```

We're happy to see a simple solution in JS/JQuery, but for bonus points please BDD/TDD using Jasmine and JasmineJQuery. Either way we want to see clean JavaScript!

Part 2
-------

Extend MyFramework.js so that clicing on the 'Change Message' button in the HTML below toggles the message between 'Hello' and 'Goodbye'

```html
<!DOCTYPE html>
<html mf-app='messageApp'>
<head><title>Message App</title></head>
<body mf-controller='MainCtrl as ctrl'>
  {{ctrl.message}} my new JS framework!
  <button mf-click='ctrl.changeMessage()'>
    Change Message
  </button> 
  <script src='https://code.jquery.com/jquery-2.1.4.min.js'></script>
  <script src='MyFramework.js'></script>
</body>
</html>
```

Again we're happy to see a simple solution in JS/JQuery, but for bonus points please BDD/TDD using Jasmine and JasmineJQuery.  Either way we want to see clean JavaScript!

