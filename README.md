# nui-Toggle
A simple jQuery plugin to toggle an HTML element true/false. Plugin also allows to keep track of element's state if page is reloaded or for further connexions.

[jsfiddle.net Demo](https://jsfiddle.net/frontenddeveloper/9geynfc6/14/).
[Blog post (in French - code bits outdated)](http://frontenddeveloper.0fees.net/jquery-un-plugin-pour-afficher-masquer-des-elements-dans-une-page-et-conserver-leur-etat-en-cache/)

# Usage:

JS init:
```
$('#targetElement').nuiToggle('#triggerElement');
```

HTML essentials:
```
<div id="targetElement" aria-expanded="true">
  <button id="triggerElement"></button>
  <!-- your content here -->
</div>
```
