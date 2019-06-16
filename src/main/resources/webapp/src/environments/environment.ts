// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiPath: '/api',
  aliveTime: 1800,
  tabLayout:true,
  tabTooltip: false,
  unifiedAuth: true,
  defaultTabRouter: '/boe/mes-ui/type1',
  echartTheme: 'macarons',
  websocketUrl:'http://10.141.34.76:8888/socket'
};
