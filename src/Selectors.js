export const profileSelector = state => state.profile
export const chatListSelector = state => state.dialogs
export const messageListSelector = state => state.messages

export const gistsSelector = state => state.gists.gists
export const gistsLoadingSelector = state => state.gists.loading
export const gistsErrorSelector = state => state.gists.error