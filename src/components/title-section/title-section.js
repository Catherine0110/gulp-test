const links = document.querySelectorAll('.js-link');

if(links.length > 0) {
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const href = this.getAttribute('href');         
            const element = document.querySelector(href); 
            const top = element.getBoundingClientRect().top; 
            const headerHight = document.querySelector('.js-header').offsetHeight; 
            const scroll = top - headerHight;

            window.scrollBy({top: scroll, behavior: 'smooth'}); 
        });
    }
}