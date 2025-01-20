import config from "../config/config"
import {  Client, Databases, ID} from "appwrite"

export class AuthService {
    client = new Client();
    database;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client);
            
    }

    async createDocument({name, number, email}) {
        try {
            const response = await this.databases.createDocument(
                config.appwriteDatabaseID, 
                config.appwriteCollectionID, 
                "unique()", 
                { name, number, email } )
            if (response) {
                return 'Form submitted successfully!';
            } else {
               return  "Failed to submit form.";
            }
        } catch (error) {
            throw error;
        }
    }

    
}

const authService = new AuthService();

export default authService