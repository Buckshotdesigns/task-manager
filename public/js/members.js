$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    var name;
    var points = 0;
    var userId;
    $(".points").text(points);
    
    $.get("/api/user_data").then(function(data) {
      name = data.name;
      $(".member-name").html("<span> " + name + "!" + "</span>");
      userId = data.id
      console.log(userId)
      $(".member-id").val(userId);
      $(".option-select").text(name);
    });
    $("#submit-task").on("click", function(event){
      event.preventDefault();
      var newTask = {
        name: name,
        task: $("#task-body").val().trim(),
        score: $("#points").val().trim(),
        UserId: $(".member-id").val()
      };

      $.post("/api/tasks", newTask)
      .then(function(data) {
        location.reload();
      })
    });
    

    $(".delete-task").on("click", deleteTask);

    function deleteTask(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "Delete",
        url: "/api/tasks/" + id
      }).then
      location.reload();
    }
    
    function totalScore() {
      // $.get("/api/tasks/", function(data)  {
        
      
      var id = $(this).data("UserId");
        $.ajax({
          method: "GET",
          url: "/api/test/" + id
        }).then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          if (data[i].completed == true) {
             
            points += data[i].score;
            console.log(points);
          }
          $(".points").text(points);
        };
        
      });
      
    };
    
    totalScore();

    function completeTask(event) {
      event.preventDefault();
      var id = $(this).data("id");
      $.ajax({
        method: "Put",
        url: "/api/task/" + id
      }).then
      totalScore();
      location.reload();
    }
    $(".change-complete").on("click", completeTask);
    
});

