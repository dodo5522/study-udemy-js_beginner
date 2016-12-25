$(function() {
  var copyName = function() {
    var name = $("#name").val();
    $("#name2").val(name);
  };

  var copyOk = function() {
    var checked = $("#ok").prop("checked");
    $("#ok2").prop("checked", checked);
  };

  var copyAll = function() {
    copyName();
    copyOk();
  };

  $("#btnCopy").click(function() {
    copyAll();
  });
});
