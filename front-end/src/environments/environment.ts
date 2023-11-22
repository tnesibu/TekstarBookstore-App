// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  resourceApi: "http://3.145.178.84/resources-api",
  inventoryApi: "http://3.145.178.84/inventory-api",
  clientApi: "http://3.145.178.84/clients-api",
  rentingApi: "http://3.145.178.84/renting-api"
};
