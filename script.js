
function customize(currencySymbol, unit) {
  const prices = document.querySelectorAll('.price');
  prices.forEach(price => {
    const priceValue = parseFloat(price.getAttribute('data-price').substring(1));
    price.textContent = `${currencySymbol}${priceValue} / ${unit}`;
  });
}

const toggleButtons = document.querySelectorAll('.toggle-button');
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const pricingPlans = document.querySelectorAll('.pricing-plan');
    pricingPlans.forEach(plan => plan.classList.toggle('hidden'));
  });
});


customize('$', 'month');
