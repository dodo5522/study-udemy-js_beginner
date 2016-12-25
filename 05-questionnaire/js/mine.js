$(function() {
  $("#name").change(function() {
    var name = $("name").val();
  });

  $("#ok").change(function() {
    var checked = $("#ok").prop("checked");
    $("#ok2").prop("checked", checked);
  });
});
