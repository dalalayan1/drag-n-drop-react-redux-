const appReducer = (state = {}, action) => {

    switch (action.type) {
      case 'APP_DETAILS':
            let appContent = {};
            action.payload.forEach(element => {
                appContent = Object.assign({}, appContent, state, { [element.type]: element.list } )
            });

            return appContent;
      case 'UPDATE_LIST':
        return Object.assign({}, state, { [action.item.addType]: [...state[action.item.addType], action.item.item] },
            { [action.item.removeType]: action.item.removeType && state[action.item.removeType].filter((eachItem) => eachItem.title !== action.item.item.title) });
      case 'REMOVE_CARD':
            const { type, title } = action.item;

            const newList = state[type].filter((eachList) => eachList.title !== title);
        return Object.assign({}, state, {[type]: newList})
      default:
        return state
    }
}
  
export default appReducer;