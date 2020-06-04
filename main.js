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
    
 
//to set Active link in Profile Navigation
var profileParentNav = document.getElementById("profileNav");
//get link element inside parentNav
var link = profileParentNav.getElementsByClassName("pnav-li");

for(var i = 0; i < link.length; i++){
    link[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active","");
        this.className += " active";
    });
}


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
     
      //delete tweet
       var parentDelete = document.getElementById("parents");
           deleteBtn.onclick = function () {
           parentDelete.removeChild(elem);
           var numOfTweet = parentEl.children.length;
           numTweet(numOfTweet);
       }
       
       var parentHeart = heartBtn.firstElementChild;
       console.log(parentHeart);
       var parentChildColor = 0;
       heartBtn.onclick = function () {
           if(parentChildColor == 0){
               parentHeart.style.color = "rgb(206, 74, 74)";
               parentChildColor = 1;
           }
           else{
               parentHeart.style.color = "rgb(72, 151, 145)";
               parentChildColor = 0;
           }
           
       }
        //Count Number of Tweets
        var numOfTweet = parentEl.children.length;
       numTweet(numOfTweet);
       
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