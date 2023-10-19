
import jwtDecode from "jwt-decode";


export const decodedToken = ( token: string ) => {
    if(token){ return jwtDecode(token) }
    else return ''
};