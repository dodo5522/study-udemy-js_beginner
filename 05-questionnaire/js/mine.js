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

  var tableToCheckError = [
    {isSuccess: function(){return ($("#name").val() == "");},            msg: "名前が空です。"},
    {isSuccess: function(){return ($("#ok").prop("checked") == false);}, msg: "OKチェックがされていません。"},
    {isSuccess: function(){return ($("#listOpt").val() == "");},         msg: "きっかけが空です。"}
  ];

  var getMsgIfError = function() {
    for(var i = 0; i < tableToCheckError.length; i++){
      var cur = tableToCheckError[i];
      if(cur["isSuccess"]()){
        return cur["msg"];
      }
    }
    return "";
  };

  // submit event handerを登録
  $("#f").submit(function(){
    if((msg = getMsgIfError()) != ""){
      alert(msg);
      return false;
    }
  });
});
