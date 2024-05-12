import React from 'react'
import './styles/general-style.css'

function Main() {
  return (
    <div className='main'>
      <div className='container-fluid bg-white'>
        <section id='presentation' className='row mb-5 pb-5'>
          <div className='triangle' id='prin-header'>
            <div className='title'>
            <h1 className='poppins-medium'>Welcome to Moon's library</h1>
            </div>
          </div>
          <div className='row mb-5'>
            <h2 className='text-center fw-bolder black text-primary text-body'>What you wanna do?</h2>
          </div>
          <hr></hr>
          <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
            <div className='card border-0'>
              <div className='card-body text-center hov circ-bord'>
              <h4 className='card-title'>Take a look in the library</h4>
              <i class="bi bi-book option-icon"></i>
              </div>
              </div>
              </div>
              <div className='col-md-4'>
            <div className='card border-0'>
              <div className='card-body text-center hov circ-bord'>
              <h4 className='card-title'>Post a book</h4>
              <i class="bi bi-plus-square option-icon"></i>
              </div>
              </div>
              </div>
              <div className='col-md-4'>
            <div className='card border-0'>
              <div className='card-body text-center hov circ-bord'>
              <h4 className='card-title'>News</h4>
              <i class="bi bi-newspaper option-icon"></i>
              </div>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-us" className='row bg-gray'>
          <div className='triangle bg-black text-muted'>
          <div className='text-center pt-3 mb-5'>
            <h2>About us...</h2>
          </div>
            <div className='text-center fw-bold'>
              Moon's library was founded on 1999 by Mr moon on Jalapa located in nicaragua nueva segovia...
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Main
