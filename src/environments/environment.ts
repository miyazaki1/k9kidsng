// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  account:{
    login: "account/login",
    register: "account/create",
    byUsername: "account/users/id",
    byId: "account/users/",
    update: "account/update/",
    delete: "account/delete/",
    fav: "account/fav/",
    favAdd: "account/fav/add",
    favDelete: "account/fav/remove",
    allBreeds: "breeds/all",
    breedInfo: "breeds/id/",
    breedInfoName: "breeds/name/",
    images: "images/"
  }
};

//change port to match your port 
export const BASE_URL = `http://localhost:8088/brooks/`;
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
