/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-objectfit-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in g)if(g.hasOwnProperty(f)){if(e=[],n=g[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(w?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=l,_.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function l(){p&&(delete z.style,delete z.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan","samp"];!z.style&&y.length;)p=!0,z.modElem=f(y.shift()),z.style=z.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=z.style[v],a(v,"-")&&(v=s(v)),z.style[v]!==t){if(i||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{z.style[v]=o}catch(g){}if(z.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+E.join(s+" ")+s).split(" "),u(a,n,t))}var y=[],g=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var _=n.documentElement,w="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",S=C._config.usePrefixes?x.split(" "):[];C._cssomPrefixes=S;var b=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=b;var E=C._config.usePrefixes?x.toLowerCase().split(" "):[];C._domPrefixes=E;var j={elem:f("modernizr")};Modernizr._q.push(function(){delete j.elem});var z={style:j.elem.style};Modernizr._q.unshift(function(){delete z.style}),C.testAllProps=h;var N=C.prefixed=function(e,n,t){return 0===e.indexOf("@")?b(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};Modernizr.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),o(),i(y),delete C.addTest,delete C.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);


/* This is where we will get our photos from. */
const API_URL = "https://api.unsplash.com/photos/?client_id=5c680ed0727325d7218e6fcbf3a5fbeac540121b2fe88064fdb54e9011dc7aef&per_page=9&order_by=popular";
var photoGrid = document.getElementById('photo-grid');
var photoData, photoPreviews, previewIMGs;

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
      var photoDetail = document.getElementById("photo-detail");
      photoDetail.parentNode.removeChild(photoDetail);
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
    currentPhoto.parentNode.removeChild(currentPhoto);

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
          previewIMGs = document.querySelectorAll('.c-preview__img');

          fixObjectFit();

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
 * Fix the unsupported object-fit issue in IE
 */

function fixObjectFit() {
  if ( ! Modernizr.objectfit ) {
    for (var i = 0; i < previewIMGs.length; i++ ) {
      previewIMGs[i].classList.add('u-invisible');
      previewIMGs[i].parentNode.setAttribute('style', 'background-image: url('+previewIMGs[i].src+')');
      previewIMGs[i].parentNode.classList.add('u-objectfit-fix');
    };
  }
}

/*
 * This will run when the DOM is ready.
 */
function init() {
  getPhotos();
}

// When the DOM is ready, go ahead and run our init()
window.onload = init();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJidWlsZFByZXZpZXciLCJpbWdQcmV2aWV3VVJMIiwiaW1nRnVsbFVSTCIsImltZ0lEIiwiaW1nSW5kZXgiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInRhcmdldCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImltZyIsInNyYyIsImFwcGVuZENoaWxkIiwicGhvdG9HcmlkIiwiZGlzcGxheURldGFpbHMiLCJwaG90b0lEIiwicGhvdG9JbmRleCIsImRldGFpbHNDb250YWluZXIiLCJmdWxsUGhvdG8iLCJwcmV2QnRuIiwibmV4dEJ0biIsInBob3RvRGV0YWlscyIsInBob3RvRGF0YSIsImdldEVsZW1lbnRCeUlkIiwidXJscyIsInJlZ3VsYXIiLCJ1c2VyIiwibmFtZSIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRQcmV2aW91c1Bob3RvIiwibG9hZE5leHRQaG90byIsImNsb3NlQnRuIiwicGhvdG9EZXRhaWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJib2R5Iiwic3dhcERldGFpbFBob3RvcyIsImN1cnJlbnRQaG90byIsImN1cnJlbnRJbmRleCIsImluY3JlbWVudERpcmVjdGlvbiIsIm5leHRQaG90b0luZGV4IiwiZmFkZURpcmVjdGlvbiIsInBhcnNlSW50IiwicmVtb3ZlIiwibGVuZ3RoIiwibmV3UGhvdG8iLCJnZXRBdHRyaWJ1dGUiLCJleHBhbmRQaG90byIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRoaXMiLCJnZXRQaG90b3MiLCJwaG90b3MiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJmb3JFYWNoIiwiaSIsInNtYWxsIiwicGhvdG9QcmV2aWV3cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcmV2aWV3SU1HcyIsImZpeE9iamVjdEZpdCIsInAiLCJvcGVuIiwiQVBJX1VSTCIsInNlbmQiLCJNb2Rlcm5penIiLCJvYmplY3RmaXQiLCJpbml0IiwibiIsInQiLCJyIiwibyIsInMiLCJmIiwiZyIsImhhc093blByb3BlcnR5IiwicHVzaCIsInRvTG93ZXJDYXNlIiwib3B0aW9ucyIsImFsaWFzZXMiLCJmbiIsInNwbGl0IiwiQm9vbGVhbiIsInkiLCJqb2luIiwiXyIsIl9jb25maWciLCJjbGFzc1ByZWZpeCIsInciLCJiYXNlVmFsIiwiZW5hYmxlSlNDbGFzcyIsIlJlZ0V4cCIsInJlcGxhY2UiLCJlbmFibGVDbGFzc2VzIiwidG9VcHBlckNhc2UiLCJpbmRleE9mIiwiYXJndW1lbnRzIiwiY3JlYXRlRWxlbWVudE5TIiwiY2FsbCIsImFwcGx5IiwibCIsInUiLCJkIiwiZmFrZSIsImMiLCJ0eXBlIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm92ZXJmbG93Iiwib2Zmc2V0SGVpZ2h0IiwibSIsIkNTUyIsInN1cHBvcnRzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwidiIsInoiLCJtb2RFbGVtIiwiaCIsInNoaWZ0IiwiY2hhckF0Iiwic2xpY2UiLCJTIiwiRSIsIkMiLCJfdmVyc2lvbiIsInVzZVByZWZpeGVzIiwiX3EiLCJvbiIsInNldFRpbWVvdXQiLCJhZGRUZXN0IiwiYWRkQXN5bmNUZXN0IiwicHJvdG90eXBlIiwiZG9jdW1lbnRFbGVtZW50Iiwibm9kZU5hbWUiLCJ4IiwiX2Nzc29tUHJlZml4ZXMiLCJiIiwicHJlZml4ZXMiLCJDU1NSdWxlIiwiYXRSdWxlIiwiX2RvbVByZWZpeGVzIiwiaiIsImVsZW0iLCJ1bnNoaWZ0IiwidGVzdEFsbFByb3BzIiwiTiIsInByZWZpeGVkIiwiUCIsIndpbmRvdyIsIm9ubG9hZCJdLCJtYXBwaW5ncyI6IkFBYUEsUUFBQUEsY0FBQUMsRUFBQUMsRUFBQUMsRUFB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QUFBLGdCQUFBUixJQUFBaEIsRUFBQTRCLFNBQUE0QyxHQUFBTSxjQUFBTixHQUFBTyxZQUFBLEtBQUEsR0FBQWlCLEdBQUEsRUFBQUEsRUFBQXRGLEVBQUFpRSxHQUFBNUYsT0FBQWlILElBQUF0RixFQUFBaUUsR0FBQXFCLElBQUE3RyxHQUFBdUIsVUFBQUEsR0FBQXVGLE9BQUE5SixTQUlBLE1BQUFxRSxTQUFBLHlJQUNBLElBQUE1RCxXQUFBVCxTQUFBbUIsZUFBQSxjQUNBRCxVQUFBNkMsY0FBQUUsV0EwUEE2RixRQUFBQyxPQUFBdEYiLCJmaWxlIjoiYWxsLWRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIG1vZGVybml6ciAzLjMuMSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAqXG4gKiBodHRwczovL21vZGVybml6ci5jb20vZG93bmxvYWQvPy1vYmplY3RmaXQtc2V0Y2xhc3NlcyAhKi9cbiFmdW5jdGlvbihlLG4sdCl7ZnVuY3Rpb24gcihlLG4pe3JldHVybiB0eXBlb2YgZT09PW59ZnVuY3Rpb24gbygpe3ZhciBlLG4sdCxvLGkscyxhO2Zvcih2YXIgZiBpbiBnKWlmKGcuaGFzT3duUHJvcGVydHkoZikpe2lmKGU9W10sbj1nW2ZdLG4ubmFtZSYmKGUucHVzaChuLm5hbWUudG9Mb3dlckNhc2UoKSksbi5vcHRpb25zJiZuLm9wdGlvbnMuYWxpYXNlcyYmbi5vcHRpb25zLmFsaWFzZXMubGVuZ3RoKSlmb3IodD0wO3Q8bi5vcHRpb25zLmFsaWFzZXMubGVuZ3RoO3QrKyllLnB1c2gobi5vcHRpb25zLmFsaWFzZXNbdF0udG9Mb3dlckNhc2UoKSk7Zm9yKG89cihuLmZuLFwiZnVuY3Rpb25cIik/bi5mbigpOm4uZm4saT0wO2k8ZS5sZW5ndGg7aSsrKXM9ZVtpXSxhPXMuc3BsaXQoXCIuXCIpLDE9PT1hLmxlbmd0aD9Nb2Rlcm5penJbYVswXV09bzooIU1vZGVybml6clthWzBdXXx8TW9kZXJuaXpyW2FbMF1daW5zdGFuY2VvZiBCb29sZWFufHwoTW9kZXJuaXpyW2FbMF1dPW5ldyBCb29sZWFuKE1vZGVybml6clthWzBdXSkpLE1vZGVybml6clthWzBdXVthWzFdXT1vKSx5LnB1c2goKG8/XCJcIjpcIm5vLVwiKSthLmpvaW4oXCItXCIpKX19ZnVuY3Rpb24gaShlKXt2YXIgbj1fLmNsYXNzTmFtZSx0PU1vZGVybml6ci5fY29uZmlnLmNsYXNzUHJlZml4fHxcIlwiO2lmKHcmJihuPW4uYmFzZVZhbCksTW9kZXJuaXpyLl9jb25maWcuZW5hYmxlSlNDbGFzcyl7dmFyIHI9bmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK3QrXCJuby1qcyhcXFxcc3wkKVwiKTtuPW4ucmVwbGFjZShyLFwiJDFcIit0K1wianMkMlwiKX1Nb2Rlcm5penIuX2NvbmZpZy5lbmFibGVDbGFzc2VzJiYobis9XCIgXCIrdCtlLmpvaW4oXCIgXCIrdCksdz9fLmNsYXNzTmFtZS5iYXNlVmFsPW46Xy5jbGFzc05hbWU9bil9ZnVuY3Rpb24gcyhlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW2Etel0pLShbYS16XSkvZyxmdW5jdGlvbihlLG4sdCl7cmV0dXJuIG4rdC50b1VwcGVyQ2FzZSgpfSkucmVwbGFjZSgvXi0vLFwiXCIpfWZ1bmN0aW9uIGEoZSxuKXtyZXR1cm4hIX4oXCJcIitlKS5pbmRleE9mKG4pfWZ1bmN0aW9uIGYoKXtyZXR1cm5cImZ1bmN0aW9uXCIhPXR5cGVvZiBuLmNyZWF0ZUVsZW1lbnQ/bi5jcmVhdGVFbGVtZW50KGFyZ3VtZW50c1swXSk6dz9uLmNyZWF0ZUVsZW1lbnROUy5jYWxsKG4sXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGFyZ3VtZW50c1swXSk6bi5jcmVhdGVFbGVtZW50LmFwcGx5KG4sYXJndW1lbnRzKX1mdW5jdGlvbiBsKGUsbil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkobixhcmd1bWVudHMpfX1mdW5jdGlvbiB1KGUsbix0KXt2YXIgbztmb3IodmFyIGkgaW4gZSlpZihlW2ldaW4gbilyZXR1cm4gdD09PSExP2VbaV06KG89bltlW2ldXSxyKG8sXCJmdW5jdGlvblwiKT9sKG8sdHx8bik6byk7cmV0dXJuITF9ZnVuY3Rpb24gcChlKXtyZXR1cm4gZS5yZXBsYWNlKC8oW0EtWl0pL2csZnVuY3Rpb24oZSxuKXtyZXR1cm5cIi1cIituLnRvTG93ZXJDYXNlKCl9KS5yZXBsYWNlKC9ebXMtLyxcIi1tcy1cIil9ZnVuY3Rpb24gZCgpe3ZhciBlPW4uYm9keTtyZXR1cm4gZXx8KGU9Zih3P1wic3ZnXCI6XCJib2R5XCIpLGUuZmFrZT0hMCksZX1mdW5jdGlvbiBjKGUsdCxyLG8pe3ZhciBpLHMsYSxsLHU9XCJtb2Rlcm5penJcIixwPWYoXCJkaXZcIiksYz1kKCk7aWYocGFyc2VJbnQociwxMCkpZm9yKDtyLS07KWE9ZihcImRpdlwiKSxhLmlkPW8/b1tyXTp1KyhyKzEpLHAuYXBwZW5kQ2hpbGQoYSk7cmV0dXJuIGk9ZihcInN0eWxlXCIpLGkudHlwZT1cInRleHQvY3NzXCIsaS5pZD1cInNcIit1LChjLmZha2U/YzpwKS5hcHBlbmRDaGlsZChpKSxjLmFwcGVuZENoaWxkKHApLGkuc3R5bGVTaGVldD9pLnN0eWxlU2hlZXQuY3NzVGV4dD1lOmkuYXBwZW5kQ2hpbGQobi5jcmVhdGVUZXh0Tm9kZShlKSkscC5pZD11LGMuZmFrZSYmKGMuc3R5bGUuYmFja2dyb3VuZD1cIlwiLGMuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixsPV8uc3R5bGUub3ZlcmZsb3csXy5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLF8uYXBwZW5kQ2hpbGQoYykpLHM9dChwLGUpLGMuZmFrZT8oYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpLF8uc3R5bGUub3ZlcmZsb3c9bCxfLm9mZnNldEhlaWdodCk6cC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApLCEhc31mdW5jdGlvbiBtKG4scil7dmFyIG89bi5sZW5ndGg7aWYoXCJDU1NcImluIGUmJlwic3VwcG9ydHNcImluIGUuQ1NTKXtmb3IoO28tLTspaWYoZS5DU1Muc3VwcG9ydHMocChuW29dKSxyKSlyZXR1cm4hMDtyZXR1cm4hMX1pZihcIkNTU1N1cHBvcnRzUnVsZVwiaW4gZSl7Zm9yKHZhciBpPVtdO28tLTspaS5wdXNoKFwiKFwiK3AobltvXSkrXCI6XCIrcitcIilcIik7cmV0dXJuIGk9aS5qb2luKFwiIG9yIFwiKSxjKFwiQHN1cHBvcnRzIChcIitpK1wiKSB7ICNtb2Rlcm5penIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfVwiLGZ1bmN0aW9uKGUpe3JldHVyblwiYWJzb2x1dGVcIj09Z2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLnBvc2l0aW9ufSl9cmV0dXJuIHR9ZnVuY3Rpb24gdihlLG4sbyxpKXtmdW5jdGlvbiBsKCl7cCYmKGRlbGV0ZSB6LnN0eWxlLGRlbGV0ZSB6Lm1vZEVsZW0pfWlmKGk9cihpLFwidW5kZWZpbmVkXCIpPyExOmksIXIobyxcInVuZGVmaW5lZFwiKSl7dmFyIHU9bShlLG8pO2lmKCFyKHUsXCJ1bmRlZmluZWRcIikpcmV0dXJuIHV9Zm9yKHZhciBwLGQsYyx2LGgseT1bXCJtb2Rlcm5penJcIixcInRzcGFuXCIsXCJzYW1wXCJdOyF6LnN0eWxlJiZ5Lmxlbmd0aDspcD0hMCx6Lm1vZEVsZW09Zih5LnNoaWZ0KCkpLHouc3R5bGU9ei5tb2RFbGVtLnN0eWxlO2ZvcihjPWUubGVuZ3RoLGQ9MDtjPmQ7ZCsrKWlmKHY9ZVtkXSxoPXouc3R5bGVbdl0sYSh2LFwiLVwiKSYmKHY9cyh2KSksei5zdHlsZVt2XSE9PXQpe2lmKGl8fHIobyxcInVuZGVmaW5lZFwiKSlyZXR1cm4gbCgpLFwicGZ4XCI9PW4/djohMDt0cnl7ei5zdHlsZVt2XT1vfWNhdGNoKGcpe31pZih6LnN0eWxlW3ZdIT1oKXJldHVybiBsKCksXCJwZnhcIj09bj92OiEwfXJldHVybiBsKCksITF9ZnVuY3Rpb24gaChlLG4sdCxvLGkpe3ZhciBzPWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxhPShlK1wiIFwiK1Muam9pbihzK1wiIFwiKStzKS5zcGxpdChcIiBcIik7cmV0dXJuIHIobixcInN0cmluZ1wiKXx8cihuLFwidW5kZWZpbmVkXCIpP3YoYSxuLG8saSk6KGE9KGUrXCIgXCIrRS5qb2luKHMrXCIgXCIpK3MpLnNwbGl0KFwiIFwiKSx1KGEsbix0KSl9dmFyIHk9W10sZz1bXSxDPXtfdmVyc2lvbjpcIjMuMy4xXCIsX2NvbmZpZzp7Y2xhc3NQcmVmaXg6XCJcIixlbmFibGVDbGFzc2VzOiEwLGVuYWJsZUpTQ2xhc3M6ITAsdXNlUHJlZml4ZXM6ITB9LF9xOltdLG9uOmZ1bmN0aW9uKGUsbil7dmFyIHQ9dGhpcztzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bih0W2VdKX0sMCl9LGFkZFRlc3Q6ZnVuY3Rpb24oZSxuLHQpe2cucHVzaCh7bmFtZTplLGZuOm4sb3B0aW9uczp0fSl9LGFkZEFzeW5jVGVzdDpmdW5jdGlvbihlKXtnLnB1c2goe25hbWU6bnVsbCxmbjplfSl9fSxNb2Rlcm5penI9ZnVuY3Rpb24oKXt9O01vZGVybml6ci5wcm90b3R5cGU9QyxNb2Rlcm5penI9bmV3IE1vZGVybml6cjt2YXIgXz1uLmRvY3VtZW50RWxlbWVudCx3PVwic3ZnXCI9PT1fLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkseD1cIk1veiBPIG1zIFdlYmtpdFwiLFM9Qy5fY29uZmlnLnVzZVByZWZpeGVzP3guc3BsaXQoXCIgXCIpOltdO0MuX2Nzc29tUHJlZml4ZXM9Uzt2YXIgYj1mdW5jdGlvbihuKXt2YXIgcixvPXByZWZpeGVzLmxlbmd0aCxpPWUuQ1NTUnVsZTtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgaSlyZXR1cm4gdDtpZighbilyZXR1cm4hMTtpZihuPW4ucmVwbGFjZSgvXkAvLFwiXCIpLHI9bi5yZXBsYWNlKC8tL2csXCJfXCIpLnRvVXBwZXJDYXNlKCkrXCJfUlVMRVwiLHIgaW4gaSlyZXR1cm5cIkBcIituO2Zvcih2YXIgcz0wO28+cztzKyspe3ZhciBhPXByZWZpeGVzW3NdLGY9YS50b1VwcGVyQ2FzZSgpK1wiX1wiK3I7aWYoZiBpbiBpKXJldHVyblwiQC1cIithLnRvTG93ZXJDYXNlKCkrXCItXCIrbn1yZXR1cm4hMX07Qy5hdFJ1bGU9Yjt2YXIgRT1DLl9jb25maWcudXNlUHJlZml4ZXM/eC50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTpbXTtDLl9kb21QcmVmaXhlcz1FO3ZhciBqPXtlbGVtOmYoXCJtb2Rlcm5penJcIil9O01vZGVybml6ci5fcS5wdXNoKGZ1bmN0aW9uKCl7ZGVsZXRlIGouZWxlbX0pO3ZhciB6PXtzdHlsZTpqLmVsZW0uc3R5bGV9O01vZGVybml6ci5fcS51bnNoaWZ0KGZ1bmN0aW9uKCl7ZGVsZXRlIHouc3R5bGV9KSxDLnRlc3RBbGxQcm9wcz1oO3ZhciBOPUMucHJlZml4ZWQ9ZnVuY3Rpb24oZSxuLHQpe3JldHVybiAwPT09ZS5pbmRleE9mKFwiQFwiKT9iKGUpOigtMSE9ZS5pbmRleE9mKFwiLVwiKSYmKGU9cyhlKSksbj9oKGUsbix0KTpoKGUsXCJwZnhcIikpfTtNb2Rlcm5penIuYWRkVGVzdChcIm9iamVjdGZpdFwiLCEhTihcIm9iamVjdEZpdFwiKSx7YWxpYXNlczpbXCJvYmplY3QtZml0XCJdfSksbygpLGkoeSksZGVsZXRlIEMuYWRkVGVzdCxkZWxldGUgQy5hZGRBc3luY1Rlc3Q7Zm9yKHZhciBQPTA7UDxNb2Rlcm5penIuX3EubGVuZ3RoO1ArKylNb2Rlcm5penIuX3FbUF0oKTtlLk1vZGVybml6cj1Nb2Rlcm5penJ9KHdpbmRvdyxkb2N1bWVudCk7XG5cblxuLyogVGhpcyBpcyB3aGVyZSB3ZSB3aWxsIGdldCBvdXIgcGhvdG9zIGZyb20uICovXG5jb25zdCBBUElfVVJMID0gXCJodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zLz9jbGllbnRfaWQ9NWM2ODBlZDA3MjczMjVkNzIxOGU2ZmNiZjNhNWZiZWFjNTQwMTIxYjJmZTg4MDY0ZmRiNTRlOTAxMWRjN2FlZiZwZXJfcGFnZT05Jm9yZGVyX2J5PXBvcHVsYXJcIjtcbnZhciBwaG90b0dyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG8tZ3JpZCcpO1xudmFyIHBob3RvRGF0YSwgcGhvdG9QcmV2aWV3cywgcHJldmlld0lNR3M7XG5cbi8qXG4gKiBUaGlzIHdpbGwgYnVpbGQgdGhlIHByZXZpZXcgYmxvY2tzIGFuZCBwdXQgdGhlbSBvbiB0aGUgcGFnZS5cbiAqL1xuZnVuY3Rpb24gYnVpbGRQcmV2aWV3KGltZ1ByZXZpZXdVUkwsIGltZ0Z1bGxVUkwsIGltZ0lELCBpbWdJbmRleCkge1xuICAvLyAxLiBDcmVhdGUgYW4gPGE+IGVsZW1lbnQgYXMgb3VyIGxpbmtcbiAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuaHJlZiA9IGltZ0Z1bGxVUkw7XG4gIGEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgYS5jbGFzc05hbWUgPSBcImMtcHJldmlld1wiO1xuICBhLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWctaWQnLCBpbWdJRCk7XG4gIGEuc2V0QXR0cmlidXRlKCdkYXRhLWltZy1pbmRleCcsIGltZ0luZGV4KTtcblxuICAvLyAyLiBDcmVhdGUgdGhlIGltYWdlIGFuZCBhcHBlbmQgaXQgdG8gdGhlIDxhPlxuICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBpbWdQcmV2aWV3VVJMO1xuICBpbWcuY2xhc3NOYW1lID0gXCJjLXByZXZpZXdfX2ltZ1wiO1xuICBhLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgLy8gMy4gQWRkIGl0IHRvIHRoZSAjcGhvdG8tZ3JpZCBlbGVtZW50XG4gIHBob3RvR3JpZC5hcHBlbmRDaGlsZChhKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheURldGFpbHMocGhvdG9JRCwgcGhvdG9JbmRleCkge1xuICAvLyBncmFiIGp1c3QgdGhlIHBob3RvIG9iamVjdCB0aGF0IHdlIG5lZWQuXG4gIHZhciBwaG90b0RldGFpbHMgPSBwaG90b0RhdGFbcGhvdG9JbmRleF07XG5cbiAgLy8gZGVmaW5lIHNvbWUgbmVjZXNzYXJ5IHZhcmlhYmxlcyBiZWxvd1xuICB2YXIgZGV0YWlsc0NvbnRhaW5lciwgZnVsbFBob3RvLCBwcmV2QnRuLCBuZXh0QnRuO1xuXG4gIC8vIGxvb2sgdG8gc2VlIGlmIHRoZSAjcGhvdG8tZGV0YWlsIGlzIGFscmVhZHkgcHJlc2VudC5cbiAgaWYgKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG8tZGV0YWlsJykgKSB7XG5cbiAgICAvLyBpZiBpdCBleHN0cywgZGVmaW5lIG91ciBkZXRhaWxzIGNvbnRhaW5lciB2YXJpYWJsZSBoZXJlLlxuICAgIGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG8tZGV0YWlsJyk7XG4gICAgZnVsbFBob3RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob3RvLWRldGFpbF9faW1nJyk7XG4gICAgZnVsbFBob3RvLnNyYyA9IHBob3RvRGV0YWlscy51cmxzLnJlZ3VsYXI7XG4gICAgZnVsbFBob3RvLnNldEF0dHJpYnV0ZSgnYWx0JywgcGhvdG9EZXRhaWxzLnVzZXIubmFtZSk7XG5cbiAgfSBlbHNlIHtcblxuICAgIC8vIGlmIG5vdCwgdGhlbiBsZXRzIGNyZWF0ZSB0aGUgZWxlbWVudCBoZXJlXG4gICAgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNDb250YWluZXIuaWQgPSBcInBob3RvLWRldGFpbFwiO1xuICAgIGRldGFpbHNDb250YWluZXIuY2xhc3NOYW1lID0gXCJjLWRldGFpbHNcIjtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2EtZmFkZWluJyk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnNcbiAgICBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJldkJ0bi5jbGFzc05hbWUgPSBcImMtYnRuLS1wcmV2IGMtYnRuLS1hcnJvdy1sZWZ0XCI7XG4gICAgcHJldkJ0bi5pZCA9IFwicHJldi1idG5cIjtcbiAgICBwcmV2QnRuLmlubmVySFRNTCA9IFwiUHJldmlvdXNcIjtcbiAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBsb2FkUHJldmlvdXNQaG90bygpO1xuICAgIH0pO1xuXG4gICAgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5leHRCdG4uY2xhc3NOYW1lID0gXCJjLWJ0bi0tbmV4dCBjLWJ0bi0tYXJyb3ctcmlnaHRcIjtcbiAgICBuZXh0QnRuLmlkID0gXCJuZXh0LWJ0blwiO1xuICAgIG5leHRCdG4uaW5uZXJIVE1MID0gXCJOZXh0XCI7XG4gICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgbG9hZE5leHRQaG90bygpO1xuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlIG91ciBmdWxsIHBob3RvIHByZXZpZXcgaGVyZVxuICAgIGZ1bGxQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZ1bGxQaG90by5pZCA9IFwicGhvdG8tZGV0YWlsX19pbWdcIjtcbiAgICBmdWxsUGhvdG8uY2xhc3NMaXN0LmFkZChcImMtZGV0YWlsc19faW1nXCIpO1xuICAgIGZ1bGxQaG90by5jbGFzc0xpc3QuYWRkKFwiYS1mYWRlaW5kb3duXCIpO1xuICAgIGZ1bGxQaG90by5zcmMgPSBwaG90b0RldGFpbHMudXJscy5yZWd1bGFyO1xuICAgIGZ1bGxQaG90by5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nLWlkJywgcGhvdG9JRCk7XG4gICAgZnVsbFBob3RvLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWctaW5kZXgnLCBwaG90b0luZGV4KTtcbiAgICBmdWxsUGhvdG8uc2V0QXR0cmlidXRlKCdhbHQnLCBcIlBob3RvIGJ5IFwiICsgcGhvdG9EZXRhaWxzLnVzZXIubmFtZSk7XG5cbiAgICAvLyB3ZSdsbCBhbHNvIGNyZWF0ZSBvdXIgY2xvc2UgYnV0dG9uIHRvb1xuICAgIHZhciBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnRuLmlkID0gXCJwaG90by1kZXRhaWxfX2Nsb3NlXCI7XG4gICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gXCJjLWJ0bi0tY2xvc2VcIjtcbiAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBcIkNsb3NlXCI7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwaG90b0RldGFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG8tZGV0YWlsXCIpO1xuICAgICAgcGhvdG9EZXRhaWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwaG90b0RldGFpbCk7XG4gICAgfSApO1xuXG5cbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXZCdG4pOyAvLyBhZGQgdGhlIHByZXZpb3VzIGJ1dHRvbiB0byB0aGUgZGV0YWlsc0NvbnRhaW5lclxuICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV4dEJ0bik7IC8vIGFkZCB0aGUgbmV4dCBidXR0b24gdG8gdGhlIGRldGFpbHNDb250YWluZXJcbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTsgLy8gYWRkIHRoZSBjbG9zZSBidXR0b24gdG8gdGhlIGRldGFpbHNDb250YWluZXJcbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZ1bGxQaG90byk7IC8vIGFkZCB0aGUgcGhvdG8gdG8gdGhlIGRldGFpbHNDb250YWluZXJcblxuICAgIC8vIHRoZW4gYWRkIHRoZSAjcGhvdG8tZGV0YWlsIHRvIHRoZSBwYWdlXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXRhaWxzQ29udGFpbmVyKTtcbiAgfVxufVxuXG5cbi8qXG4gKiBSZW1vdmUgY3VycmVudCBwaG90byBmcm9tIGRldGFpbCB2aWV3XG4gKi9cblxuZnVuY3Rpb24gc3dhcERldGFpbFBob3RvcyhjdXJyZW50UGhvdG8sIGN1cnJlbnRJbmRleCwgaW5jcmVtZW50RGlyZWN0aW9uKSB7XG4gIHZhciBuZXh0UGhvdG9JbmRleCwgZmFkZURpcmVjdGlvbjtcbiAgY3VycmVudEluZGV4ID0gcGFyc2VJbnQoY3VycmVudEluZGV4KTtcblxuICAvLyBzZXQgdGhlIGZhZGVEaXJlY3Rpb24gb2YgdGhlIGltYWdlcyBiYXNlZCB1cG9uIHRoZSBkaXJlY3Rpb24gdGhlIHVzZXIgY2hvc2UgdG8gcHJvY2VlZFxuICBpZiAoaW5jcmVtZW50RGlyZWN0aW9uID09PSBcInByZXZcIikgeyBmYWRlRGlyZWN0aW9uID0gXCJyaWdodFwiOyB9XG4gIGlmIChpbmNyZW1lbnREaXJlY3Rpb24gPT09IFwibmV4dFwiKSB7IGZhZGVEaXJlY3Rpb24gPSBcImxlZnRcIjsgfVxuXG4gIC8vIHdlJ2xsIHByZXBhcmUgdGhlIHBob3RvIGZvciByZW1vdmFsIHdpdGggc29tZSBhbmltYXRpb25zIGFuZCBhIG5ldyBpZFxuICBjdXJyZW50UGhvdG8uY2xhc3NMaXN0LnJlbW92ZShcImEtZmFkZWluZG93blwiKTtcbiAgY3VycmVudFBob3RvLmNsYXNzTGlzdC5hZGQoXCJhLWZhZGVvdXRcIiArIGZhZGVEaXJlY3Rpb24pO1xuICBjdXJyZW50UGhvdG8uaWQgPSBcInByZXZpb3VzLXBob3RvXCI7IC8vIHRoaXMgaXMgbm8gbG9uZ2VyIHRoZSBjdXJyZW50IHBob3RvLCBzbyBnaXZlIGl0IGEgbmV3IGlkIHNvIHdlIGRvbid0IGNvbmZsaWN0IGluIHRoZSBET01cbiAgY3VycmVudFBob3RvLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIG9uY2UgdGhlIENTUyBhbmltYXRpb24gaGFzIGVuZGVkLCB3ZSdsbCByZW1vdmUgdGhlIG9sZCBwaG90b1xuICAgIGN1cnJlbnRQaG90by5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGN1cnJlbnRQaG90byk7XG5cbiAgICAvLyBhZnRlciB0aGF0LCAgd2UnbGwgbG9hZCBhIG5ldyBvbmUuLi5cblxuICAgIC8vIHN0YXJ0IGJ5IGdldHRpbmcgYW4gYWNjdXJhdGUgaW5kZXggb2YgdGhlIHBob3RvcyB3ZSBsb2FkZWRcblxuICAgIGlmICggaW5jcmVtZW50RGlyZWN0aW9uID09PSBcInByZXZcIiApIHtcbiAgICAgIC8vIGlmIHdlIG5lZWQgdGhlIHByZXZpb3VzIHBob3RvLCB3b3JrIHRvd2FyZCBhIG5lZ2F0aXZlIGluZGV4IHZhbHVlXG5cbiAgICAgIGlmICggY3VycmVudEluZGV4ID09PSAwICkge1xuICAgICAgICBuZXh0UGhvdG9JbmRleCA9IHBhcnNlSW50KHBob3RvRGF0YS5sZW5ndGgpIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRQaG90b0luZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgd2UgbmVlZCB0aGUgbmV4dCBwaG90byBpbmNyZW1lbnQgdXB3YXJkc1xuXG4gICAgICBpZiAoIGN1cnJlbnRJbmRleCA+PSAoIHBob3RvRGF0YS5sZW5ndGggLSAxICkgKSB7XG4gICAgICAgIG5leHRQaG90b0luZGV4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRQaG90b0luZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld1Bob3RvLmNsYXNzTGlzdC5hZGQoJ2MtZGV0YWlsc19faW1nJyk7XG4gICAgbmV3UGhvdG8uY2xhc3NMaXN0LmFkZCgnYS1mYWRlaW4nICsgZmFkZURpcmVjdGlvbik7XG4gICAgbmV3UGhvdG8uc2V0QXR0cmlidXRlKCdkYXRhLWltZy1pbmRleCcsIG5leHRQaG90b0luZGV4KTtcbiAgICBuZXdQaG90by5pZCA9IFwicGhvdG8tZGV0YWlsX19pbWdcIjtcbiAgICBuZXdQaG90by5zcmMgPSBwaG90b0RhdGFbbmV4dFBob3RvSW5kZXhdLnVybHMucmVndWxhcjtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvdG8tZGV0YWlsXCIpLmFwcGVuZENoaWxkKG5ld1Bob3RvKTtcbiAgfSk7XG59XG5cblxuLypcbiAqIExvYWQgdGhlIFByZXZpb3VzIFBob3RvXG4gKi9cblxuZnVuY3Rpb24gbG9hZFByZXZpb3VzUGhvdG8oKSB7XG4gIHZhciBjdXJyZW50UGhvdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob3RvLWRldGFpbF9faW1nXCIpO1xuICB2YXIgY3VycmVudEluZGV4ID0gY3VycmVudFBob3RvLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWctaW5kZXgnKTtcblxuICBzd2FwRGV0YWlsUGhvdG9zKGN1cnJlbnRQaG90bywgY3VycmVudEluZGV4LCBcInByZXZcIik7XG59XG5cblxuLypcbiAqIExvYWQgdGhlIE5leHQgUGhvdG9cbiAqL1xuXG5mdW5jdGlvbiBsb2FkTmV4dFBob3RvKCkge1xuICB2YXIgY3VycmVudFBob3RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaG90by1kZXRhaWxfX2ltZ1wiKTtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IGN1cnJlbnRQaG90by5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nLWluZGV4Jyk7XG5cbiAgc3dhcERldGFpbFBob3RvcyhjdXJyZW50UGhvdG8sIGN1cnJlbnRJbmRleCwgXCJuZXh0XCIpO1xufVxuXG5cbi8qXG4gKiBXZSB3aWxsIHVzZSB0aGlzIHRvIGV4cGFuZCBvdXIgcGhvdG9zXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZFBob3RvKGUpIHtcbiAgLy8gMS4gc3RvcCB0aGUgbGluayBmcm9tIG9wZW5pbmcgaW4gYSBuZXcgdGFiXG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICAvLyAyLiBkaXNwbGF5IHRoZSBkZXRhaWxzIHZpZXcgb2YgdGhlIHBob3RvXG4gIGRpc3BsYXlEZXRhaWxzKCB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWctaWQnKSwgdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nLWluZGV4JykgKTtcbn1cblxuXG4vKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgcGhvdG9zIGZyb20gb3VyIHNvdXJjZSBkZWZpbmVkIGFib3ZlXG4gKi9cbmZ1bmN0aW9uIGdldFBob3RvcygpIHtcbiAgLy8gMS4gSW5pdGlhbGl6ZSBvdXIgcmVxdWVzdFxuICB2YXIgcGhvdG9zID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgLy8gMi4gV2FpdCBmb3IgdGhlIHJlYWR5IHN0YXRlIHRvIGNoYW5nZS4uLlxuICBwaG90b3Mub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvLyAzLiBJZiB0aGUgc3RhdGUgaXMgcmVhZHksIHRoZW4gcHJvY2VlZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAgaWYgKCBwaG90b3MucmVhZHlTdGF0ZSA9PSA0ICYmIHBob3Rvcy5zdGF0dXMgPT0gMjAwICkge1xuICAgICAgLy8gNC4gU3RvcmUgdGhlIHBob3RvIGRhdGEgaW4gYSAoSlNPTikgdmFyaWFibGUgc28gd2UgY2FuIGFjY2VzcyBpdFxuICAgICAgcGhvdG9EYXRhID0gSlNPTi5wYXJzZShwaG90b3MucmVzcG9uc2VUZXh0KTtcblxuICAgICAgLy8gNS4gRm9yIGVhY2ggcGhvdG8gcmV0dXJuZWQsIGJ1aWxkUHJldmlldygpXG4gICAgICBwaG90b0RhdGEuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgIGJ1aWxkUHJldmlldyhlLnVybHMuc21hbGwsIGUudXJscy5yZWd1bGFyLCBlLmlkLCBpKTtcblxuICAgICAgICAvLyA2LiBXaGVuIHdlIGhhdmUgYWxsIG9mIHRoZSBwaG90b3Mgb24gdGhlIHBhZ2UsIHF1ZXJ5U2VsZWN0b3JBbGwgb2YgdGhlbSFcbiAgICAgICAgaWYgKCAoaSArIDEpID09PSBwaG90b0RhdGEubGVuZ3RoICkge1xuXG4gICAgICAgICAgLy8gNy4gZ3JhYiBhbGwgdGhlIHBob3RvcyBhbmQgc3RvcmUgdGhlbSBpbiBhIHZhcmlhYmxlXG4gICAgICAgICAgcGhvdG9QcmV2aWV3cyA9IHBob3RvR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuYy1wcmV2aWV3Jyk7XG4gICAgICAgICAgcHJldmlld0lNR3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy1wcmV2aWV3X19pbWcnKTtcblxuICAgICAgICAgIGZpeE9iamVjdEZpdCgpO1xuXG4gICAgICAgICAgLy8gOC4gbG9vcCB0aHJvdWdoIGFuZCBhdHRhY2ggdGhlIGV4cGFuZFBob3RvIGZ1bmN0aW9uIG9uIGNsaWNrXG4gICAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBwaG90b1ByZXZpZXdzLmxlbmd0aDsgcCsrICkge1xuICAgICAgICAgICAgcGhvdG9QcmV2aWV3c1twXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZFBob3RvICk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHBob3Rvcy5vcGVuKFwiR0VUXCIsIEFQSV9VUkwsIHRydWUpO1xuICBwaG90b3Muc2VuZCgpO1xufVxuXG4vKlxuICogRml4IHRoZSB1bnN1cHBvcnRlZCBvYmplY3QtZml0IGlzc3VlIGluIElFXG4gKi9cblxuZnVuY3Rpb24gZml4T2JqZWN0Rml0KCkge1xuICBpZiAoICEgTW9kZXJuaXpyLm9iamVjdGZpdCApIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXZpZXdJTUdzLmxlbmd0aDsgaSsrICkge1xuICAgICAgcHJldmlld0lNR3NbaV0uY2xhc3NMaXN0LmFkZCgndS1pbnZpc2libGUnKTtcbiAgICAgIHByZXZpZXdJTUdzW2ldLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJytwcmV2aWV3SU1Hc1tpXS5zcmMrJyknKTtcbiAgICAgIHByZXZpZXdJTUdzW2ldLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgndS1vYmplY3RmaXQtZml4Jyk7XG4gICAgfTtcbiAgfVxufVxuXG4vKlxuICogVGhpcyB3aWxsIHJ1biB3aGVuIHRoZSBET00gaXMgcmVhZHkuXG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGdldFBob3RvcygpO1xufVxuXG4vLyBXaGVuIHRoZSBET00gaXMgcmVhZHksIGdvIGFoZWFkIGFuZCBydW4gb3VyIGluaXQoKVxud2luZG93Lm9ubG9hZCA9IGluaXQoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
