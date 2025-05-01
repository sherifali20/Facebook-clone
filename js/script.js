// ***************leftSide*********************************



var seemore = document.querySelector("#btnseemore");
seemore.addEventListener("click", function () {
  document.querySelector(".seemore").style.display = "block";
  seemore.style.display = "none";
});
var seeless = document.querySelector("#btnseeless");
seeless.addEventListener("click", function () {
  document.querySelector(".seemore").style.display = "none";
  seemore.style.display = "block";
  seemore.style.display = "flex";
});


// ***************dropDown*********************************

var account = document.getElementById("account");
var one = document.getElementById("one");
var notification = document.getElementById("notification");
var two = document.getElementById("two");
var messanger = document.getElementById("messanger");
var three = document.getElementById("three");
var menu = document.getElementById("menu");
var four = document.getElementById("four");

function hideAllSections() {
  one.classList.remove("show");
  two.classList.remove("show");
  three.classList.remove("showThree");
  four.classList.remove("show");
}
account.addEventListener("click", function (e) {
  one.addEventListener("click", function (e) {
    e.stopPropagation();
  });
  e.stopPropagation();
  if (!one.classList.contains("show")) {
    hideAllSections();
    one.classList.add("show");
  } else {
    one.classList.remove("show");
  }
});
notification.addEventListener("click", function (e) {
  two.addEventListener("click", function (e) {
    e.stopPropagation();
  });
  e.stopPropagation();
  if (!two.classList.contains("show")) {
    hideAllSections();
    two.classList.add("show");
  } else {
    two.classList.remove("show");
  }
});

messanger.addEventListener("click", function (e) {
  three.addEventListener("click", function (e) {
    e.stopPropagation();
  });
  e.stopPropagation();
  if (!three.classList.contains("showThree")) {
    hideAllSections();
    three.classList.add("showThree");
  } else {
    three.classList.remove("showThree");
  }
});

menu.addEventListener("click", function (e) {
  e.stopPropagation();
  if (!four.classList.contains("show")) {
    hideAllSections();
    four.classList.add("show");
  } else {
    four.classList.remove("show");
  }
});

window.addEventListener("click", function () {
  hideAllSections();
});

// *****************Posts*******************************

var http = new XMLHttpRequest();
var thePosts = document.getElementById("posts");
var content = [];
var info = [];
var images = [];
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    content = JSON.parse(this.responseText);
  }
};
http.open("get", "https://dummyjson.com/posts", false);
http.send();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    info = JSON.parse(this.responseText);
  }
};
http.open("get", "https://dummyjson.com/users", false);
http.send();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    images = JSON.parse(this.responseText);
  }
};
http.open("GET", "https://api.pexels.com/v1/search?query=people", false);
http.setRequestHeader(
  "Authorization",
  "W9ALNcGKTfeGPa1TNyZM3S5JPzEaV57M1PwFeOmhYFZG3QXy6vhQKle4"
);
http.send();
for (let i = 0; i < images.photos.length; i++) {
  thePosts.innerHTML += ` <div class="post">
            <div class="header">
                <div class="info">
                    <div class="imgContainer">
                        <img src=${info.users[i].image} alt="">
                    </div>
                    <div class="nameandtime">
                        <p>${
                          info.users[i].firstName + " " + info.users[i].lastName
                        } </p>
                        <span>10h . <i class="fa-solid fa-earth-americas"></i> </span>
                    </div>
                </div>
                <div class="icons">
                    <div>
                        <i class="fa-solid fa-ellipsis-vertical" style="transform: rotate(90deg);"></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-x"></i>
                    </div>
                </div>
            </div>
            <div class="content">
                <p>${content.posts[i].body}</p>
                <div class="photos">
                    <div><img src=${images.photos[i].src.large} alt=""></div>
                </div>
            </div>
            <div class="impressions">
                <div class="leftImpressions">&#x2665;&#xfe0f; ${
                  content.posts[i].reactions.likes
                } </div>
                <div class="rightImpressions">
                    <span>500 comments</span>
                    <span>300 shares</span>
                </div>
            </div>
            <hr>
            <div class="reactions">
                <div class="like reaction">
                    <i class="fa-regular fa-thumbs-up"></i>&nbsp; Like
                    <div class="emojis">
                        <div class="emo"><img src="../assets/emogies/1.gif" alt=""></div>
                        <div class="emo"><img src="../assets/emogies/2.gif" alt=""></div>
                        <div class="emo"><img src="../assets/emogies/3.gif" alt=""></div>
                        <div class="emo"><img src="../assets/emogies/4.gif" alt=""></div>
                        <div class="emo"><img src="../assets/emogies/5.gif" alt=""></div>
                        <div class="emo"><img src="../assets/emogies/6.gif" alt=""></div>
                        <div class="emo"><img src="../assets/emogies/7.gif" alt=""></div>
                    </div>
                </div>
                <div class="comment reaction">
                    <i class="fa-regular fa-comment"></i>&nbsp; Comment
                </div>
                <div class="share reaction">
                    <i class="fa-solid fa-share"></i>&nbsp; Share
                </div>
            </div>
        </div>`;
}
