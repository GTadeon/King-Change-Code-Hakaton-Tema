﻿function searchSubmit(){
   $(document).on('submit', 'form[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
   });
}
