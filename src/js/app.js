/* This is where we will get our photos from. */
const API_URL = "https://api.unsplash.com/photos/?client_id=5c680ed0727325d7218e6fcbf3a5fbeac540121b2fe88064fdb54e9011dc7aef&per_page=9&order_by=popular";

function buildPreview(imgURL, imgID) {
  var a = document.createElement('a');
  a.href = imgURL;
  a.target = "_blank";
  a.className = "c-preview";
  a.setAttribute('data-img-id', imgID);
  var img = document.createElement('img');
  img.src = imgURL;
  img.className = "c-preview__img";
  a.appendChild(img);
  document.getElementById('photo-grid').appendChild(a);
}

/* This function will return the photos from our source defined above */
function getPhotos() {
  var photos = new XMLHttpRequest();

  photos.onreadystatechange = function() {
    if ( photos.readyState == 4 && photos.status == 200 ) {
      var photoData = JSON.parse(photos.responseText);
      photoData.forEach(function(e, i) {
        buildPreview(e.urls.small, e.id);
      });
    }
  };

  photos.open("GET", API_URL, true);
  photos.send();
}

var previews = document.querySelectorAll('.c-preview');

function init() {
  getPhotos();
}

window.onload = init();
