// Simple JavaScript to add click effect for buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert(You clicked on "${btn.parentElement.querySelector('h2').textContent}" Buy Now!);
    });
});
