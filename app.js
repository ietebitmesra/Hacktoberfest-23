document.getElementById("clubSearch").addEventListener("input", function () {
  var searchValue = this.value.toLowerCase();
  var clubCards = document.getElementsByClassName("clubs-card");

  for (var i = 0; i < clubCards.length; i++) {
    var clubName = clubCards[i].textContent.toLowerCase();

    if (clubName.includes(searchValue)) {
      clubCards[i].style.display = "block";
    } else {
      clubCards[i].style.display = "none";
    }
  }
});
