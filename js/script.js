$(function () {
  $('#sidebar').hide(500);
  $('#close_dialog').click(() => {
    $('#sidebar').hide(500);
  });
  $('#open_dialog').click(() => {
    $('#sidebar').show(500);
  });
  $('.profile').click((event) => {
    $('#show_image').attr('src', event.target.src);
  });
});

function hide() {
  $('#sidebar').hide(500);
}
