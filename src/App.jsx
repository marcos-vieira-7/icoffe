import { useState, react } from 'react'

import './App.css'

//comp joy ui
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import Stack from '@mui/joy/Stack';

import Checkbox, { checkboxClasses } from '@mui/joy/Checkbox';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import { Input } from '@mui/joy';

function App() {

  return (
    <div>
      <div className='navbar'>
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">About</a>  
      </div>

      <div className='content'>
        
        <div className='article'>
          <p className='paragrafo'><span class="primeira-letra">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Vel facere culpa, 
            quam nisi architecto sequi vero et iste earum. Ipsum a quisquam eaque quaerat
            mollitia laboriosam debitis pariatur est commodi?</p>
            
           <p className='paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere culpa, 
            quam nisi architecto sequi vero et iste earum. Ipsum a quisquam eaque quaerat
            mollitia laboriosam debitis pariatur est commodi?
           </p>
        </div>
      </div>


      {/* <div className='footer'>
        <p>All rights reserved.</p>
      </div> */}

    </div>
  )
}

export default App
