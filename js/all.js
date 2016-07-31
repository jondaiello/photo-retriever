/* This is where we will get our photos from. */
const API_URL = "https://api.unsplash.com/photos/?client_id=5c680ed0727325d7218e6fcbf3a5fbeac540121b2fe88064fdb54e9011dc7aef&per_page=9&order_by=popular";
var photoGrid = document.getElementById('photo-grid');
var photoData, photoPreviews;

/*
 * This will build the preview blocks and put them on the page.
 */
function buildPreview(imgURL, imgID, imgIndex) {
  // 1. Create an <a> element as our link
  var a = document.createElement('a');
  a.href = imgURL;
  a.target = "_blank";
  a.className = "c-preview";
  a.setAttribute('data-img-id', imgID);
  a.setAttribute('data-img-index', imgIndex);

  // 2. Create the image and append it to the <a>
  var img = document.createElement('img');
  img.src = imgURL;
  img.className = "c-preview__img";
  a.appendChild(img);

  // 3. Add it to the #photo-grid element
  photoGrid.appendChild(a);
}

function displayDetails(photoID, photoIndex) {
  // grab just the photo object that we need.
  var photoDetails = photoData[photoIndex];

  // define some necessary variables below
  var detailsContainer, fullPhoto;

  // look to see if the #photo-detail is already present.
  if ( document.getElementById('photo-detail') ) {

    // if it exsts, define our details container variable here.
    detailsContainer = document.getElementById('photo-detail');
    fullPhoto = document.getElementById('photo-detail__img');
    fullPhoto.src = photoDetails.urls.regular;
    fullPhoto.setAttribute('alt', photoDetails.user.name);

  } else {

    // if not, then lets create the element here
    detailsContainer = document.createElement('div');
    detailsContainer.id = "photo-detail";
    detailsContainer.className = "c-details";
    detailsContainer.classList.add('a-fadein');

    fullPhoto = document.createElement('img');
    fullPhoto.id = "photo-detail__img";
    fullPhoto.className = "c-details__img";
    fullPhoto.src = photoDetails.urls.regular;
    fullPhoto.setAttribute('alt', photoDetails.user.name);

    // we'll also create our close button too
    var closeBtn = document.createElement('button');
    closeBtn.id = "photo-detail__close";
    closeBtn.className = ".c-btn--close";
    closeBtn.innerHTML = "Close";
    closeBtn.addEventListener( 'click', function() {
      document.getElementById("photo-detail").remove();
    } );

    // then add the close button to the detailsContainer
    detailsContainer.appendChild(closeBtn);
    detailsContainer.appendChild(fullPhoto);

    // then add the #photo-detail to the page
    document.body.appendChild(detailsContainer);
  }

  //detailsContainer.innerHTML = '<img id="full-photo" src="'.photoDetails.urls.regular.'" alt="Photo by '.photoDetails.user.name.'" />';
  //detailsContainer.innerHTML = '<img class="c-details__img" src="'+photoDetails.urls.regular+'" />';

  //alert(photoID);
}

function closeDetailView() {
  //
}

/*
 * We will use this to expand our photos
 */
function expandPhoto(e) {
  // 1. stop the link from opening in a new tab
  e.preventDefault();

  displayDetails( this.getAttribute('data-img-id'), this.getAttribute('data-img-index') );
}

/*
 * This function will return the photos from our source defined above
 */
function getPhotos() {
  // 1. Initialize our request
  var photos = new XMLHttpRequest();

  // 2. Wait for the ready state to change...
  photos.onreadystatechange = function() {

    // 3. If the state is ready, then proceed with the request
    if ( photos.readyState == 4 && photos.status == 200 ) {
      // 4. Store the photo data in a (JSON) variable so we can access it
      photoData = JSON.parse(photos.responseText);

      // 5. For each photo returned, buildPreview()
      photoData.forEach(function(e, i) {
        buildPreview(e.urls.small, e.id, i);

        // 6. When we have all of the photos on the page, querySelectorAll of them!
        if ( (i + 1) === photoData.length ) {

          // 7. grab all the photos and store them in a variable
          photoPreviews = photoGrid.querySelectorAll('.c-preview');

          // 8. loop through and attach the expandPhoto function on click
          for (var p = 0; p < photoPreviews.length; p++ ) {
            photoPreviews[p].addEventListener('click', expandPhoto );
          };
        }
      });
    }
  };

  photos.open("GET", API_URL, true);
  photos.send();
}

/*
 * This will run when the DOM is ready.
 */
function init() {
  getPhotos();
}

// When the DOM is ready, go ahead and run our init()
window.onload = init();
