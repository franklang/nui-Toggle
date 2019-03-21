# nui-Toggle
A simple jQuery plugin to toggle an HTML element's aria-expanded attribute true/false. Plugin also allows to keep track of element's state if page is reloaded or for further connexions using [LocalStorage](https://developer.mozilla.org/en/docs/Web/API/Storage/LocalStorage).

[jsfiddle.net Demo](https://jsfiddle.net/frontenddeveloper/9geynfc6/21/).

# Usage:

JS init:
```
$('#targetElement').nuiToggle('#triggerElement');
```

Core HTML essentials:
```
<div id="targetElement" aria-expanded="true">
  <button id="triggerElement" role="button"></button>
  <!-- your content here -->
</div>
```

With default skin (CSS):
```
<div id="inPageNavigation" class="InPageNavigation" aria-expanded="true">
  <button id="toggleInPageNavigation" class="btn-InPageNavigation--toggle" role="button">
    <i class="fas fa-chevron-right" title="Masquer l'accès rapide"></i><i class="fas fa-chevron-left" title="Afficher l'accès rapide"></i>
  </button>
  <!-- your content here -->
</div>
```
