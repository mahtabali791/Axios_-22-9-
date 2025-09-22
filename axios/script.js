function fetchLocalFile() {
  axios
    .get("sample.txt") // GET request to local file
    .then(function (response) {
      // response.data contains the file content
      document.getElementById("result").innerText = response.data;
    })
    .catch(function (error) {
      document.getElementById("result").innerText = "Could not load file.";
      console.error(error);
    });
}

function fetchNamazTimes() {
  var url =
    "https://api.aladhan.com/v1/timingsByCity?city=Islamabad&country=Pakistan&method=2";

  axios
    .get(url)
    .then(function (response) {
      if (
        response.data.code === 200 &&
        response.data.data &&
        response.data.data.timings
      ) {
        var t = response.data.data.timings;
        var html =
          "<strong>Namaz Times for Islamabad, Pakistan</strong><ul>" +
          "<li>Fajr: " +
          t.Fajr +
          "</li>" +
          "<li>Dhuhr: " +
          t.Dhuhr +
          "</li>" +
          "<li>Asr: " +
          t.Asr +
          "</li>" +
          "<li>Maghrib: " +
          t.Maghrib +
          "</li>" +
          "<li>Isha: " +
          t.Isha +
          "</li>" +
          "<li>Sunrise: " +
          t.Sunrise +
          "</li>" +
          "<li>Sunset: " +
          t.Sunset +
          "</li>" +
          "</ul>";
        document.getElementById("result").innerHTML = html;
      } else {
        document.getElementById("result").innerHTML =
          "Could not fetch Namaz times.";
      }
    })
    .catch(function (error) {
      console.error(error);
      document.getElementById("result").innerHTML =
        "Could not fetch Namaz times.";
    });
}

function fetchPosts() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(function (response) {
      var posts = response.data; // Already parsed JSON
      var html = "<strong>Posts List:</strong><ul>";
      posts.forEach(function (post) {
        html +=
          "<li><strong>" + post.title + "</strong><br>" + post.body + "</li>";
      });
      html += "</ul>";
      document.getElementById("result").innerHTML = html;
    })
    .catch(function (error) {
      console.error(error);
      document.getElementById("result").innerHTML = "Failed to fetch posts.";
    });
}

function fetchPost() {
  var postId = Math.floor(Math.random() * 100) + 1;
  axios
    .get("https://jsonplaceholder.typicode.com/posts/" + postId)
    .then(function (response) {
      var post = response.data;
      var html =
        "<strong>Post Title:</strong> " +
        post.title +
        "<br>" +
        "<strong>Body:</strong> <br>" +
        post.body;
      document.getElementById("result").innerHTML = html;
    })
    .catch(function (error) {
      console.error(error);
      document.getElementById("result").innerHTML = "Failed to fetch post.";
    });
}

function fetchUser() {
  axios
    .get("https://randomuser.me/api/")
    .then(function (response) {
      var user = response.data.results[0];
      var html =
        "<strong>Name:</strong> " +
        user.name.first +
        " " +
        user.name.last +
        "<br>" +
        "<strong>Email:</strong> " +
        user.email +
        "<br>" +
        '<img src="' +
        user.picture.medium +
        '" alt="User Picture">';
      document.getElementById("result").innerHTML = html;
    })
    .catch(function (error) {
      console.error(error);
      document.getElementById("result").innerHTML = "Failed to fetch user.";
    });
}
