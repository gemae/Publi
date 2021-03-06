  /*  var MainNavWidth1 = getComputedStyle(document.getElementById("mainNav")).getPropertyValue("width");
    var mainBody = document.getElementById("mainBody");
    mainBody.style.marginLeft = MainNavWidth1;  
    var mainNav = document.getElementById("mainNav");
    //while window resizing
   
    document.body.onresize = () => {
    var MainNavWidth2 = getComputedStyle(document.getElementById("mainNav")).getPropertyValue("width");
    mainBody.style.marginLeft = MainNavWidth2;
    var MainNavWidth3 = getComputedStyle(document.getElementById("mainNav")).getPropertyValue("width");
    var sp = MainNavWidth3.split(/[A-Za-z]/);
    var j = sp.join("");
    if(window.innerWidth <= 1366){
        mainNav.style.width = j - 2 + "px";
    }
    }*/
    //Modal popup
  function toReply(img,repName,repPost){
    var imgRep = document.querySelector(".to-reply-img");
    var nameRep = document.querySelector(".to-reply-name");
    var postRep = document.querySelector(".to-reply-post");
    var toRepImg = img.getAttribute("src");
    imgRep.setAttribute("src", toRepImg);
    nameRep.innerHTML = repName;
    postRep.innerHTML = repPost;
  }

    var modal = document.querySelector(".modal");
    var close = document.querySelector(".close");
    var html = document.getElementById("html");
    function popUp(img,repName,repPost){
        
    
    var scrollHeight = window.pageYOffset;
        modal.style.display = "flex";
        modal.style.top = scrollHeight + "px";
        html.style.overflow = "hidden";
        toReply(img,repName,repPost);
    }
    close.addEventListener("click", function(){
        modal.style.display = "none";
        html.style.overflow = "scroll";
    });
    

    //TRENDLIST SCROLL
    var trendlist = document.getElementById("trendList");
    var sticky = trendlist.offsetHeight;
   
    function scrollWin(){
        var winSize = window.innerWidth;
    if(window.pageYOffset >= sticky){
        trendlist.classList.add("fixedCont");
    }
    else{
        trendlist.classList.remove("fixedCont");
    }
    if(winSize <= 1005){
        shrinkFunc();
    }
    
}

//for Profile Image Animation 
    //for shrink profile purposes
   
    var profileToShink = document.querySelector(".top-profile-cont .profile-photo");
    var profileToShinkHeight = profileToShink.offsetHeight;
    
    //top elements of profileto shrink
    var firstEl =  document.querySelector(".to-fixed-top");
    var secondEl = document.querySelector(".profile-images .cover-photo");
    var totalHeight = secondEl.offsetHeight;
    var targetScroll = totalHeight - 45;
    var scale = 1;
    var lastScrollTop = 0;

       //for picture animation
    function shrinkFunc(){
       let scrollHeight2 = window.pageYOffset;
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       if(scrollTop > lastScrollTop){
           if(scrollHeight2 >= targetScroll){
               scale -= .01;
               if(scale >= .5){
                   profileToShink.style.transform = "scale" + "("+scale+")";
               }
           }    
       }
       else{
           
           if(scale != 1){
               scale += .01;
               profileToShink.style.transform = "scale" + "("+scale+")";
           }
           if(scrollHeight2 <= totalHeight/2 ){
               profileToShink.style.transform = "scale(1)";
                scale=1;  
            }
       }
       lastScrollTop = scrollTop;
    }
//POST/REPLIES/LIKES FUNCTIONS
var profileTabBtn = document.querySelectorAll(".profile-nav-list .pnav-li");
var tabPanels = document.querySelectorAll(".post-tweet-container .cont");
//to getv Active tab ID
var current = document.getElementsByClassName("active");
//to set Active link in Profile Navigation
//get link element inside parentNav

var profileParentNav = document.getElementById("profileNav");
var link = profileParentNav.getElementsByClassName("pnav-li");

//show tab
 function showTab(tabIndex){
     tabPanels.forEach(function(me){
        me.style.display = "none";
     });
     tabPanels[tabIndex].style.display = "block";
     if(tabIndex === 0){
         currentTab(current,link[0]);
     }
 }
showTab(0);

//set active button tab
for(var i = 0; i < link.length; i++){
    link[i].addEventListener("click", function(){ 
        currentTab(current,this);
    });
}

function currentTab(current,li){
    current[0].className = current[0].className.replace(" active","");
    li.className += " active";
}

//POST TWEETS
function addContainer() {
        //cretate parent element
        var elem = document.createElement("div");
       //create parent container for post and username 
       var postCont = document.createElement("div");
       //create post child element
       var tweet = document.createElement("p");
       //create label element for Name and Username 
       var name = document.createElement("label");
       var uName =  document.createElement("label");
       //create profile picture-container in tweet container
       var profileCont = document.createElement("div");
       var img = document.createElement("img");
       //create btn container
       var btnCont = document.createElement("div");
       //create tweet crud child element
       var commentBtn = document.createElement("button");
       var heartBtn = document.createElement("button");
       var deleteBtn = document.createElement("button");
        

       //make an array for buttons to add
       var btnArr = [commentBtn,heartBtn,deleteBtn];
       //get Parent element
       var parentEl = document.getElementById("parents");

       parentEl.appendChild(elem);
       elem.classList.add("tweet");
       //profile elements
       elem.appendChild(profileCont);

       //to insert the child element on first array list in parent
       parentEl.insertBefore(elem, parentEl.getElementsByTagName("div")[0]);    
       profileCont.classList.add("profile-pic-cont");
       profileCont.appendChild(img);
       img.classList.add("profile-pic");
       //add tweet post to parent element
       elem.appendChild(postCont);
       postCont.classList.add("post-container");

       postCont.appendChild(name);
       postCont.appendChild(uName);
       name.classList.add("inline-label");
       name.setAttribute("id", "name");
       uName.setAttribute("id", "uName");
       uName.classList.add("inline-label");

       postCont.appendChild(tweet);
       tweet.classList.add("tweet-text");
      
       //add name text to label elemnt
       //get the text first from profile
       var nameFromProf = document.getElementById("profileName").innerText;
       var uNameFromProf = document.getElementById("userName").innerText;
       //then add the getText to  your created label
       name.innerHTML = nameFromProf;
       uName.innerHTML = uNameFromProf;
       //add profile picture
        //get profile first
         var profilePic = document.getElementById("profilePhoto").getAttribute("src");
        //add the getAttribute to created ELement Image
        img.setAttribute("src", profilePic);
        
        //add buttons to container and add container to parent Div
        for(let l = 0; l< btnArr.length; l++){
          
           btnCont.appendChild(btnArr[l]);
           btnArr[l].classList.add("btn");
        }
       
        elem.appendChild(btnCont);
        btnCont.classList.add("tweeted-cont");
        //Add icons to Anchor tags
        var listChild = btnCont.children;

        for(el of listChild ){
        el.appendChild(document.createElement("i"));
        }
       
        var iEl = btnCont.getElementsByTagName("i");
          iEl[0].classList.add("fa");
          iEl[0].classList.add("fa-comment");
          iEl[1].classList.add("fa");
          iEl[1].classList.add("fa-heart");
          iEl[2].classList.add("fa");
          iEl[2].classList.add("fa-trash");

        //get and add the Tweeted caption
        tweet.innerHTML = document.getElementById("inputContent").value;
        document.getElementById("inputContent").value = "";
     
        //COMMENT
        var repName = name.innerText;
        var repPost = tweet.innerText;
        commentBtn.onclick = function(){
        popUp(img,repName,repPost);
        }
       
        //Count Number of Tweets
        var numOfTweet = parentEl.children.length;
        numTweet(numOfTweet);
        //HEART/LIKE BUTTON FUNCTION
        var parentHeart = heartBtn.firstElementChild;
        var clone;
        var parentChildColor = 0;
        heartBtn.onclick = function () {
           if(parentChildColor == 0){
               parentHeart.style.color = "rgb(206, 74, 74)";
               parentChildColor = 1;
               clone = elem.cloneNode(true);
               likes(clone);
           }
           else{
               parentHeart.style.color = "rgb(72, 151, 145)";
               parentChildColor = 0;
               delLikes(clone);
           } 
        }

        showTab(0);

        //delete tweet
        var parentDelete = document.getElementById("parents");
        var parentLikes = document.getElementById("likesId");
           deleteBtn.onclick = function () {
           parentDelete.removeChild(elem);
           var numOfTweet = parentEl.children.length;
           numTweet(numOfTweet);
           if(parentChildColor == 1) {
            delLikes(clone);
           }    
         }
       }
   

   function numTweet(num){
    var numTweetLabel = document.getElementById("numberTweets");
    if(num > 1){
        numTweetLabel.innerHTML = num + " Tweets";
    }
    else{
        numTweetLabel.innerHTML = num + " Tweet";
    }
   
   }

   function likes(likePostElement){
       var likeId  = document.getElementById("likesId");
       likeId.appendChild(likePostElement);

   }

   function delLikes(unLikePostElement){
    var likeId  = document.getElementById("likesId");
    likeId.removeChild(unLikePostElement);
   }