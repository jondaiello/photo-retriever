/* This is where we will get our photos from. */
const API_URL = "https://api.unsplash.com/photos/?client_id=5c680ed0727325d7218e6fcbf3a5fbeac540121b2fe88064fdb54e9011dc7aef&per_page=9";


/* This function will return the photos from our source defined above */
function getPhotos() {
  var photos = new XMLHttpRequest();

  photos.onreadystatechange = function() {
    if ( photos.readyState == 4 && photos.status == 200 ) {
      document.getElementById('photo-grid').innerHTML = photos.responseText;
    }
  };

  photos.open("GET", "https://api.unsplash.com/photos/?client_id=5c680ed0727325d7218e6fcbf3a5fbeac540121b2fe88064fdb54e9011dc7aef&per_page=9", true);
  photos.send();
}

function init() {
  getPhotos();
}

window.onload = init();
