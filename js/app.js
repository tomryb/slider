var next = document.getElementById("nextPicture");
var prev = document.getElementById("prevPicture");
var li = document.querySelectorAll("li");
var counter = 0;
li[0].classList.add('visible');


next.addEventListener("click", function () {
    if (counter >= li.length - 1) {
        li[counter].classList.remove("visible");
        counter = 0;
        li[counter].classList.add("visible");
    }

    else
         {
            li[counter].classList.remove("visible");
            counter++;
            li[counter].classList.add("visible");
        }
});

prev.addEventListener("click", function () {
    if (counter <= 0) {
        li[counter].classList.remove("visible");
        counter = li.length - 1;
        li[counter].classList.add("visible");
    }

    else
        {
            li[counter].classList.remove("visible");
            counter--;
            li[counter].classList.add("visible");
        }
});