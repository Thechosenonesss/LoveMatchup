function rnadomgen() {
  var random = Math.random();
  random = random * 100 + 1;
  random = Math.floor(random);
  return random;
}

document.getElementById("btn").onclick = function () {
  var random = rnadomgen();
  var guyname = document.getElementById("Guy").value;
  var girlname = document.getElementById("Girl").value;
  if (guyname ==="" || girlname ==="") {
    document.getElementById("result").innerHTML = "Please enter the names";
  } else if (random >= 1 && random <= 20) {
    document.getElementById("result").innerHTML =
      "You are not a match " + random + "%";
  } else if (random > 20 && random <= 49) {
    document.getElementById("result").innerHTML =
      "Dont't loose hope rise it up " + random + "%";
  } else if (random == 50) {
    document.getElementById("result").innerHTML =
      "There is hope Try your shot " + random + "%";
  } else if (random > 50 && random <= 80) {
    document.getElementById("result").innerHTML =
      "You are a good match " + random + "%";
  } else if (random > 80 && random <= 90) {
    document.getElementById("result").innerHTML =
      "You are a strong match " + random + "%";
  } else if (random > 90 && random <= 100) {
    document.getElementById("result").innerHTML =
      "You are a perfect match " + random + "%";
  }
};
document.getElementById("ref").onclick=function reload() {
    location.reload();
    
}
