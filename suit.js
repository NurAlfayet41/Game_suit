let pilihan = ["gunting", "batu", "kertas"];

function permainan() {
  this.komputerInput = function() {
    this.pilihanKomputer = Math.random();
    if(this.pilihanKomputer < 0.34) {
      return (this.pilihanKomputer = pilihan[0]);
    }
    else if(this.pilihanKomputer <= 0.67) {
      return (this.pilihanKomputer = pilihan[1]);
    }
    else {
      return (this.pilihanKomputer = pilihan[2]);
    } 
  };

  this.bandingkan = function(pilihan1, pilihan2) {
    if(pilihan1 === pilihan2) {
      return "Uh Oh, hasilnya seri.";
    }
    else if(pilihan1 === "batu") {
      if(pilihan2 === "kertas") {
        return "yah.. kamu kalah..";
      }
      else {
        return "Hore, kamu menang!!";
      }
    }
    else if(pilihan1 === "kertas") {
      if(pilihan2 === "gunting") {
        return "yah.. kamu kalah..";    
      }
      else {
        return "Hore, kamu menang!!";
      }
    }
    else if(pilihan1 === "gunting") {
      if(pilihan2 === "batu") {
        return "yah.. kamu kalah..";
      }
      else {
        return "Hore, kamu menang!!";   
      }
    }
  };
}

function pilihGambar(gambar) {
  if(gambar == "Gunting"){
    return;
  }
  else if(gambar == "Batu"){
    return;
  }
  else {
    return;
  }
}

let mulai = new permainan();
let pilihanPemain = "";
let pilihanKomputer = "";
let hasil = "";
let buttons = document.getElementsByClassName("button");
let pemainMemilih = document.getElementById("pemain");
let komputerMemilih = document.getElementById("komputer");
let tampilkanHasil = document.getElementById("hasil");


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
  pilihanPemain = this.id;
  if(pilihanPemain == 1) {
    pilihanPemain = pilihan[0];
  }
  else if(pilihanPemain == 2) {
    pilihanPemain = pilihan[1];
  }
  else {
    pilihanPemain = pilihan[2];
  }
  let = (pilihanPemain);
  pemainMemilih.innerHTML = "Aku memilih " + pilihanPemain + " ";
  pilihanKomputer = mulai.komputerInput();

  let = (pilihanKomputer);
  komputerMemilih.innerHTML = "Bot memilih " + pilihanKomputer + " ";
  hasil = mulai.bandingkan(pilihanPemain, pilihanKomputer);
  tampilkanHasil.innerHTML = hasil;
  });
}