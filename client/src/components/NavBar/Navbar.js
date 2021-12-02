import { useHistory } from 'react-router-dom'
import './Navbar.css'
import AuthService from '../../utils/auth.js'


const Navbar = () => {

	const history = useHistory()

	const handleSignOut = async event => {
		event.preventDefault()
		AuthService.logout()
	}


	return (
		<div className="sideNavbar">

			<ul className="navLi">
				<li className="navTog">
					<section className="navLink">
						<span className="navSpan">Shitter</span>
					</section>
				</li>

				<li className="navTab">
					<div onClick={() => history.push('/home')} className="navLink">
						<span className="navSpan">Home</span>
					</div>
				</li>

				<li className="navTab">
					<div onClick={() => history.push('/profile')} className="navLink">
						<span className="navSpan">Profile</span>
					</div>
				</li>


				<li className="navTab">
					<div onClick={handleSignOut} className="navLink">
						<span className="navSpan">Log out</span>
					</div>
				</li>

			</ul>
		</div>
	)
}

export default Navbar