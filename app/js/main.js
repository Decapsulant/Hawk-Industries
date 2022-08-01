$(function () {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })

    $('.header__link').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active')
      $('body').toggleClass('lock')
  })
})

/*smooth scroll*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
  anchor.addEventListener('click', function(event){
    event.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
  })
}
