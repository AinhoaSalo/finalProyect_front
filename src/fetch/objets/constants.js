// Constants.js
const prod = {
    url: {
        API_URL: 'http://planyourtrip.myvnc.com:8000'
    };
const dev = {
    url: {
        API_URL: 'http://localhost:8000'
    }
};
export const config = process.env.REACT_APP_ENVIRONMENT === 'development' ? dev : prod;
