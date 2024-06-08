if(document !== undefined){
    $(document).on("scroll", function() {
        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $(".tag");
      
        for (var i = 0; i < tags.length; i++) {
          var tag = tags[i];
      
          if ($(tag).position().top < pageBottom-100) {
            console.log(1);
            $(tag).addClass("visible");
          } else {
            console.log(2);
            $(tag).removeClass("visible");
          }
        }
      });
} else {
    console.log("document is not defined");
}
