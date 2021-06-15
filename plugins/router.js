export default ({ app, store }) => {
    app.router.beforeEach((to, from, next) => {
        if(to.name === 'signup-step2') {
            store.dispatch('sign-up/ADD_REDIRECTION_ROUTE', from.name)
        }
        next()
    })
 }