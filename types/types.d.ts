// declare modules here

export interface Programm {
    id: number
    name: string
    description: string
    freepart: string

    status?: 'free' | 'purchase' | null
    familyAvailable?: boolean
}

export interface IuserData {
    name: string | null
    surname: string | null
    tel: string | null
    email: string | null
    dateOfBirth: string | null
    password: string | null
    isAuth: boolean | null
    familyGroup: Array<IuserData> | null
    purchasedСourses: Array<Programm>
}

export interface PaymentInvoice {
    card: string
}