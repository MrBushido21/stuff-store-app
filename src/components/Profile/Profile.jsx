import { useEffect, useState } from 'react';
import { createUser, updateUser } from '../../features/user/userSlice';
import s from '../../styles/Profile.module.css'
import { useDispatch, useSelector } from "react-redux";

export const Profile = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(({ user }) => user)

    const [values, setValues] = useState({
        name: "",
        password: "",
        email: "",
        avatar: "",
    })

    useEffect(() => {
        if(!currentUser) return

        setValues(currentUser)
    }, [currentUser])

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isNotEmpty = Object.values(values).every((val) => val)

        if (!isNotEmpty) return

        dispatch(updateUser(values))
    }

    return (
        <section className={s.profile}>
            {!currentUser
                ? <span>You need to log in</span>
                : <form className={s.form} onSubmit={handleSubmit}>
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

                    <button className={s.submit}>Update</button>
                </form>
            }
        </section>
    );
}