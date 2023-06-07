import { RemarkablesLogo } from '../remarkable-header-logo'


export { Header }


function Header() {


    return (
        <header className="site-header">
            <RemarkablesLogo />

            <div class="l-flex-wrapper">
                <ul className="site-header__actions">
                    <li>
                        <a class="btn btn-small btn-primary" href="/map">Map</a>
                    </li>
                </ul>
            </div>

        </header>    
    )

}