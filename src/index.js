class Home {
  constructor($root){
    this.$root = $root
    this.$nextPage = $root.querySelector('.icon-nextPage')
    this.bind()
  }

  bind() {
    this.$root.onmouseenter = () => {
      this.$nextPage.classList.add('active')
    }

    this.$root.onmouseleave = () => {
      this.$nextPage.classList.remove('active')
    }
  }
}
new Home(document.querySelector('#home'))

const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const Open = {
  init() {
    this.$nextPage = $('#home .icon-nextPage')
    this.$main = $('#main')

    this.bind()
  },

  bind() {
    this.$nextPage.onclick = () => {
      this.$main.classList.add('active')
    }
  }
}

const Menue = {
  init() {
    this.$$tabs = $$('#main nav .title')
    this.$$contents = $$('#main .content')
    
    this.bind()
  },

  bind() {
      this.$$tabs.forEach($tab => $tab.onclick = ()=>{
        this.$$tabs.forEach($node =>$node.classList.remove('active'))
        $tab.classList.add('active')
        let index = [...this.$$tabs].indexOf($tab)
        this.$$contents.forEach($content => $content.classList.remove('active'))
        this.$$contents[index].classList.add('active')
        new ShowComponents(this.$$contents[index])
      })
    }
  }



  class ShowComponents {
    constructor($root){
      this.$root = $root
      this.$showCode = this.$root.querySelector('.show > .showCode')
      this.$component = this.$root.querySelector('.display_components')
      this.$$clicks = this.$root.querySelectorAll('.control .click')
      this.$$codes = this.$root.querySelectorAll('.display_components .code_block')

      this.bind()
      this.showCode()
    }
    

    bind() {
      this.$showCode.onclick = ()=> {
        this.$component.classList.toggle('active')
        this.$$codes.forEach($codes=>$codes.classList.toggle('active'))
      }
    }

    showCode() {
      this.$$clicks.forEach($click =>$click.onclick = () => {
        this.$$clicks.forEach($node=>$node.classList.remove('active'))
        $click.classList.add('active')
        let index = [...this.$$clicks].indexOf($click)
        this.$$codes.forEach($code => $code.classList.remove('active'))
        this.$$codes[index].classList.add('active')
      })
    }
  }

const App = {
  init() {
    [...arguments].forEach(Module => Module.init())
  }
}


App.init(Open, Menue)