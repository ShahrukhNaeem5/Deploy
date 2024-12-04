import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">CRUD APP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to={'/'} class="nav-link">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={'/list'}>List</Link>
      </li>
      
     
      
    </ul>
    <form class="form-inline my-2 mx-auto my-lg-0">
      
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar