[].slice.call(document.querySelectorAll('body ::shadow input'))
.map(function(el) {
    return el.value
}).join('\n');

[].slice.call(document.querySelectorAll('body ::shadow span'))
.map(function(el) {
    return el.innerText
}).join('\n');
