const input = document.querySelector('.input-text');
const container = document.querySelector('.get-access-inner-container');
const button = document.querySelector('.get-access-button');
button.addEventListener('click',function(event){
    event.preventDefault();
    if(!(input.value.endsWith('.com') && input.value.includes("@"))){
        const html = `<p class = "red">Please enter a valid email address</p>`
        container.insertAdjacentHTML('beforeend',html);
      }
      else{
        input.value = '';
        const html = `<p class = "green">Your email has been received successfully</p>`
        container.insertAdjacentHTML('beforeend',html);
      }
    
})
