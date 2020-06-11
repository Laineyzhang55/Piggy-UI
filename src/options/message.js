class Message {
  constructor({type = 'success', text = ''}) {
    this.type = type
    this.text = text

    this.render()
    this.bind()
  }

  render(){
    let $div = document.createElement('div')
    this.$message = $div
    $div.classList.add('message')
    $div.classList.add(this.type)
    let $text = document.createTextNode(this.text)
    $div.appendChild($text)
    document.querySelector('#message').appendChild($div)
  }
  bind(){
    this.show()
    setTimeout(() => this.destory(), 2000)
  }
  
  show(){
     this.$message.classList.add('show')
  }
  
  destory(){
    this.$message.classList.remove('show')
    setTimeout(() => this.$message.parentNode.removeChild(this.$message), 2000)
  }
  
}

document.querySelector('#success').onclick = function(){
  new Message({text: '成功'})
}
document.querySelector('#infor').onclick = function(){
  new Message({text: '这是消息'})
}
document.querySelector('#warning').onclick = function(){
  new Message({text: '警告'})
}
document.querySelector('#danger').onclick = function(){
  new Message({text: '出现错误'})
}