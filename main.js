let form = document.querySelector('#formmm');
let message = document.querySelector('#messageDisplay')

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

let messageData = {
    img: '',
    title: '',
    content: ''
}

function visibleMessage() {
    form.reset()

    form.style.display = 'none'
    message.style.display = 'flex'

    setTimeout(() => {
        form.style.display = 'flex'
        message.style.display = 'none'
    }, 5000)
}

function messageDisplay(data) {
    let img = document.querySelector('.message-img')
    let title = document.querySelector('.message-title')
    let content = document.querySelector('.message-content')

    img.src = data.img
    title.textContent = data.title
    content.textContent = data.content
    
    visibleMessage()
}

async function submit(e) {
    e.preventDefault();

    //messags
    var nameMessage = document.querySelector(".name__message")
    var firstnameMessage = document.querySelector(".firstname__message")
    var ataadiMessage = document.querySelector(".ataAdi__message")
    var emailMessage = document.querySelector(".email__message")
    var numberMessage = document.querySelector(".number__message")

    
    var name = document.querySelector("#name")
    var firstname = document.querySelector("#firstname")
    var ataAdi = document.querySelector("#ataAdi")
    var email = document.querySelector("#email")
    var number = document.querySelector("#number")
    
   

    if(name.value.trim() === ""){
        nameMessage.style.display = "block"
        nameMessage.style.color = "red"
        nameMessage.textContent = "Xanani bos saxlamayin"
        return;
    }
    else{
        nameMessage.style.display = "none";  
        nameMessage.textContent = ""
    }


    if(firstname.value.trim() === ""){
        firstnameMessage.style.display = "block"
        firstnameMessage.style.color = "red"
        firstnameMessage.textContent = "Xanani bos saxlamayin"
        return;
    }
    else{
        firstnameMessage.style.display = "none";  
        firstnameMessage.textContent = ""
    }


    if(ataAdi.value.trim() === ""){
        ataadiMessage.style.display = "block"
        ataadiMessage.style.color = "red"
        ataadiMessage.textContent = "Xanani bos saxlamayin"
        return;
    }
    else{
        ataadiMessage.textContent = ""
    }

    if(email.value.trim() === ""){
        emailMessage.style.display = "block"
        emailMessage.style.color = "red"
        emailMessage.textContent = "Xanani bos saxlamayin"
        return;
    }
    else{
        emailMessage.textContent = ""
    }

    if(number.value.trim() === ""){
        numberMessage.style.display = "block"
        numberMessage.style.color = "red"
        numberMessage.textContent = "Xanani bos saxlamayin"
        return;
    }
    else{
        numberMessage.textContent = ""
    }





    let form = this;
    let formData = new FormData(form);

    try {
        let response = await fetch(baseUrl, {
            method: 'POST',
            body: formData
        });

        if (response.status === 201) {
            let data = await response.json();

            messageData.img = './assets/images/success_icon.svg';
            messageData.title = 'Müraciətiniz uğurla göndərildi!';
            messageData.content = 'Sizinlə tezliklə əlaqə saxlayacağıq';
            messageDisplay(messageData);
        } else {
            throw new Error('Server was not able to process your request');
        }
    } catch (error) {
        messageData.img = './assets/images/error_icon.svg';
        messageData.title = 'Xəta baş verdi';
        messageData.content = 'Zəhmət olmasa yenidən cəhd edin';
        messageDisplay(messageData);
    }




}

form.addEventListener('submit', submit)