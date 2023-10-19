import { useState } from 'react'
import s from '../../styles/User.module.css'
import { useDispatch, useSelector } from "react-redux";
import { createUser } from '../../features/user/userSlice';

export const UserSignupForm = ({ closeForm, toggleCurrentFormType }) => {
    const dispatch = useDispatch()

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    })

    const handleChange = ({ target: {value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isNotEmpty = Object.values(values).every((val) => val)

        if(!isNotEmpty) return

        dispatch(createUser(values))
        closeForm()
    }
    return (
        <div className={s.wrapper}>
            <div className={s.close} onClick={closeForm}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
                </svg>
            </div>

            <div className={s.title}>
                Sign UP
            </div>

            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.group}>
                    <input
                        type="email"
                        name="email"
                        placeholder='Your email'
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={s.group}>
                    <input
                        type="name"
                        name="name"
                        placeholder='Your name'
                        value={values.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={s.group}>
                    <input
                        type="password"
                        name="password"
                        placeholder='Your password'
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={s.group}>
                    <input
                        type="avatar"
                        name="avatar"
                        placeholder='Your avatar'
                        value={values.avatar}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={s.link}
                onClick={() => toggleCurrentFormType('login')}
                >I already have an account</div>

                <button className={s.submit}>Create an account</button>
            </form>
        </div>
    );
}