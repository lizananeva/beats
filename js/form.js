const validateFields = (form, fields) => {
  fields.forEach(field => {
    field.removeClass("input-error");

    if (field.val().trim() === "") {
      field.addClass("input-error");
    }
  });

  const errorFields = form.find(".input-error");

  return errorFields.length === 0;
}

$(".form").on("submit", event => {
  event.preventDefault();

  const form = $(event.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");

  const modal = $("#modal");
  const message = modal.find(".modal__message");

  modal.removeClass("error-modal");

  const isValid = validateFields(form, [name, phone, comment, to]);

  if (isValid) {
    const request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val()
      }
    });

    request.done(data => {
      message.text(data.message);
    });

    request.fail(data => {
      message.text(data.responseJSON.message);
      modal.addClass("error-modal");
    });

    request.always(() => {
      const fancybox = Fancybox.show([
        {
          src: "#modal",
          type: "inline",
          closeButton: false,
          dragToClose: false,
          animated: false
        }
      ]);
    });
  }
});

$(".app-submit-btn").on("click", event => {
  event.preventDefault();
  Fancybox.close();
});
