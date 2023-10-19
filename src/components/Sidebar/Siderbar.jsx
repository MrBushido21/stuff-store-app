import { NavLink } from 'react-router-dom';
import s from '../../styles/Sidebar.module.css'
import { useSelector } from 'react-redux';

export const Sidebar = () => {

    const {list} = useSelector(({ categories }) => categories);

    return (
        <section className={s.sidebar}>
            <div className={s.title}>CATEGORIES</div>
            <nav>
                <ul className={s.menu}>
                    {
                        list.slice(0, 5).map(name => 
                            <li key={name.id}>
                                <NavLink 
                                to={`/categories/${name.id}`}
                                className={({ isActive }) =>
                                `${s.link} ${isActive ? s.active : ""}`
                                }
                                >{name.name}</NavLink>
                            </li>
                        )
                    }

                </ul>
            </nav>

            <div className={s.footer}>
                <a href="/help" target='_blank' className={s.link}>Help</a>
                <a href="/help" target='_blank' className={s.link} style={{ textDecoration: "underline" }}
                >Terms & Conditions</a>
            </div>
        </section>
    );
}