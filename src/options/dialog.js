
  class Dialog {
    constructor($root, options = {}) {
      this.$root = $root
      this.options = options
      this.onCancel = options.onCancel || function() {}
      this.onConfirm = options.onConfirm || function() {}

      this.bind()
    }

    bind() {
      let self = this
      this.$root.querySelector('.close').onclick = function() {
        self.hide()
        self.onCancel()
      }
      this.$root.querySelector('.btn-cancel').onclick = function() {
        self.hide()
        self.onCancel()
      }
      this.$root.querySelector('.btn-confirm').onclick = function() {
        self.hide()
        self.onConfirm()
      }
    }

    hide() {
      this.$root.classList.remove('display')
      setTimeout(() => this.$root.classList.remove('show'), 400)

    }

    show() {
      this.$root.classList.add('show')
      setTimeout(() => this.$root.classList.add('display'))
    }
  }

  let dialog = new Dialog(document.querySelector('.dialog'), {
    onConfirm() {
      console.log('用户点了confirm')
    },
    onCancel() {
      console.log('用户点了取消')
    }
  })

  document.querySelector('.reminder').onclick = function() {
    dialog.show()
  }