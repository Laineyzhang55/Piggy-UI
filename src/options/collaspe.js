class Collapse {
  constructor($root, type=1) {
    this.$root = $root
    this.$$items = $root.querySelectorAll('.item')
    this.type = type

    this.bind()
  }
  bind() {
    let self = this
    this.$$items.forEach($item => $item.onclick = function(){
    if(self.type === 2) {
      this.classList.toggle('active')
    }else if(self.type === 1){
      self.$$items.forEach($item => $item.classList.remove('active'))
      this.classList.toggle('active')
     }

    } )
  }
}

new Collapse(document.querySelectorAll('.containers')[0], 1)
new Collapse(document.querySelectorAll('.containers')[1], 2)