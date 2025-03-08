<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';

const Headers = () => {

	const [show,setShow] = useState(false);
	const handleButtonToggle=()=>{
	
		return 	setShow(!show)
	
	}

	return (
		<header>
		
			<div className="container">
				<div className="grid navbar-grid">
					<div className="Logo">
						<NavLink to="/">
							<img src="Images/world-logo.png" alt="" />
						</NavLink>
					</div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li> <NavLink to="/"> Home </NavLink></li>
                            <li> <NavLink to="/about"> About </NavLink></li>
                            <li> <NavLink to="/contact"> Contact </NavLink></li>
                            <li> <NavLink to="/country"> Country </NavLink></li>
                           
                        </ul>
                    </nav>

					<div className='ham-menu'>

						<button onClick={handleButtonToggle}>

							<GiHamburgerMenu/>

						</button>

					</div>


				</div>
			</div>
		</header>
	);
};

export default Headers;
=======
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';

const Headers = () => {

	const [show,setShow] = useState(false);
	const handleButtonToggle=()=>{
	
		return 	setShow(!show)
	
	}

	return (
		<header>
		
			<div className="container">
				<div className="grid navbar-grid">
					<div className="Logo">
						<NavLink to="/">
							<img src="Images/world-logo.png" alt="" />
						</NavLink>
					</div>

                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li> <NavLink to="/"> Home </NavLink></li>
                            <li> <NavLink to="/about"> About </NavLink></li>
                            <li> <NavLink to="/contact"> Contact </NavLink></li>
                            <li> <NavLink to="/country"> Country </NavLink></li>
                           
                        </ul>
                    </nav>

					<div className='ham-menu'>

						<button onClick={handleButtonToggle}>

							<GiHamburgerMenu/>

						</button>

					</div>


				</div>
			</div>
		</header>
	);
};

export default Headers;
>>>>>>> fc009b3b17dafb591ed902dfa53cb35ee1b326f5
