import uuid from 'uuid'


export function authorReducer(state =[], action){
    let idx 
    switch(action.type){
          case "ADD_AUTHOR":
            return [...state, action.author]
      
          case "REMOVE_AUTHOR":
            idx = state.authors.findIndex(author => author.id === action.id);
            return  [...state.slice(0, idx), ...state.authors.slice(idx + 1)]
  
          case 'ADD_BOOK':
            let exsistingAuthor = state.filter(
              author => author.authorName === action.book.authorName
            )
            if (exsistingAuthor.length > 0){
              return state
            } else {
              return [...state, {authorName: action.book.authorName, id: uuid()}]
            }
      
          default:
            return state;
    }
  }