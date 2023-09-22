/* let scoreBoard; */

const eurobill_container1 = document.querySelector("#eurobill_container1");
const eurobill_container2 = document.querySelector("#eurobill_container2");
const taxbill_container1 = document.querySelector("#taxbill_container1");
const taxbill_container2 = document.querySelector("#taxbill_container2");

window.addEventListener("load", sidenvises);

function sidenvises() {
  console.log("sidenvises");
  document.querySelector("#background_music").volume = 0.5;
  document.querySelector("#background_music").play();
  document.querySelector("#background_music").loop = true;

  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#play_button_container").addEventListener("click", instructions);
}

function instructions() {
  console.log("instructions");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#play_button_container2").addEventListener("click", startgame);
}

function startgame() {
  document.querySelector("#instructions").classList.add("hide");

  lives = 3;
  point = 0;

  let scoreBoard = document.querySelector("#score_board_sprite");
  scoreBoard.textContent = point;

  document.querySelector("#game_over").classList.add("hide");

  console.log("start game");
  let random_start1 = Math.floor(Math.random() * 5) + 1;
  let random_start2 = Math.floor(Math.random() * 5) + 1;
  let random_start3 = Math.floor(Math.random() * 5) + 1;
  let random_start4 = Math.floor(Math.random() * 5) + 1;
  eurobill_container1.classList.add("fald", "pos" + random_start1, "delay" + random_start4);
  eurobill_container2.classList.add("fald", "pos" + random_start2, "delay" + random_start3);
  taxbill_container1.classList.add("fald", "pos" + random_start3, "delay" + random_start2);
  taxbill_container2.classList.add("fald", "pos" + random_start4, "delay" + random_start1);

  eurobill_container1.addEventListener("click", eurobill_click);
  eurobill_container2.addEventListener("click", eurobill_click);
  taxbill_container1.addEventListener("click", taxbill_click);
  taxbill_container2.addEventListener("click", taxbill_click);

  eurobill_container1.addEventListener("animationiteration", fall_restart);
  eurobill_container2.addEventListener("animationiteration", fall_restart);
  taxbill_container1.addEventListener("animationiteration", fall_restart);
  taxbill_container2.addEventListener("animationiteration", fall_restart);

  document.querySelector("#time_arrow").classList.add("minut_animation");
  document.querySelector("#time_arrow").addEventListener("animationend", stopGame);
}

function eurobill_click() {
  console.log("eurobill_clicked");
  document.querySelector("#coin_sound").volume = 1;
  document.querySelector("#coin_sound").play();
  document.querySelector("#moo_sound").currentTime = 0;
  point++;
  document.querySelector("#score_board_sprite").textContent = point;
  this.classList.add("frys");
  this.firstElementChild.classList.add("glow");
  this.firstElementChild.addEventListener("animationend", eurobill_hit);

  function eurobill_hit() {
    console.log("eurobill hit");
    this.classList.remove("glow");
    this.offsetLeft;
    this.classList.add("forsvind");
    this.addEventListener("animationend", hit_restart);
    this.removeEventListener("animationend", eurobill_hit);
  }
}

function hit_restart() {
  console.log("restart");
  let random = Math.floor(Math.random() * 5) + 1;
  console.log(random);
  this.classList = "";
  this.offsetLeft;
  this.parentElement.classList = "";
  this.parentElement.offsetLeft;
  this.parentElement.classList.add("fald", "pos" + random, "delay" + random);
  this.removeEventListener("animationend", hit_restart);
}

function fall_restart() {
  console.log("fall restart");
  let random = Math.floor(Math.random() * 5) + 1;
  console.log(random);
  this.classList = "";
  this.offsetLeft;
  this.classList.add("fald", "pos" + random, "delay" + random);
}

function taxbill_click() {
  console.log("taxbill_clicked");
  document.querySelector("#moo_sound").volume = 1;
  document.querySelector("#moo_sound").play();
  document.querySelector("#moo_sound").currentTime = 0;

  if (lives === 1) {
    document.querySelector("#heart_sprite" + lives).classList.add("minus_life");
    lives--;
    document.querySelector("#background_music").volume = 0;
    document.querySelector("#gameover_sound").play();
    gameOver();
  } else {
    document.querySelector("#heart_sprite" + lives).classList.add("minus_life");
    lives--;
  }

  this.classList.add("frys", "click_stop");
  this.firstElementChild.classList.add("glow");
  this.firstElementChild.addEventListener("animationend", taxbill_hit);

  function taxbill_hit() {
    this.classList = "";
    this.offsetLeft;
    this.classList.add("forsvind");
    this.addEventListener("animationend", hit_restart);
  }
}

/* gameover */
function stopGame() {
  console.log("stopgame");

  /*  eurobill_container1.classList = "";
  document.querySelector("#eurobill_sprite1").classList = "";
  eurobill_container2.classList = "";
  document.querySelector("#eurobill_sprite2").classList = "";
  taxbill_container1.classList = "";
  document.querySelector("#taxbill_sprite1").classList = "";
  taxbill_container2.classList = "";
  document.querySelector("#taxbill_sprite2").classList = "";
 */
  if (point < 15) {
    gameOver();
  } else {
    levelComplete();
  }

  if (point < 15) {
    document.querySelector("#background_music").volume = 0;
    document.querySelector("#gameover_sound").play();
  } else {
    document.querySelector("#background_music").volume = 0;
    document.querySelector("#welldone_sound").play();
  }
}

function gameOver() {
  console.log("gameover");

  document.querySelector("#game_over").classList.remove("hide");
  document.querySelector("#game_over_points").textContent = "You're pathetic! You lost with a measly  " + point + "   points! Now get out of my house!";
}
function levelComplete() {
  console.log("levelcomplete");
  document.querySelector("#level_complete").classList.remove("hide");
  document.querySelector("#level_complete_points").textContent = "Welldone! You won with  " + point + "   points! Now get out of my house!";
}
