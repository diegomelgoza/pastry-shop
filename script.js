// select the buttons
const all = document.querySelectorAll("a");

// select the cards
const cards = document.querySelectorAll(".card");

// toggle certain cards
all.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.target.id)
    let value = e.target.id;
    cards.forEach((item) => {
      if (value === "all") {
        item.style.display = "inline-block";
      } else {
        if (item.classList.contains(value)) {
          item.style.display = "inline-block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});


