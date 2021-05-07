
element = document.querySelector('textarea')
let offset = element.offsetHeight - element.clientHeight;
element.addEventListener('input', function (event) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + offset + 'px';
});