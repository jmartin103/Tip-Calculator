function calculatetip() {
  var billTxt = document.getElementById("txtBill");
  var tipTxt = document.getElementById("txtTip");
  var shareTxt = document.getElementById("txtShare");

  var bill = billTxt.value;
  var share = shareTxt.value;
  var tipPercent = tipTxt.value;
  
  var tip = ((tipPercent / 100) * bill) / share;
  alert("Each person will tip $" + Math.round(tip * 100) / 100);
}