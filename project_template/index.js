require('./styles/styles.scss')

import text from './message'

const root = document.getElementById('root'),
      h1 = document.createElement('h1'),
      message = document.createTextNode(text),
      colors = [
        'red',
        'orange',
        'yellow',
        'lawngreen',
        'deepskyblue',
        'indigo',
        'purple'
      ],
      animationSpeed = 5000,
      body = document.body.style

h1.appendChild(message)
h1.id = 'heading'
root.appendChild(h1)
body.transition = `all ${animationSpeed}ms ease`

setInterval(function() {
    let color = Math.floor(Math.random()* colors.length)
    body.backgroundColor = colors[color]
    console.log(color)
}, 5000)


