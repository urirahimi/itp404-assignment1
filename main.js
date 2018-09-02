$("#search-input").on("submit", function(e) {
  e.preventDefault();
  $("#loader").css("display", "block");
  const query = $("#query").val();
  const url = `https://www.reddit.com/r/${query}.json`;

  let promise = fetch(url).then(response => {
    let promise = response.json();
    return promise;
  });

  promise.then(
    function(subreddits) {
      let html = "";
      subreddits.data.children.forEach(subreddit => {
        const { title, author, score } = subreddit.data;

        html += `
        <label class="response-label"> ${title} | ${author} | ${score}  </label>  
        <br>   
          `;
      });
      $("#results").html(html);
      $("#loader").css("display", "none");
    },
    function(err) {
      console.log(err);
    }
  );
});
