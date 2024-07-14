const fs = require('fs');
const path = require('path');

const dir = './src/environments';
const targetPathDev = path.join(dir, 'environment.ts');
const targetPathProd = path.join(dir, 'environment.prod.ts');

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

fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(targetPathDev, envConfigFileDev, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Environment file generated at ${targetPathDev}`);
  }
});

fs.writeFileSync(targetPathProd, envConfigFileProd, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Environment file generated at ${targetPathProd}`);
  }
});