import React from 'react'
import "../Styles/home.css";
import blackcar from "../images/blackcar.png";
import boat from "../images/boat.png"
import butterfly from "../iamges/butterfly.png";
import car from "../images/car.png";
import cars from "../images/cars.png";

const home = () => {
  return (
    <div className="body">
        <div className="slider-container">
          <div className="slider">
            <div class="slide">
              <iamge src={blackcar}/>
            </div>
            <div className="slide">
              <iamge src={boat}/>
            </div>
            <div className="slide">
              <iamge src={butterfly}/>
            </div>
            <div className="slide">
              <iamge src={cars}/> 
            </div>
         </div>
        </div>

        <div class="box-body">

        <div class="box">
          <div class="box-image" style="background-image: url('https://via.placeholder.com/300x200?text=Watch');"></div>
          <div class="content">
            <h2>Smart Watch</h2>
            <p class="details">Waterproof, GPS, 48-hour battery life.</p>
            <div class="rating">¡ï¡ï¡ï¡ï¡î</div>
            <button class="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div class="box">
          <div class="box-image" style="background-image: url('https://via.placeholder.com/300x200?text=Shoes');"></div>
          <div class="content">
            <h2>Running Shoes</h2>
            <p class="details">Breathable fabric, shock absorption.</p>
            <div class="rating">¡ï¡ï¡ï¡ï¡ï</div>
            <button class="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div class="box">
          <div class="box-image" style="background-image: url('https://via.placeholder.com/300x200?text=Headphone');"></div>
          <div class="content">
            <h2>Wireless Headphones</h2>
            <p class="details">Noise cancelling, 20hr battery, Bluetooth 5.0</p>
            <div class="rating">¡ï¡ï¡ï¡ï¡î</div>
            <button class="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div class="box">
          <div class="box-image" style="background-image: url('https://via.placeholder.com/300x200?text=Headphone');"></div>
          <div class="content">
            <h2>Gaming Headset</h2>
            <p class="details">360¡ã sound, mic, RGB lighting.</p>
            <div class="rating">¡ï¡ï¡ï¡î¡î</div>
            <button class="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div class="box">
          <div class="box-image" style="background-image: url('https://via.placeholder.com/300x200?text=Headphone');"></div>
          <div class="content">
            <h2>Studio Headphones</h2>
            <p class="details">High-fidelity audio, over-ear.</p>
            <div class="rating">¡ï¡ï¡ï¡ï¡ï</div>
            <button class="btn-cart">Add to Cart</button>
          </div>
        </div>

        <div class="box">
          <div class="box-image" style="background-image: url('https://via.placeholder.com/300x200?text=Headphone');"></div>
          <div class="content">
            <h2>Foldable Headphones</h2>
            <p class="details">Portable, wireless, deep bass.</p>
            <div class="rating">¡ï¡ï¡ï¡ï¡î</div>
            <button class="btn-cart">Add to Cart</button>
          </div>
        </div>

        </div>

    </div>
  
  )
}

export default home