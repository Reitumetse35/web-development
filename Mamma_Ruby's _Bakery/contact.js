document.getElementById("MyForm").addEventListener("submit",function (event)
{
    Event.preventDefalt()
    document.getElementById("message").style.display="block";
    //show message
    //optional:redrict to contact.html after 2 seconds 
    
    setTimeout ( Function() {
        window,location,href="contact.html"


    } ,2000)
    

});

{

}
{
    
}