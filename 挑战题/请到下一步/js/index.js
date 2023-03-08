/*TODO：请补充代码*/
var current_form, next_form, previous_form; // 表单域
// 点击下一页的按钮
$(".next").click(function () {
  current_form = $(this).parent();
  next_form = $(this).parent().next()
   

  let index = $("fieldset").index(next_form)
  $("#progressbar li").eq(index).addClass('active')
  current_form.hide();
  next_form.show();
});
// 点击返回按钮
$(".previous").click(function () {
  current_form = $(this).parent();
  previous_form = $(this).parent().prev()

  let index = $("fieldset").index(current_form)
  $("#progressbar li").eq(index).removeClas('active')
  current_form.hide();
  previous_form.show();
});
// 点击提交按钮
$(".submit").click(function () {
  alert("提交成功");
});
