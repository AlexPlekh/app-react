import React from 'react';
import { IuserData } from 'types/types';

const subscriptions = new Set<() => void>()

let userData: IuserData = {
    name: 'Иван',
    surname: 'Иванов',
    tel: '89999999999',
    email: 'test@test.ru',
    dateOfBirth: '04-04-1991',
    password: '1234',
    isAuth: true,
    familyGroup: [
        { 
            name: 'Петя',
            surname: 'Петров',
            tel: '89999999999',
            email: 'petrov@test.ru',
            dateOfBirth: '01-01-1991',
            password: '1234',
            isAuth: false, //
            familyGroup: [],
            purchasedСourses: []
        }
    ],
    purchasedСourses: [],
}
  
 // сетаем после авторизации

export function setCurrentUser (user: IuserData) {
    userData = user
    subscriptions.forEach(onChange => onChange())
}

export function useCurrentUser () {
    return React.useSyncExternalStore(
        onChange => {
            subscriptions.add(onChange)
            return () => subscriptions.delete(onChange)
        },
        () => userData,
        () => userData,
    )
}
