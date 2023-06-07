import { RemarkablesLogo } from '../remarkable-header-logo'
import { Link } from 'react-router-dom'

export { Header }


function Header() {


    return (
        <header className="site-header">
            <Link to="/">
                <RemarkablesLogo />
            </Link>
            <div className="l-flex-wrapper">
                <ul className="site-header__actions">
                    <li>
                        <Link className="btn btn-small btn-primary" to="/map">Map</Link>
                    </li>
                </ul>
            </div>

        </header>    
    )

}