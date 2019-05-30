import Api from './Api'

export default {
   async index() {
        return (await Api().get('anime')).data
    }
}