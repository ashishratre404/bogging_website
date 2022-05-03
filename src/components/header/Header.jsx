import './header.css';
import headerImg from '../images/header.jpeg';

export default function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImage' src={headerImg} alt='headerPic' />
        </div>
    )
}
