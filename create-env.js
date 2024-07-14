const fs = require('fs');
const targetPathDev = './src/environments/environment.ts';
const targetPathProd = './src/environments/environment.prod.ts';

const envConfigFileDev = `
export const environment = {
  production: false,
  supabaseUrl: '${process.env.SUPABASE_URL}',
  supabaseKey: '${process.env.SUPABASE_KEY}'
};
`;

const envConfigFileProd = `
export const environment = {
  production: true,
  supabaseUrl: '${process.env.SUPABASE_URL}',
  supabaseKey: '${process.env.SUPABASE_KEY}'
};
`;

fs.writeFile(targetPathDev, envConfigFileDev, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Environment file generated at ${targetPathDev}`);
  }
});

fs.writeFile(targetPathProd, envConfigFileProd, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Environment file generated at ${targetPathProd}`);
  }
});