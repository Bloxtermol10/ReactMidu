import React from 'https://esm.sh/react@18.2.0'
import ReactDom from 'https://esm.sh/react-dom@18.2.0/client'
const appDomElement = document.getElementById('app')

const root = ReactDom.createRoot(appDomElement)
const button = React.createElement('button', { id: 123 }, 'Button1 ')
const button2 = React.createElement('button', { id: 456 }, 'Button2')
const button3 = React.createElement('button', { id: 789 }, 'Button3')
root.render('hola react')
const app = React.createElement(React.Fragment, null, [
  button,
  button2,
  button3
])
root.render(app)
