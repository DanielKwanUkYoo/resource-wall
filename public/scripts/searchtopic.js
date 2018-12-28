$(() => {
    $.ajax({
      method: "GET",
      url: "/api/searchtopic"
    }).done((resources) => {
      for(details of resources) {
        const $resource = $("<article>").addClass("resource").appendTo($("#resource"));
        const $header = $("<header>").appendTo($resource);
        $("<h2>").text(details.title).appendTo($header);
        $("<p>").text(details.description).appendTo($resource);
        $("<p>").text(`Post by: ${details.username}`).appendTo($resource);
        const $footer = $("<footer>").html(`<a href="/${details.id}">Click me</a>`).appendTo($resource);
        $('<i class="icon far fa-thumbs-up"></i>').appendTo($footer);
        $('<i class="icon fas fa-heart"></i>').appendTo($footer);
        $('<i class="icon fas fa-comment-alt"></i>').appendTo($footer);
      }
    });
  });
  