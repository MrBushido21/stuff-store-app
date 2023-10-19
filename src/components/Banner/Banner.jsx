import s from '../../styles/Home.module.css'
import banerImg from '../../images/banner.png'

export const Banner = () => {
return (
<section className={s.banner}>
    <div className={s.left}>
    <p className={s.content}>
        NEW YEAR
        <span>SALE</span>
        <button className={s.more}>See more</button>
    </p>
    </div>  
    <div className={s.right}
    > 
    <p className={s.discount}>
    save up to <span>50%</span> off
    </p>
    </div>
</section>
);
}