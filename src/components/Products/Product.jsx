import { Link } from 'react-router-dom';
import s from '../../styles/Product.module.css'
import { ROUTES } from '../../utils/routes';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { addItemToCart } from '../../features/user/userSlice';

const SIZES = [4, 4.5, 5]

export const Product = (item) => {
const { images, title, price, description } = item
    const dispatch = useDispatch()

    const [currentImage, setCurrentImage] = useState()
    const [currentSize, setCurrentSize] = useState()

    useEffect(() => {
        if(!images.length) return

        setCurrentImage(images[0])
    }, [images])

    const addToCart = () => {
        dispatch(addItemToCart(item))
    }

    return (
        <section className={s.product}>
            <div className={s.images}>
                <div className={s.current}
                    style={{ backgroundImage: `url(${currentImage})` }}
                />
                {/* <img src={currentImage} className={s.current} alt="" /> */}
                <div className={s["images-list"]}>
                    {images.map((image, i) => (
                        <div
                            className={s.image}
                            key={i}
                            style={{ backgroundImage: `url(${image})` }}
                            onClick={() => { setCurrentImage(image) }}
                        />
                    ))}
                </div>
            </div>
            <div className={s.info}>
                <h1 className={s.title}>{title}</h1>
                <div className={s.price}>{price}$</div>
                <div className={s.color}>
                    <span>Color:</span> Green
                </div>
                <div className={s.sizes}>
                    <span>Sizes:</span>

                    <div className={s.list}>
                        {SIZES.map(size =>
                            <div
                                key={size}
                                onClick={() => { setCurrentSize(size) }}
                                className={`${s.size} ${currentSize === size ? s.active : ""}`}
                            >
                                {size}
                            </div>
                        )}
                    </div>
                </div>

                <p className={s.description}>{description}</p>

                <div className={s.actions}>
                    <button 
                    className={s.add} 
                    disabled={!currentSize}
                    onClick={addToCart}
                    >Add to cart</button>
                    <button className={s.favorite}>Add to favorite</button>
                </div>

                <div className={s.bottom}>
                    <div className={s.purchase}>19 people purchased</div>

                    <Link to={ROUTES.HOME}>Return to store</Link>
                </div>
            </div>
        </section>
    );
}