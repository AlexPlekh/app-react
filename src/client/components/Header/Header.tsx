import React from 'react'
import { Link } from 'react-router-dom'
import { useCurrentUser } from '../../hooks/useUserData';

const Header: React.FC = () => {

    const user = useCurrentUser()

    return (
        <header className="h-16 py-4 px-4 shadow flex">
            <div className='container flex justify-between mx-auto items-center'>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div>
                <nav>
                    <Link 
                        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" 
                        to="/subscribe">
                            Подписки
                    </Link>
                    <Link 
                        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" 
                        to="/catalog">
                            Каталог
                    </Link>
                    <Link 
                        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" 
                        to="/profile">
                            Профиль
                    </Link>
                </nav>
            </div>
            <div>
                {user.isAuth 
                    ? <div>{user.name}</div> 
                    : <Link to="/sign-in">Войти</Link>
                }
            </div>
            </div>
        </header>
    );
};

export default Header;