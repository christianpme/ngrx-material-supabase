const fs = require('fs');
const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
  export const environment = {
    production: true,
    SUPABASE_URL: '${process.env.SUPABASE_URL}',
    SUPABASE_KEY: '${process.env.SUPABASE_KEY}'
  };
`;

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Environment file generated at ${targetPath}`);
  }
});