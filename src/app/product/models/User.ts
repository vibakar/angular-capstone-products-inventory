export interface User {
  "id"?: number;
  "emailId": string;
  "password": string;
  "firstName": string;
  "lastName": string;
  "location": string;
  "mobileNo": string;
  "views": Views;
}

interface Views {
	[key: string]: number;
}