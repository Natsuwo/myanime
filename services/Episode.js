import Api from './Api'

export default {
   async index() {
        return (await Api().post('/episode/index')).data
    }
}