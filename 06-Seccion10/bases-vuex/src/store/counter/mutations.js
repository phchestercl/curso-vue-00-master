export const increment= (state)=> {
    state.count += 1
    state.lastMutation = 'increment'
}
export const incrementBy= (state, val)=> {
    state.count += val
    state.lastMutation = `incrementBy ${val}`,
        state.incRandInt = val
}
export const isLoadingMut=(state)=> {
    //console.log('Valor de Is Loading : '+state.isLoading)
    (state.isLoading) ? state.isLoading = false : state.isLoading = true;
}