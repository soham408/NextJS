// import config from "../config/config.js";
// import {  Client, Account, Databases, ID} from "appwrite"

// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(config.appwriteUrl)
//             .setProject(config.appwriteProjectID);
//         this.account = new Account(this.client);
            
//     }    
    
//     async createDocument({EmailId, Contact_Number, name}) {
//         try {
//             const userDocument = await this.account.create(ID.unique(), EmailId, Contact_Number, name) 
//             if (userDocument) {
//                 return "WELCOME"
//             } else {
//                 return userDocument;
//             }
//         } catch (error) {
//             return createDocument
//         }
//     }
    
// }

// const authService = new AuthService();

// export default authService


import config from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService