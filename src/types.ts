//всі типи складають в один файл\папку

//export interface UserInterface { 
//	name: string,
//	age: number,
//	locations: Array<LocationInterface>
//} //шаблон обьекту в ts UserInterface, UserI, IUser



export interface UserInterface {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
	address: AddressInterface;
	company: CompanyIntreface;
}

export interface AddressInterface {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: GeoInterface;
}

export interface GeoInterface {
	lat: number;
	lng: number;
}

export interface CompanyIntreface {
    name: string;
    catchPhrase: string;
    bs: string;
}


//interface AInterface {
//	a: number
//}

//interface BInterface extends AInterface {
//	b: number,
//	method: (a: number, b: string, c: string[], u: {name: string}) => {name: string} //назви аргументів можуть бути будь-які
//}

//type AType = {
//	a: number,
//	b: number[],
//}

//type PassType = {
//	password: string
//}

//type EmilType = {
//	email: string
//}
 
//type AuthType = PassType & EmilType;//"сумма" типів

//const data: AuthType = {
//	email: "kgfmbmlml",
//	password: "kegmkl;kjkn"
//}

//type Auth = {
//	email: string,
//	password: string
//}

//type RegisterT = Auth & {firstName: string, birthday: Date}

//type UserT = RegisterT & {token: string}

////const user: UserT = {
////	email: '',
////	 birthday:'',
////	  firstName...
////}

//type UserType = AuthType | RegisterT;

////function fn<T, ReturnType>(a: T): ReturnType { //generyc function
////	return {a: 1} as ReturnType 
////}
////fn<AInterface, {name: string}>({a: 10});