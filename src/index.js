/**
 * In index.js, where we import main.css.
 */
import ReactDOM from 'react-dom'
import './main.css'
import App from './Components/App.jsx'

/**
 * render the App component to the root element.
 * The root element is the element with the id of 'root' in the index.html file
 */
ReactDOM.render(<App />, document.getElementById('root'))