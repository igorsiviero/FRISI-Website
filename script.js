var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');

li1.addEventListener('click', function() {
  scrollToPercentage(25);
});

li2.addEventListener('click', function() {
  scrollToPercentage(50);
});

li3.addEventListener('click', function() {
  scrollToPercentage(75);
});

function scrollToPercentage(percentage) {
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  var scrollTo = (documentHeight - windowHeight) * (percentage / 100);

  window.scrollTo({
    top: scrollTo,
    behavior: 'smooth'
  });
}