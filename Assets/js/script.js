$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").removeClass("navbar-bg");
            $(".navbar").addClass("navbar-bg2").style.top = "0";
        } else {
            $(".navbar").removeClass("navbar-bg2");
            $(".navbar").addClass("navbar-bg").style.top = "-50px";
        }
    });
});
fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

// new
const myButton = document.getElementById('but');
const inr1 = document.getElementById('inr-1');
const inr = document.getElementById('inr');
const usd1 = document.getElementById('usd-1');
const usd = document.getElementById('usd');
const chage = document.getElementById('chage');
const chage1 = document.getElementById('chage-1');
myButton.addEventListener('click', () => {
  inr1.style.display = inr1.style.display === 'none' ? 'block' : 'none';
  inr.style.display = inr.style.display === 'block' ? 'none' : 'block';
  usd1.style.display = usd1.style.display === 'none' ? 'block' : 'none';
  usd.style.display = usd.style.display === 'block' ? 'none' : 'block';
  chage1.style.display = chage1.style.display === 'none' ? 'block' : 'none';
  chage.style.display = chage.style.display === 'block' ? 'none' : 'block';
});