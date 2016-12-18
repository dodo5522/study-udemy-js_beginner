$(function(){
  var taxCalc=function(){
    var price=$("#price").val()*1;
    var tax=$("#tax").val()*1;

    var taxAmount=Math.floor(price*tax/100);
    var taxIncluded=price+taxAmount;

    $("#taxAmount").val(taxAmount);
    $("#taxIncluded").val(taxIncluded);
  };
  $("#doOperation").click(taxCalc);
});
