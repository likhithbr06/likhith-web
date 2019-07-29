
var element = $('.floating-chat');
setTimeout(function() {
    element.addClass('enter');
}, 1000);

var tog= $('#toggle-btn');
var nav= document.getElementById('sidenav')
tog.click(opennav);
element.click(openElement);
function opennav(){
nav.classList.toggle('sidenav-open');
console.log('clicked')
}
function closenav(){
    nav.classList.remove('sidenav-open')
}
function openElement() {
    var messages = element.find('.messages');
    var textInput = element.find('.text-box');
    element.find('>i').hide();
    element.addClass('expand');
    element.find('.chat').addClass('enter');
    var strLength = textInput.val().length * 2;
    //textInput.keydown(onMetaAndEnter).prop("disabled", false).focus();
    textInput.focus();
    element.off('click', openElement);
    element.find('.header button').click(closeElement);
    //element.find('#sendMessage').click(sendNewMessage);
    messages.scrollTop(messages.prop("scrollHeight"));
}

function closeElement() {
    element.find('.chat').removeClass('enter').hide();
    element.find('>i').show();
    element.removeClass('expand');
    element.find('.header button').off('click', closeElement);
    //element.find('#sendMessage').off('click', sendNewMessage);
   // element.find('.text-box').off('keydown', onMetaAndEnter).prop("disabled", true).blur();
    setTimeout(function() {
        element.find('.chat').removeClass('enter').show()
        element.click(openElement);
    }, 500);
}

function sendNewMessage() {
    var userInput = $('.text-box');
    var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

    if (!newMessage) return;

    var messagesContainer = $('.messages');

    messagesContainer.append([
        '<li class="self">',
        newMessage,
        '</li>'
    ].join(''));

    // clean out old message
    userInput.html('');
    // focus on input
    userInput.focus();

    messagesContainer.finish().animate({
        scrollTop: messagesContainer.prop("scrollHeight")
    }, 250);
}

function onMetaAndEnter(event) {
    if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
        sendNewMessage();
    }
}

// $(window).scroll( function(){
//     $('section').each(function(){
//         var object_bottom = $(this).offset().top + $(this).outerHeight();
//         var window_bottom = $(window).scrollTop()+ $(window).height();

//         if(window_bottom> object_bottom){
//             $(this).animate({'opacity':'1'},700);
//         }
//     })
// })


new WOW().init();


