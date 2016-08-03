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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJidWlsZFByZXZpZXciLCJpbWdQcmV2aWV3VVJMIiwiaW1nRnVsbFVSTCIsImltZ0lEIiwiaW1nSW5kZXgiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInRhcmdldCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImltZyIsInNyYyIsImFwcGVuZENoaWxkIiwicGhvdG9HcmlkIiwiZGlzcGxheURldGFpbHMiLCJwaG90b0lEIiwicGhvdG9JbmRleCIsImRldGFpbHNDb250YWluZXIiLCJmdWxsUGhvdG8iLCJwcmV2QnRuIiwibmV4dEJ0biIsInBob3RvRGV0YWlscyIsInBob3RvRGF0YSIsImdldEVsZW1lbnRCeUlkIiwidXJscyIsInJlZ3VsYXIiLCJ1c2VyIiwibmFtZSIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRQcmV2aW91c1Bob3RvIiwibG9hZE5leHRQaG90byIsImNsb3NlQnRuIiwicmVtb3ZlIiwiYm9keSIsInN3YXBEZXRhaWxQaG90b3MiLCJjdXJyZW50UGhvdG8iLCJjdXJyZW50SW5kZXgiLCJpbmNyZW1lbnREaXJlY3Rpb24iLCJuZXh0UGhvdG9JbmRleCIsImZhZGVEaXJlY3Rpb24iLCJwYXJzZUludCIsImxlbmd0aCIsIm5ld1Bob3RvIiwiZ2V0QXR0cmlidXRlIiwiZXhwYW5kUGhvdG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aGlzIiwiZ2V0UGhvdG9zIiwicGhvdG9zIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiZm9yRWFjaCIsImkiLCJzbWFsbCIsInBob3RvUHJldmlld3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwicCIsIm9wZW4iLCJBUElfVVJMIiwic2VuZCIsImluaXQiLCJ3aW5k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QSxxQkFDQWlCLEVBQUFELEVBQUFRLGFBQUEsaUJBRUFULGtCQUFBQyxFQUFBQyxFQUFBLFFBUUEsUUFBQU4saUJBQ0EsR0FBQUssR0FBQW5DLFNBQUFtQixlQUFBLHFCQUNBaUIsRUFBQUQsRUFBQVEsYUFBQSxpQkFFQVQsa0JBQUFDLEVBQUFDLEVBQUEsUUFPQSxRQUFBUSxhQUFBQyxHQUVBQSxFQUFBQyxpQkFHQXBDLGVBQUFxQyxLQUFBSixhQUFBLGVBQUFJLEtBQUFKLGFBQUEsbUJBTUEsUUFBQUssYUFFQSxHQUFBQyxHQUFBLEdBQUFDLGVBR0FELEdBQUFFLG1CQUFBLFdBR0EsR0FBQUYsRUFBQUcsWUFBQSxLQUFBSCxFQUFBSSxTQUVBbkMsVUFBQW9DLEtBQUFDLE1BQUFOLEVBQUFPLGNBR0F0QyxVQUFBdUMsUUFBQSxTQUFBWixFQUFBYSxHQUlBLEdBSEFoRSxhQUFBbUQsRUFBQXpCLEtBQUF1QyxNQUFBZCxFQUFBekIsS0FBQUMsUUFBQXdCLEVBQUFyQixHQUFBa0MsR0FHQUEsRUFBQSxJQUFBeEMsVUFBQXVCLE9BQUEsQ0FHQW1CLGNBQUFuRCxVQUFBb0QsaUJBQUEsYUFHQSxLQUFBLEdBQUFDLEdBQUEsRUFBQUEsRUFBQUYsY0FBQW5CLE9BQUFxQixJQUNBRixjQUFBRSxHQUFBbEMsaUJBQUEsUUFBQWdCLGtCQU9BSyxFQUFBYyxLQUFBLE1BQUFDLFNBQUEsR0FDQWYsRUFBQWdCLE9BTUEsUUFBQUMsUUFDQWxCLFlBck9BLEtBQUFnQixTQUFBLHlJQUNBLElBQUF2RCxXQUFBVCxTQUFBbUIsZUFBQSxjQUNBRCxVQUFBMEMsYUF1T0FPLFFBQUFDLE9BQUFGIiwiZmlsZSI6ImFsbC1kZWJ1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgaXMgd2hlcmUgd2Ugd2lsbCBnZXQgb3VyIHBob3RvcyBmcm9tLiAqL1xuY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy8/Y2xpZW50X2lkPTVjNjgwZWQwNzI3MzI1ZDcyMThlNmZjYmYzYTVmYmVhYzU0MDEyMWIyZmU4ODA2NGZkYjU0ZTkwMTFkYzdhZWYmcGVyX3BhZ2U9OSZvcmRlcl9ieT1wb3B1bGFyXCI7XG52YXIgcGhvdG9HcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob3RvLWdyaWQnKTtcbnZhciBwaG90b0RhdGEsIHBob3RvUHJldmlld3M7XG5cbi8qXG4gKiBUaGlzIHdpbGwgYnVpbGQgdGhlIHByZXZpZXcgYmxvY2tzIGFuZCBwdXQgdGhlbSBvbiB0aGUgcGFnZS5cbiAqL1xuZnVuY3Rpb24gYnVpbGRQcmV2aWV3KGltZ1ByZXZpZXdVUkwsIGltZ0Z1bGxVUkwsIGltZ0lELCBpbWdJbmRleCkge1xuICAvLyAxLiBDcmVhdGUgYW4gPGE+IGVsZW1lbnQgYXMgb3VyIGxpbmtcbiAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuaHJlZiA9IGltZ0Z1bGxVUkw7XG4gIGEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgYS5jbGFzc05hbWUgPSBcImMtcHJldmlld1wiO1xuICBhLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWctaWQnLCBpbWdJRCk7XG4gIGEuc2V0QXR0cmlidXRlKCdkYXRhLWltZy1pbmRleCcsIGltZ0luZGV4KTtcblxuICAvLyAyLiBDcmVhdGUgdGhlIGltYWdlIGFuZCBhcHBlbmQgaXQgdG8gdGhlIDxhPlxuICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBpbWdQcmV2aWV3VVJMO1xuICBpbWcuY2xhc3NOYW1lID0gXCJjLXByZXZpZXdfX2ltZ1wiO1xuICBhLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgLy8gMy4gQWRkIGl0IHRvIHRoZSAjcGhvdG8tZ3JpZCBlbGVtZW50XG4gIHBob3RvR3JpZC5hcHBlbmRDaGlsZChhKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURldGFpbHMocGhvdG9JRCwgcGhvdG9JbmRleCkge1xuICAvLyBncmFiIGp1c3QgdGhlIHBob3RvIG9iamVjdCB0aGF0IHdlIG5lZWQuXG4gIHZhciBwaG90b0RldGFpbHMgPSBwaG90b0RhdGFbcGhvdG9JbmRleF07XG5cbiAgLy8gZGVmaW5lIHNvbWUgbmVjZXNzYXJ5IHZhcmlhYmxlcyBiZWxvd1xuICB2YXIgZGV0YWlsc0NvbnRhaW5lciwgZnVsbFBob3RvLCBwcmV2QnRuLCBuZXh0QnRuO1xuXG4gIC8vIGxvb2sgdG8gc2VlIGlmIHRoZSAjcGhvdG8tZGV0YWlsIGlzIGFscmVhZHkgcHJlc2VudC5cbiAgaWYgKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG8tZGV0YWlsJykgKSB7XG5cbiAgICAvLyBpZiBpdCBleHN0cywgZGVmaW5lIG91ciBkZXRhaWxzIGNvbnRhaW5lciB2YXJpYWJsZSBoZXJlLlxuICAgIGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG8tZGV0YWlsJyk7XG4gICAgZnVsbFBob3RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob3RvLWRldGFpbF9faW1nJyk7XG4gICAgZnVsbFBob3RvLnNyYyA9IHBob3RvRGV0YWlscy51cmxzLnJlZ3VsYXI7XG4gICAgZnVsbFBob3RvLnNldEF0dHJpYnV0ZSgnYWx0JywgcGhvdG9EZXRhaWxzLnVzZXIubmFtZSk7XG5cbiAgfSBlbHNlIHtcblxuICAgIC8vIGlmIG5vdCwgdGhlbiBsZXRzIGNyZWF0ZSB0aGUgZWxlbWVudCBoZXJlXG4gICAgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNDb250YWluZXIuaWQgPSBcInBob3RvLWRldGFpbFwiO1xuICAgIGRldGFpbHNDb250YWluZXIuY2xhc3NOYW1lID0gXCJjLWRldGFpbHNcIjtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2EtZmFkZWluJyk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnNcbiAgICBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJldkJ0bi5jbGFzc05hbWUgPSBcImMtYnRuLS1wcmV2IGMtYnRuLS1hcnJvdy1sZWZ0XCI7XG4gICAgcHJldkJ0bi5pZCA9IFwicHJldi1idG5cIjtcbiAgICBwcmV2QnRuLmlubmVySFRNTCA9IFwiUHJldmlvdXNcIjtcbiAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBsb2FkUHJldmlvdXNQaG90bygpO1xuICAgIH0pO1xuXG4gICAgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5leHRCdG4uY2xhc3NOYW1lID0gXCJjLWJ0bi0tbmV4dCBjLWJ0bi0tYXJyb3ctcmlnaHRcIjtcbiAgICBuZXh0QnRuLmlkID0gXCJuZXh0LWJ0blwiO1xuICAgIG5leHRCdG4uaW5uZXJIVE1MID0gXCJOZXh0XCI7XG4gICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgbG9hZE5leHRQaG90bygpO1xuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlIG91ciBmdWxsIHBob3RvIHByZXZpZXcgaGVyZVxuICAgIGZ1bGxQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZ1bGxQaG90by5pZCA9IFwicGhvdG8tZGV0YWlsX19pbWdcIjtcbiAgICBmdWxsUGhvdG8uY2xhc3NMaXN0LmFkZChcImMtZGV0YWlsc19faW1nXCIpO1xuICAgIGZ1bGxQaG90by5jbGFzc0xpc3QuYWRkKFwiYS1mYWRlaW5kb3duXCIpO1xuICAgIGZ1bGxQaG90by5zcmMgPSBwaG90b0RldGFpbHMudXJscy5yZWd1bGFyO1xuICAgIGZ1bGxQaG90by5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nLWlkJywgcGhvdG9JRCk7XG4gICAgZnVsbFBob3RvLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWctaW5kZXgnLCBwaG90b0luZGV4KTtcbiAgICBmdWxsUGhvdG8uc2V0QXR0cmlidXRlKCdhbHQnLCBcIlBob3RvIGJ5IFwiICsgcGhvdG9EZXRhaWxzLnVzZXIubmFtZSk7XG5cbiAgICAvLyB3ZSdsbCBhbHNvIGNyZWF0ZSBvdXIgY2xvc2UgYnV0dG9uIHRvb1xuICAgIHZhciBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnRuLmlkID0gXCJwaG90by1kZXRhaWxfX2Nsb3NlXCI7XG4gICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gXCJjLWJ0bi0tY2xvc2VcIjtcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBcIkNsb3NlXCI7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG8tZGV0YWlsXCIpLnJlbW92ZSgpO1xuICAgIH0gKTtcblxuXG4gICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmV2QnRuKTsgLy8gYWRkIHRoZSBwcmV2aW91cyBidXR0b24gdG8gdGhlIGRldGFpbHNDb250YWluZXJcbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5leHRCdG4pOyAvLyBhZGQgdGhlIG5leHQgYnV0dG9uIHRvIHRoZSBkZXRhaWxzQ29udGFpbmVyXG4gICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7IC8vIGFkZCB0aGUgY2xvc2UgYnV0dG9uIHRvIHRoZSBkZXRhaWxzQ29udGFpbmVyXG4gICAgZGV0YWlsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmdWxsUGhvdG8pOyAvLyBhZGQgdGhlIHBob3RvIHRvIHRoZSBkZXRhaWxzQ29udGFpbmVyXG5cbiAgICAvLyB0aGVuIGFkZCB0aGUgI3Bob3RvLWRldGFpbCB0byB0aGUgcGFnZVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGV0YWlsc0NvbnRhaW5lcik7XG4gIH1cbn1cblxuXG4vKlxuICogUmVtb3ZlIGN1cnJlbnQgcGhvdG8gZnJvbSBkZXRhaWwgdmlld1xuICovXG5cbmZ1bmN0aW9uIHN3YXBEZXRhaWxQaG90b3MoY3VycmVudFBob3RvLCBjdXJyZW50SW5kZXgsIGluY3JlbWVudERpcmVjdGlvbikge1xuICB2YXIgbmV4dFBob3RvSW5kZXgsIGZhZGVEaXJlY3Rpb247XG4gIGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGN1cnJlbnRJbmRleCk7XG5cbiAgLy8gc2V0IHRoZSBmYWRlRGlyZWN0aW9uIG9mIHRoZSBpbWFnZXMgYmFzZWQgdXBvbiB0aGUgZGlyZWN0aW9uIHRoZSB1c2VyIGNob3NlIHRvIHByb2NlZWRcbiAgaWYgKGluY3JlbWVudERpcmVjdGlvbiA9PT0gXCJwcmV2XCIpIHsgZmFkZURpcmVjdGlvbiA9IFwicmlnaHRcIjsgfVxuICBpZiAoaW5jcmVtZW50RGlyZWN0aW9uID09PSBcIm5leHRcIikgeyBmYWRlRGlyZWN0aW9uID0gXCJsZWZ0XCI7IH1cblxuICAvLyB3ZSdsbCBwcmVwYXJlIHRoZSBwaG90byBmb3IgcmVtb3ZhbCB3aXRoIHNvbWUgYW5pbWF0aW9ucyBhbmQgYSBuZXcgaWRcbiAgY3VycmVudFBob3RvLmNsYXNzTGlzdC5yZW1vdmUoXCJhLWZhZGVpbmRvd25cIik7XG4gIGN1cnJlbnRQaG90by5jbGFzc0xpc3QuYWRkKFwiYS1mYWRlb3V0XCIgKyBmYWRlRGlyZWN0aW9uKTtcbiAgY3VycmVudFBob3RvLmlkID0gXCJwcmV2aW91cy1waG90b1wiOyAvLyB0aGlzIGlzIG5vIGxvbmdlciB0aGUgY3VycmVudCBwaG90bywgc28gZ2l2ZSBpdCBhIG5ldyBpZCBzbyB3ZSBkb24ndCBjb25mbGljdCBpbiB0aGUgRE9NXG4gIGN1cnJlbnRQaG90by5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBvbmNlIHRoZSBDU1MgYW5pbWF0aW9uIGhhcyBlbmRlZCwgd2UnbGwgcmVtb3ZlIHRoZSBvbGQgcGhvdG9cbiAgICBjdXJyZW50UGhvdG8ucmVtb3ZlKCk7XG5cbiAgICAvLyBhZnRlciB0aGF0LCAgd2UnbGwgbG9hZCBhIG5ldyBvbmUuLi5cblxuICAgIC8vIHN0YXJ0IGJ5IGdldHRpbmcgYW4gYWNjdXJhdGUgaW5kZXggb2YgdGhlIHBob3RvcyB3ZSBsb2FkZWRcblxuICAgIGlmICggaW5jcmVtZW50RGlyZWN0aW9uID09PSBcInByZXZcIiApIHtcbiAgICAgIC8vIGlmIHdlIG5lZWQgdGhlIHByZXZpb3VzIHBob3RvLCB3b3JrIHRvd2FyZCBhIG5lZ2F0aXZlIGluZGV4IHZhbHVlXG5cbiAgICAgIGlmICggY3VycmVudEluZGV4ID09PSAwICkge1xuICAgICAgICBuZXh0UGhvdG9JbmRleCA9IHBhcnNlSW50KHBob3RvRGF0YS5sZW5ndGgpIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRQaG90b0luZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgd2UgbmVlZCB0aGUgbmV4dCBwaG90byBpbmNyZW1lbnQgdXB3YXJkc1xuXG4gICAgICBpZiAoIGN1cnJlbnRJbmRleCA+PSAoIHBob3RvRGF0YS5sZW5ndGggLSAxICkgKSB7XG4gICAgICAgIG5leHRQaG90b0luZGV4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRQaG90b0luZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld1Bob3RvLmNsYXNzTGlzdC5hZGQoJ2MtZGV0YWlsc19faW1nJyk7XG4gICAgbmV3UGhvdG8uY2xhc3NMaXN0LmFkZCgnYS1mYWRlaW4nICsgZmFkZURpcmVjdGlvbik7XG4gICAgbmV3UGhvdG8uc2V0QXR0cmlidXRlKCdkYXRhLWltZy1pbmRleCcsIG5leHRQaG90b0luZGV4KTtcbiAgICBuZXdQaG90by5pZCA9IFwicGhvdG8tZGV0YWlsX19pbWdcIjtcbiAgICBuZXdQaG90by5zcmMgPSBwaG90b0RhdGFbbmV4dFBob3RvSW5kZXhdLnVybHMucmVndWxhcjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG8tZGV0YWlsXCIpLmFwcGVuZENoaWxkKG5ld1Bob3RvKTtcbiAgfSk7XG59XG5cblxuLypcbiAqIExvYWQgdGhlIFByZXZpb3VzIFBob3RvXG4gKi9cblxuZnVuY3Rpb24gbG9hZFByZXZpb3VzUGhvdG8oKSB7XG4gIHZhciBjdXJyZW50UGhvdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob3RvLWRldGFpbF9faW1nXCIpO1xuICB2YXIgY3VycmVudEluZGV4ID0gY3VycmVudFBob3RvLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWctaW5kZXgnKTtcblxuICBzd2FwRGV0YWlsUGhvdG9zKGN1cnJlbnRQaG90bywgY3VycmVudEluZGV4LCBcInByZXZcIik7XG59XG5cblxuLypcbiAqIExvYWQgdGhlIE5leHQgUGhvdG9cbiAqL1xuXG5mdW5jdGlvbiBsb2FkTmV4dFBob3RvKCkge1xuICB2YXIgY3VycmVudFBob3RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90by1kZXRhaWxfX2ltZ1wiKTtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IGN1cnJlbnRQaG90by5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nLWluZGV4Jyk7XG5cbiAgc3dhcERldGFpbFBob3RvcyhjdXJyZW50UGhvdG8sIGN1cnJlbnRJbmRleCwgXCJuZXh0XCIpO1xufVxuXG5cbi8qXG4gKiBXZSB3aWxsIHVzZSB0aGlzIHRvIGV4cGFuZCBvdXIgcGhvdG9zXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZFBob3RvKGUpIHtcbiAgLy8gMS4gc3RvcCB0aGUgbGluayBmcm9tIG9wZW5pbmcgaW4gYSBuZXcgdGFiXG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICAvLyAyLiBkaXNwbGF5IHRoZSBkZXRhaWxzIHZpZXcgb2YgdGhlIHBob3RvXG4gIGRpc3BsYXlEZXRhaWxzKCB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWctaWQnKSwgdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nLWluZGV4JykgKTtcbn1cblxuLypcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIHBob3RvcyBmcm9tIG91ciBzb3VyY2UgZGVmaW5lZCBhYm92ZVxuICovXG5mdW5jdGlvbiBnZXRQaG90b3MoKSB7XG4gIC8vIDEuIEluaXRpYWxpemUgb3VyIHJlcXVlc3RcbiAgdmFyIHBob3RvcyA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIC8vIDIuIFdhaXQgZm9yIHRoZSByZWFkeSBzdGF0ZSB0byBjaGFuZ2UuLi5cbiAgcGhvdG9zLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gMy4gSWYgdGhlIHN0YXRlIGlzIHJlYWR5LCB0aGVuIHByb2NlZWQgd2l0aCB0aGUgcmVxdWVzdFxuICAgIGlmICggcGhvdG9zLnJlYWR5U3RhdGUgPT0gNCAmJiBwaG90b3Muc3RhdHVzID09IDIwMCApIHtcbiAgICAgIC8vIDQuIFN0b3JlIHRoZSBwaG90byBkYXRhIGluIGEgKEpTT04pIHZhcmlhYmxlIHNvIHdlIGNhbiBhY2Nlc3MgaXRcbiAgICAgIHBob3RvRGF0YSA9IEpTT04ucGFyc2UocGhvdG9zLnJlc3BvbnNlVGV4dCk7XG5cbiAgICAgIC8vIDUuIEZvciBlYWNoIHBob3RvIHJldHVybmVkLCBidWlsZFByZXZpZXcoKVxuICAgICAgcGhvdG9EYXRhLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBidWlsZFByZXZpZXcoZS51cmxzLnNtYWxsLCBlLnVybHMucmVndWxhciwgZS5pZCwgaSk7XG5cbiAgICAgICAgLy8gNi4gV2hlbiB3ZSBoYXZlIGFsbCBvZiB0aGUgcGhvdG9zIG9uIHRoZSBwYWdlLCBxdWVyeVNlbGVjdG9yQWxsIG9mIHRoZW0hXG4gICAgICAgIGlmICggKGkgKyAxKSA9PT0gcGhvdG9EYXRhLmxlbmd0aCApIHtcblxuICAgICAgICAgIC8vIDcuIGdyYWIgYWxsIHRoZSBwaG90b3MgYW5kIHN0b3JlIHRoZW0gaW4gYSB2YXJpYWJsZVxuICAgICAgICAgIHBob3RvUHJldmlld3MgPSBwaG90b0dyaWQucXVlcnlTZWxlY3RvckFsbCgnLmMtcHJldmlldycpO1xuXG4gICAgICAgICAgLy8gOC4gbG9vcCB0aHJvdWdoIGFuZCBhdHRhY2ggdGhlIGV4cGFuZFBob3RvIGZ1bmN0aW9uIG9uIGNsaWNrXG4gICAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBwaG90b1ByZXZpZXdzLmxlbmd0aDsgcCsrICkge1xuICAgICAgICAgICAgcGhvdG9QcmV2aWV3c1twXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZFBob3RvICk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHBob3Rvcy5vcGVuKFwiR0VUXCIsIEFQSV9VUkwsIHRydWUpO1xuICBwaG90b3Muc2VuZCgpO1xufVxuXG4vKlxuICogVGhpcyB3aWxsIHJ1biB3aGVuIHRoZSBET00gaXMgcmVhZHkuXG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGdldFBob3RvcygpO1xufVxuXG4vLyBXaGVuIHRoZSBET00gaXMgcmVhZHksIGdvIGFoZWFkIGFuZCBydW4gb3VyIGluaXQoKVxud2luZG93Lm9ubG9hZCA9IGluaXQoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
