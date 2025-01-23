import homestead from '@/config/homestead.json';

const configs = {
  production: { homestead }
};
const env = process.env.VUE_APP_ENV || 'production';
const network = process.env.VUE_APP_NETWORK || 'homestead';

export default configs[env][network];
