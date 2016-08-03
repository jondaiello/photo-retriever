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
