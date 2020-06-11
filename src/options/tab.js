class Tabs {
  constructor($root) {
    this.$root = $root
    this.$$titles = $root.querySelectorAll('.container .header .title')
    this.$$explains = $root.querySelectorAll('.container .content .explain')
    this.$line = $root.querySelector('.line')

    this.init()
    this.bind()
  }
  init(){
    this.$line.style.width = this.$$titles[0].offsetWidth + 'px'
  }
  bind() {
    let self = this
    this.$$titles.forEach($title => {
      $title.onclick = function (e) {
        self.$$titles.forEach($title => $title.classList.remove('active'))
        this.classList.add('active')

        self.$line.style.width = this.offsetWidth + 'px'
        self.$line.style.transform = `translateX(${this.offsetLeft}px)`

        let index = [...self.$$titles].indexOf(this)
        self.$$explains.forEach($explain => $explain.classList.remove('active'))
        self.$$explains[index].classList.add('active')
      }
    })
  }
}

new Tabs(document.querySelector('.tabs'))