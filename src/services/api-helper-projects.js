import axios from 'axios'


const api = axios.create({
    baseURL: 'https://devenish-portfolio.herokuapp.com/projects/'
});

export const getProjects = async () => {
    const resp =  await api.get('/');
    return resp.data
};
