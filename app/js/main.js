const scrollHeader = () =>{

   const scrol = document.querySelectorAll('.nav-item')
   console.log(scrol)
   
   for(let anchor of scrol){
      anchor.addEventListener('click',function(event){
         event.preventDefault();
         const blockID = anchor.getAttribute('href')
         document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }


}
scrollHeader() // Скрол от меню в заголовке


const scrollTRF = () =>{

   const scrol = document.querySelectorAll('.btn-trf')
   console.log(scrol)
   
   for(let anchor of scrol){
      anchor.addEventListener('click',function(event){
         event.preventDefault();
         const blockID = anchor.getAttribute('href')
         document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }
   

}

scrollTRF() //Скрол от кнопки "Tre for free"

const scrolON = () => {

   const scrol = document.querySelectorAll('.card-btn')
   console.log(scrol)
   
   for(let anchor of scrol){
      anchor.addEventListener('click',function(event){
         event.preventDefault();
         const blockID = anchor.getAttribute('href')
         document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }
   

}

scrolON() //Скрол от кнопки "Order now"

