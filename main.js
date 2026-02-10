
var currentUserProileURL;
var sessionUserID;


function returnToIndexPage(){

    if(!isIndexPage)
    {
        window.location.replace("landing.html")
    }
    hideLoading();
    
}



function signOut()
{
    if(!window.location.href.includes('login.php'))
    {   
        showLoading("Signing Out");
        var so_temp = document.getElementById('so_temp');
        logoutForm = document.getElementById('logoutForm');

        so_temp.click();
        setTimeout(()=>{
            logoutForm.submit();
        },2000)
        
    }
    
}

function checkAuth() {

    
    showLoading("Loading")
    //Checks if the user has already logged in
    if(sessionStorage.getItem("sessionUserID")  != null)
    {
        sessionUserID = sessionStorage.getItem("sessionUserID");
        
    }
    hideLoading();
}


checkAuth();


// UI Section
function navToggle() {
    var mobile_nav_container = document.getElementById('mobile_nav_container');
    if (mobile_nav_container.classList.contains('nav_hide')) {
        mobile_nav_container.classList.remove('nav_hide');
        mobile_nav_container.classList.add('nav_show');
    }
    else if (mobile_nav_container.classList.contains('nav_show')) {
        mobile_nav_container.classList.remove('nav_show');
        mobile_nav_container.classList.add('nav_hide');
    }
}

function navClick()
{
    showLoading("Please Wait");
}
