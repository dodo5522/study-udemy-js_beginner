$(function() {
  var copyName = function() {
    var name = $("#name").val();
    $("#name2").val(name);
  };

  var copyOk = function() {
    var checked = $("#ok").prop("checked");
    $("#ok2").prop("checked", checked);
  };

  var copyHobby = function() {
    $("input[type=checkbox][name=hobby]").each(function() {
      var srcId = "#" + $(this).prop("id");
      var dstId = srcId + "2";
      var val = $(this).prop("checked");

      $(dstId).prop("checked", val);
    });
  };

  var copySex = function() {
    $('input[type="radio"][name="sex"]').each(function() {
      var srcId = "#" + $(this).prop("id");
      var dstId = srcId + "2";
      var checked = $(this).prop("checked");

      $(dstId).prop("checked", checked);
    });
  };

  var copyOpartunity = function() {
    var srcId = "#" + "listOpt";
    var dstId = srcId + "2";
    var selectedValues = $(srcId).val();
    $(dstId).val(selectedValues);
  };

  var copyAll = function() {
    copyName();
    copyOk();
    copyHobby();
    copySex();
    copyOpartunity();
  };

  // event handler登録
  $("#btnCopy").click(function() {
    copyAll();
  });
});
