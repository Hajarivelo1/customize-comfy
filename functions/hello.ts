import { renderToString } from 'react-dom/server';
 import App from '../src/App.jsx';
// domain/.netlify/functions/hello 

const items = [
  {id:1, name: 'haja'},
  {id:2, name: 'susan'},
]
export async function handler(event, context) {
    
    return {
      statusCode: 200,
      body: 'Hello world',
    };
  }