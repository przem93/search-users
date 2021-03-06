export interface UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserAddressGeo {
    lat: number;
    lng: number;
}

export interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UserAddressGeo
}

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    phone: string;
    website: string;
    company: UserCompany;
}
