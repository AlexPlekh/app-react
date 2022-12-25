import React from 'react'
import { Link } from 'react-router-dom'
import { Programm } from 'types/types';

export const programms: Array<Programm> = [
    {id: 1, name: 'Образовательная программа 1', description: 'Описание образовательной программы 1', freepart: 'БЕСПЛАТНАЯ ЧАСТЬ КОНТЕНТА 1'},
    {id: 2, name: 'Образовательная программа 2', description: 'Описание образовательной программы 2', freepart: 'БЕСПЛАТНАЯ ЧАСТЬ КОНТЕНТА 2'},
    {id: 3, name: 'Образовательная программа 3', description: 'Описание образовательной программы 3', freepart: 'БЕСПЛАТНАЯ ЧАСТЬ КОНТЕНТА 3'},
]

const Catalog: React.FC = () => {
    const courses = programms.map( p => (
        <Link 
            key={p.id} 
            className='py-3 hover:text-orange-600 duration-75' 
            to={`/catalog/${p.id}`}
        >
            {p.name}
        </Link>
    ))

    return (
        <div>
            <h1 className='text-2xl font-medium mb-5'>Каталог</h1>
            <div className='flex flex-col'>
                {courses}
            </div>
        </div>
    );
};

export default Catalog;