export interface Sub{
    nick: string
    avatar: string
    subMonths: number
    description?: string
    sex: string
    privacyPolicy?: any
}

export type SubsResponseFromApi = Array<{
    nick: string
    months: number
    profileUrl: string
    description: string
    sexo: string
    privacidad: any
}>

export interface IMGObject {
    [key: number]: string;
}

export const IMGMan: IMGObject = {
    1: "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGpptnKrAOOz8ZSKCARE_FlX9hgCymbXhdQ&usqp=CAU",
    3: "https://previews.123rf.com/images/yupiramos/yupiramos1708/yupiramos170831273/84892638-icono-del-avatar-hombre-sobre-ilustraci%C3%B3n-de-vectores-de-fondo-blanco.jpg",
    4: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    5: "https://img.freepik.com/vector-premium/avatar-hombre-sonriente-joven-hombre-bigote-barba-marron-cabello-sueter-amarillo-o-sudadera-ilustracion-personaje-personas-vector-3d-estilo-minimalista-dibujos-animados_365941-860.jpg"

}

export const  IMGWoman: IMGObject = {
    1: "https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ddwT9XSpbzDvua0Kmepfg4AfB0eQ69Tkqw&usqp=CAU",
    3: "https://previews.123rf.com/images/yupiramos/yupiramos1709/yupiramos170910660/85494557-avatar-mujer-retrato-de-la-mujer-ilustraci%C3%B3n-imagen-del-vector.jpg",
    4: "https://www.creartuavatar.com/images/f17.svg",
    5: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043251-avatar-female-girl-woman_113291.png"
}