document.getElementById('goalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const shortTerm = document.getElementById('shortTerm').value;
    const midTerm = document.getElementById('midTerm').value;
    const longTerm = document.getElementById('longTerm').value;

    if (shortTerm || midTerm || longTerm) {
        document.getElementById('message').textContent = 'Goals saved successfully!';
    } else {
        document.getElementById('message').textContent = 'Please enter some goals.';
    }
});
