var messages=[];
scrolling4 = setInterval( function() {
    current_scroll_top = document.querySelector(".chat .scrollable-y").scrollTop;
document.querySelector(".chat .scrollable-y").scrollTo(0,current_scroll_top-50);
document.querySelectorAll('div.message').forEach(function(msg)
{ if(!messages.includes(msg.textContent)) {messages.push( msg.textContent);}                                                 });
    console.log(messages.length);
    if(messages.length>20) {
        clearInterval(scrolling4);
        document.body.innerHTML="";
        messages.forEach(function(msg) { 
var p = document.createElement("p");
p.innerHTML=msg;
document.body.append(p);
});
    }
    
},200);
