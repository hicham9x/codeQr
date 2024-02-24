let QrBox = document.getElementById("QrBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let btn = document.querySelector("button");

function generateQr() {
  if (!qrText.value) {
    document.querySelector(".error").style.display = "block";
    return;
  }
  document.querySelector(".error").style.display = "none";
  qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " +
    qrText.value;
  btn.disabled = true;
  btn.innerText = "Loading...";
  setTimeout(() => {
    QrBox.style.display = "flex";
    btn.disabled = false;
    btn.innerText = "Generate Qr Code";
  }, 1000);
}
