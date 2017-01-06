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

  var copyFreeText = function() {
    var srcId = "#freeText";
    var dstId = srcId + "2";
    $(dstId).val($(srcId).val());
  };

  var copyAll = function() {
    copyName();
    copyOk();
    copyHobby();
    copySex();
    copyOpartunity();
    copyFreeText();
  };

  // event handler登録
  $("#btnCopy").click(function() {
    copyAll();
  });

  var msgError = {
    ERR_NO_NAME : "名前が空です。",
    ERR_NO_OPT : "きっかけが空です。",
    ERR_NO_CHECK : "OKチェックがされていません。",
  };

  var checkBlank = function() {
    if($("#name").val() == ""){
      return msgError.ERR_NO_NAME;
    }
    else if($("#ok").prop("checked") == false){
      return msgError.ERR_NO_CHECK;
    }
    else if($("#listOpt").val() == ""){
      return msgError.ERR_NO_OPT;
    }

    return "";
  };

  // submit event handerを登録
  $("#f").submit(function(){
    if((msg = checkBlank()) != ""){
      alert(msg);
      return false;
    }
  });
});
