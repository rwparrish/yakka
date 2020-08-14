export const getChores = () => {
    return dispatch => {
        dispatch({type: 'LOADING_CHORES'})
        fetch('/chores')
        .then(resp => resp.json())
        .then(chores => dispatch({
            type: 'CHORES_LOADED', 
            payload: chores}))
    }
}

export const addChore = (chore) => {
    return dispatch => {
        dispatch({type: 'ADDING_CHORE'})
        fetch('/chores', {
            method: 'POST',
            body: JSON.stringify(chore),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(chore => dispatch({
            type: 'CHORE_ADDED',
            payload: chore
        }))
    }
}

export const deleteChore = (id) => {
    return dispatch => {
        dispatch({type: 'DELETING_CHORE'})
        fetch(`/chores/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(() => dispatch({
            type: 'CHORE_DELETED', 
            payload: id}))
    }
}