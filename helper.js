


function passwordHide(passwordFieldID,button)
{
    var passwordElement = document.getElementById(passwordFieldID);
    if(passwordElement.type=="password"){
        passwordElement.type = "text";
        button.childNodes.forEach((item)=>{
            
            if(item.tagName == "svg")
            {
                if(item.classList.contains("visible_icon"))
                {
                    item.classList.add("hidden")
                }
                else if(item.classList.contains("invisible_icon"))
                {
                    item.classList.remove("hidden")
                }
            }
        })
    }
    else if(passwordElement.type=="text"){
        passwordElement.type = "password";
        button.childNodes.forEach((item)=>{
            if(item.tagName == "svg")
            {
                if(item.classList.contains("visible_icon"))
                {
                    item.classList.remove("hidden")
                }
                else if(item.classList.contains("invisible_icon"))
                {
                    item.classList.add("hidden")
                }
            }
        })
        
    }

}


function showLoading(text)
{
    var loadingContainer = document.getElementById('progress_spinner_container');
    var message = document.getElementById('loading_text');
    
    loadingContainer.classList.remove('hidden');
    message.innerHTML = text;
}

function hideLoading()
{
   
    var loadingContainer = document.getElementById('progress_spinner_container');
    loadingContainer.classList.add('hidden');
}


function resetMessage()
{
    var message_text_container = document.getElementById('message_text_container');

    message_text_container.classList.remove('message_container_danger');
    message_text_container.classList.remove('message_container_default');
}

