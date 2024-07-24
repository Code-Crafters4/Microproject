document.getElementById('investmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numShares = parseFloat(document.getElementById('numShares').value);
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const currentPrice = parseFloat(document.getElementById('currentPrice').value);

    if (isNaN(numShares) || isNaN(purchasePrice) || isNaN(currentPrice)) {
        document.getElementById('message').textContent = 'Please enter valid numbers for all fields.';
        document.getElementById('gainLoss').value = '';
        return;
    }

    const gainLoss = (currentPrice - purchasePrice) * numShares;
    document.getElementById('gainLoss').value = gainLoss.toFixed(2);

    if (gainLoss > 0) {
        document.getElementById('message').textContent = 'You have a gain of $' + gainLoss.toFixed(2);
    } else if (gainLoss < 0) {
        document.getElementById('message').textContent = 'You have a loss of $' + Math.abs(gainLoss).toFixed(2);
    } else {
        document.getElementById('message').textContent = 'No gain or loss.';
    }
});
