document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const prices = {
    espresso: 120,
    coldbrew: 150,
    cappuccino: 140,
    croissant: 90,
    muffin: 100,
    bananaBread: 110
  };

  let total = 0;
  let hasItem = false;

  for (const item in prices) {
    const input = document.querySelector(`input[name="${item}"]`);
    const qty = parseInt(input.value) || 0;

    if (qty > 0) {
      hasItem = true;
      total += prices[item] * qty;
    }
  }

  const totalDisplay = document.getElementById('orderTotal');

  if (!hasItem) {
    alert('Please select at least one item to order.');
    totalDisplay.textContent = '';
    return;
  }

  totalDisplay.textContent = `Total: ₹${total}`;
  alert('Order placed successfully! Total amount: ₹' + total);
});
