# Piggy UI
## 项目背景
常使用像antd、Element UI等组件，但是其中的一些组件用原生JS其实也是可以实现的，本项目就是用JS实现了其中的部分效果，在一些简单的项目中就可以使用class组件的方式，并且能够实现代码的复用。

## 项目构成
项目包括栅格布局、carousel、collaspe、dialog、message、tabs、tooltip七个部分组成，
提供了在线效果预览和代码查看功能。

## 操作提示
 - 鼠标进入首页，右下角会展示下一页按钮；
 - 点击下一页按钮进入主页面；
 - 点击侧边栏标题进入对应得效果页面；
 - 点击“展示/隐藏代码”按钮查看每个效果得详细代码，再次点击隐藏代码；
 - 代码展示分为“HTML”、“CSS”、“JS”三部分，点击对应按钮展示相应代码；

## 技术介绍
 - 本项目使用了js的class组件方式搭建；
 - 主页面下一页按钮(字体图标)的动画效果，使用了CSS3 的transform效果以及DOM的Class添加操作;
 
 ```css
    #home .icon-nextPage {
    position: fixed;
    bottom: 15px;
    right:15px;
    font-size: 65px;
    color: #999d9c;
    cursor: pointer;
    transform: translateX(120%);
    transition: transform .5s;
    }

    #home .icon-nextPage.active{
    transform: translateX(0);
    }
 ```
 JS代码
```

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

```

 - 主页的侧边栏使用了同样的方法，在点击时展示不同的效果，通过操控class属性控制
 - 效果展示页和侧边栏标题一一对应,创建了Menue组件；

 ```
const Menue = {
  init() {
    //$$表示document.querySelectorAll()
    //$表示document.querySelector()
    this.$$tabs = $$('#main nav .title')
    this.$$contents = $$('#main .content')
    this.$close = $('#main main .icon-close')
    this.$main = $('#main')
    
    this.bind()
    this.close()
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
    },
  }

 ```

 - 使用了Menue组件同样的方法设置了ShowComponents组件控制每个效果的代码展示；在Menue组件中引用ShowComponents组件就实现了当前效果与代码的绑定；
 - 创建App组件，通过App的init方法将所有组件初始化启动项目；

 ```
    const App = {
      init() {
        [...arguments].forEach(Module => Module.init())
      }
    }


    App.init(Open, Menue)
 ```
## 项目总结
主要使用到了CSS3的偏移，flex布局，JavaScript的数组的操作方法如Foreach等，ES6的展开操作符、let、const、箭头函数等；DOM的操作；@media移动端适配等。

