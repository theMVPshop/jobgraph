import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">

            <div className='container'>  

                <a class="navbar-brand" href="#">Job Graph</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Locations
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">houston, tx</a>
                            <a class="dropdown-item" href="#">san antonio, tx</a>
                            <a class="dropdown-item" href="#">austin, tx</a>
                            <a class="dropdown-item" href="#">fort worth, tx</a>
                            <a class="dropdown-item" href="#">arlington, tx</a>
                            <a class="dropdown-item" href="#">plano, tx</a>
                            <a class="dropdown-item" href="#">irving, tx</a>
                            <a class="dropdown-item" href="#">garland, tx</a>
                            <a class="dropdown-item" href="#">frisco, tx</a>
                            <a class="dropdown-item" href="#">mckinney, tx</a>
                            <a class="dropdown-item" href="#">grand prairie, tx</a>
                            </div>
                        </li>
                        {/* - */}
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Job Titles
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">dental assistant</a>
                            <a class="dropdown-item" href="#">medical assistant</a>
                            <a class="dropdown-item" href="#">web developer</a>
                            <a class="dropdown-item" href="#">software engineer</a>
                            </div>
                        </li>
                    </ul>
                </div>        
            </div>
        </nav>
    )
}

export default Navbar
