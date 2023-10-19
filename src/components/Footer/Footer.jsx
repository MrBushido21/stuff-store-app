import s from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <section className={s.footer}>
            <div className={s.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="Stuff" />
                </Link>
            </div>

            <div className={s.rights}>
                Developed by <a href="https://github.com/MrBushido21" target='_blank'>OlegLis</a>
            </div>
            <div className={s.socials}>
                <a href="https://instagram.com" target='_blank'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>
                <a href="https://facebook.com" target='_blank'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>
                <a href="https://youtube.com" target='_blank'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                    </svg>
                </a>
            </div>
        </section>
    );
}