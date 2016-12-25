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
      var destId = "#" + $(this).prop("id") + "2";
      var val = $(this).prop("checked");

      console.log(val);
      console.log(srcId);
      console.log(destId);

      $(destId).prop("checked", val);
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

  var copyAll = function() {
    copyName();
    copyOk();
    copyHobby();
    copySex();
  };

  // event handler登録
  $("#btnCopy").click(function() {
    copyAll();
  });
});
