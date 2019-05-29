$(function () {
  $(".completed-button").on("click", function (event) {
    var id = $(this).data("id");
    var newlyCompleted = "true";

    var newlyCompletedState = {
      completed: newlyCompleted
    };

    $.ajax("/api/tasks/" + id, {
      type: "PUT",
      data: newlyCompletedState
    }).then(function () {
      location.reload();
    }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newTask = {
      name: $("#task").val().trim(),
    };

    $.ajax("/api/tasks", {
      type: "POST",
      data: newTask
    }).then(
      function () {
        location.reload();
      }
    );
  });

})