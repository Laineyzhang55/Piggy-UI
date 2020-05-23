let $returntop = document.querySelector('#btn-top')
    window.onscroll = function() {
      if (window.scrollY > 150 ) {
        $returntop.classList.add('show')
      } else {
        $returntop.classList.remove('show')
      }
    }
    $returntop.onclick = function() {
      window.scrollTo ({
        top: 0,
        behavior: 'smooth'
      })
    }