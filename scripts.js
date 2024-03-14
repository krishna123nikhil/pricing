
function selectPlan(price) 
{

  localStorage.setItem('selectedPlan', price);
 
  window.location.href = 'select_plan.html';
}


window.onload = function() {
  const selectedPlan = localStorage.getItem('selectedPlan');
  if (selectedPlan) {
    document.getElementById('selectedPlan').textContent = selectedPlan;
  }
};
