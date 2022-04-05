export const state = () => ({
    me: null,

});

export const mutations = {
    setMe(state, payload)
    {
        state.me = payload;
        
    },
};

export const actions={
    signUp({commit,state},payload)
    {
          commit('setMe',payload);
    },
    logIn({commit},payload)
    {
        commit('setMe',payload);
    },
    logOut({commit},payload)
    {
        commit('setMe',null);
    }
};