/* This is where we will get our photos from. */
const API_URL = "https://api.unsplash.com/photos/?client_id=5c680ed0727325d7218e6fcbf3a5fbeac540121b2fe88064fdb54e9011dc7aef&per_page=9&order_by=popular";
var photoGrid = document.getElementById('photo-grid');
var photoData, photoPreviews;

/*
 * This will build the preview blocks and put them on the page.
 */
function buildPreview(imgPreviewURL, imgFullURL, imgID, imgIndex) {
  // 1. Create an <a> element as our link
  var a = document.createElement('a');
  a.href = imgFullURL;
  a.target = "_blank";
  a.className = "c-preview";
  a.setAttribute('data-img-id', imgID);
  a.setAttribute('data-img-index', imgIndex);

  // 2. Create the image and append it to the <a>
  var img = document.createElement('img');
  img.src = imgPreviewURL;
  img.className = "c-preview__img";
  a.appendChild(img);

  // 3. Add it to the #photo-grid element
  photoGrid.appendChild(a);
}

function displayDetails(photoID, photoIndex) {
  // grab just the photo object that we need.
  var photoDetails = photoData[photoIndex];

  // define some necessary variables below
  var detailsContainer, fullPhoto, prevBtn, nextBtn;

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

    // create the previous and next buttons
    prevBtn = document.createElement('button');
    prevBtn.className = "c-btn--prev c-btn--arrow-left";
    prevBtn.id = "prev-btn";
    prevBtn.innerHTML = "Previous";
    prevBtn.addEventListener('click', function() {
      loadPreviousPhoto();
    });

    nextBtn = document.createElement('button');
    nextBtn.className = "c-btn--next c-btn--arrow-right";
    nextBtn.id = "next-btn";
    nextBtn.innerHTML = "Next";
    nextBtn.addEventListener('click', function() {
      loadNextPhoto();
    });

    // create our full photo preview here
    fullPhoto = document.createElement('img');
    fullPhoto.id = "photo-detail__img";
    fullPhoto.classList.add("c-details__img");
    fullPhoto.classList.add("a-fadeindown");
    fullPhoto.src = photoDetails.urls.regular;
    fullPhoto.setAttribute('data-img-id', photoID);
    fullPhoto.setAttribute('data-img-index', photoIndex);
    fullPhoto.setAttribute('alt', "Photo by " + photoDetails.user.name);

    // we'll also create our close button too
    var closeBtn = document.createElement('button');
    closeBtn.id = "photo-detail__close";
    closeBtn.className = "c-btn--close";
    closeBtn.innerHTML = "Close";
    closeBtn.addEventListener('click', function() {
      document.getElementById("photo-detail").remove();
    } );


    detailsContainer.appendChild(prevBtn); // add the previous button to the detailsContainer
    detailsContainer.appendChild(nextBtn); // add the next button to the detailsContainer
    detailsContainer.appendChild(closeBtn); // add the close button to the detailsContainer
    detailsContainer.appendChild(fullPhoto); // add the photo to the detailsContainer

    // then add the #photo-detail to the page
    document.body.appendChild(detailsContainer);
  }
}


/*
 * Remove current photo from detail view
 */

function swapDetailPhotos(currentPhoto, currentIndex, incrementDirection) {
  var nextPhotoIndex, fadeDirection;
  currentIndex = parseInt(currentIndex);

  // set the fadeDirection of the images based upon the direction the user chose to proceed
  if (incrementDirection === "prev") { fadeDirection = "right"; }
  if (incrementDirection === "next") { fadeDirection = "left"; }

  // we'll prepare the photo for removal with some animations and a new id
  currentPhoto.classList.remove("a-fadeindown");
  currentPhoto.classList.add("a-fadeout" + fadeDirection);
  currentPhoto.id = "previous-photo"; // this is no longer the current photo, so give it a new id so we don't conflict in the DOM
  currentPhoto.addEventListener("animationend", function () {
    // once the CSS animation has ended, we'll remove the old photo
    currentPhoto.remove();

    // after that,  we'll load a new one...

    // start by getting an accurate index of the photos we loaded

    if ( incrementDirection === "prev" ) {
      // if we need the previous photo, work toward a negative index value

      if ( currentIndex === 0 ) {
        nextPhotoIndex = parseInt(photoData.length) - 1;
      } else {
        nextPhotoIndex = currentIndex - 1;
      }
    } else {
      // if we need the next photo increment upwards

      if ( currentIndex >= ( photoData.length - 1 ) ) {
        nextPhotoIndex = 0;
      } else {
        nextPhotoIndex = currentIndex + 1;
      }
    }

    var newPhoto = document.createElement("img");
    newPhoto.classList.add('c-details__img');
    newPhoto.classList.add('a-fadein' + fadeDirection);
    newPhoto.setAttribute('data-img-index', nextPhotoIndex);
    newPhoto.id = "photo-detail__img";
    newPhoto.src = photoData[nextPhotoIndex].urls.regular;

    document.getElementById("photo-detail").appendChild(newPhoto);
  });
}


/*
 * Load the Previous Photo
 */

function loadPreviousPhoto() {
  var currentPhoto = document.getElementById("photo-detail__img");
  var currentIndex = currentPhoto.getAttribute('data-img-index');

  swapDetailPhotos(currentPhoto, currentIndex, "prev");
}


/*
 * Load the Next Photo
 */

function loadNextPhoto() {
  var currentPhoto = document.getElementById("photo-detail__img");
  var currentIndex = currentPhoto.getAttribute('data-img-index');

  swapDetailPhotos(currentPhoto, currentIndex, "next");
}


/*
 * We will use this to expand our photos
 */
function expandPhoto(e) {
  // 1. stop the link from opening in a new tab
  e.preventDefault();

  // 2. display the details view of the photo
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
        buildPreview(e.urls.small, e.urls.regular, e.id, i);

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
