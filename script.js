// Fetch and display data from a local file using XMLHttpRequest
// Demonstrates key XHR methods: open, send, setRequestHeader, abort
function fetchLocalFile() {
  var xhr = new XMLHttpRequest();
  // open(method, url, async)
  xhr.open("GET", "sample.txt", true); // 'sample.txt' should exist in the same folder

  // Optional: set a custom request header (not needed for simple GET, but shown for demo)
  // xhr.setRequestHeader('X-Custom-Header', 'value');

  // onreadystatechange is called every time the readyState changes
  xhr.onreadystatechange = function () {
    // readyState 4 means request is done, status 200 means success
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById("result").innerText = xhr.responseText;
      } else {
        document.getElementById("result").innerText = "Could not load file.";
      }
    }
  };

  // Send the request
  xhr.send();

  // Example: abort the request if it takes too long (not needed here, just for demo)
  // setTimeout(function() { xhr.abort(); }, 5000);
}
// Fetch and display Namaz (prayer) times for Islamabad, Pakistan using Aladhan API
function fetchNamazTimes() {
  var xhr = new XMLHttpRequest();
  var url =
    "https://api.aladhan.com/v1/timingsByCity?city=Islamabad&country=Pakistan&method=2";
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.code === 200 && response.data && response.data.timings) {
        var t = response.data.timings;
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
    }
  };
  xhr.send();
}
// Fetch and display a list of posts from JSONPlaceholder
function fetchPosts() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?_limit=5", true); // Get 5 posts
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var posts = JSON.parse(xhr.responseText);
      var html = "<strong>Posts List:</strong><ul>";
      posts.forEach(function (post) {
        html +=
          "<li><strong>" + post.title + "</strong><br>" + post.body + "</li>";
      });
      html += "</ul>";
      document.getElementById("result").innerHTML = html;
    }
  };
  xhr.send();
}
// Fetch and display a random post from JSONPlaceholder
function fetchPost() {
  var xhr = new XMLHttpRequest();
  // Get a random post between 1 and 100
  var postId = Math.floor(Math.random() * 100) + 1;
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + postId, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var post = JSON.parse(xhr.responseText);
      var html =
        "<strong>Post Title:</strong> " +
        post.title +
        "<br>" +
        "<strong>Body:</strong> <br>" +
        post.body;
      document.getElementById("result").innerHTML = html;
    }
  };
  xhr.send();
}
function fetchUser() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://randomuser.me/api/", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var user = data.results[0];
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
    }
  };
  xhr.send();
}
