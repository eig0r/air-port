# AngularFirebase

Clone the project and install the required dependencies.
```
git clone https://github.com/codehandbook/AngularFirebase.git
cd AngularFirebase
npm install
```
Replace the config details from `environments/environment.ts` file with your Firebase config.
```
export const environment = {
  production: false,
  firebase:{
  	apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }
};
```
Save the changes and start the server using `npm start`
You can find the tutorial for [creating a web app using Angular and Firebase on CodeHandbook.org](https://codehandbook.org/how-to-create-web-app-using-angular-and-firebase/).

