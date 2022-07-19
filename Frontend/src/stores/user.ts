import {defineStore} from 'pinia'
import api from '../services/api'

const token: any = "";

export const userStore = defineStore("user", {
    state: (): State => ({
        user: {
            jwt: localStorage.getItem('dfFsdaSage42SF')
        } as User,
    }),
    getters: (
        username(state){
            return state.user.username
        },
        isAuthenticated(){
            return token !== undefined
        },
    ),
    actions: (
        async authenticate(login: string, password: string){
            try{
                const {data} = await api.post('/auth/local', {
                    identifier: login,
                    password: password,
                });

                const {user, jwt} = data
                this.user = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    password: "",
                    jwt: jwt,
                };

                localStorage.setItem('dfFsdaSage42SF', jwt);
                return true;
            }catch(error){
                console.log(error)
            }
            return false
        },
        async register(username: string, email: string, password: string){
            try{
                await api.post('/auth/local/register', {
                    username: username,
                    email: email,
                    password: password,
                });
                return true
            }catch(error){
                return false;
            }
        },
        logout(){
            this.user = [] as User
            localStorage.clear()
        }
    );
})