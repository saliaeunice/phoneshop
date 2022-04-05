import React from 'react'
import Phone1 from "../New folder/images (1).jpg"
import Phone2 from "../New folder/images (2).jpg"
import Phone3 from "../New folder/note8.jpg"
import HeadPhones1 from "../New folder/Headphone_1.jpg"
import HeadPhones2 from "../New folder/Headphone_2.jpg"
import HeadPhones3 from "../New folder/Headphone_3.jpg"
import download1 from "../New folder/download (1).jpg"
import download2 from "../New folder/download (2).jpg"
import download3 from "../New folder/download(3).jpg"
import Pendrive1 from "../New folder/Pendrive_1.jpg"
import Pendrive2 from "../New folder/Pendrive_2.jpg"
import Pendrive3 from "../New folder/Pendrive_3.jpg"

function Product() {
  return (
    <div>
    <div className='smartphones'>

    <div className='card'>
    <h2>images 1</h2>
    <img src={Phone1} alt=""/>
    <p>Ghc2,776</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>images 2</h2>
    <img src={Phone2} alt=""/>
    <p>Ghc1,887</p>
    <button>View Phones</button>
    </div>

    <div className='card'>
    <h2>note8</h2>
    <img src={Phone3} alt=""/>
    <p>Ghc988</p>
    <button>Buy Me</button>
    </div>
    </div>

    <div className='headphones'>
    <div className='card'>
    <h2>Headphone1</h2>
    <img src={HeadPhones1} alt=""/>
    <p>Ghc55</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Headphone2</h2>
    <img src={HeadPhones2} alt=""/>
    <p>Ghc75</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Headphone_3</h2>
    <img src={HeadPhones3} alt=""/>
    <p>Ghc95</p>
    <button>Buy Me</button>
    </div>
    </div>

    <div className='pendrives'>
    <div className='card'>
    <h2>Pendrive1</h2>
    <img src={Pendrive1} alt=""/>
    <p>Ghc30</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Pendrive2</h2>
    <img src={Pendrive2} alt=""/>
    <p>Ghc40</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>Pendrive3</h2>
    <img src={Pendrive3} alt=""/>
    <p>Ghc25</p>
    <button>Buy Me</button>
    </div>
    </div>

    <div className='phonecase'>
    <div className='card'>
    <h2>download1</h2>
    <img src={download1} alt=""/>
    <p>Ghc35</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>download 2</h2>
    <img src={download2} alt=""/>
    <p>Ghc35</p>
    <button>Buy Me</button>
    </div>

    <div className='card'>
    <h2>download 3</h2>
    <img src={download3} alt=""/>
    <p>Ghc35</p>
    <button>Buy Me</button>
    </div>
    </div>
    </div>
  )
}

export default Product