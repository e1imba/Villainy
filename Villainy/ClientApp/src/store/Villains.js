const requestVillainsType = 'REQUEST_VILLAINS';
const receiveVillainsType = 'RECEIVE_VILLAINS';
const addVillainsType = 'ADD_VILLAIN';
const initialState = { villains: [], isLoading: false };

const allvillains = [
    {
        name: "Junq",
        powers: "Can make weapons and gadgets out of anything",
        hobbies: "Crochet, macrame, kidnapping"
    },
    {
        name: "Darkness",
        powers: "Converts light into darkness",
        hobbies: "Robbing banks, blackmail, puzzles"
    },
    {
        name: "Blast Wave",
        powers: "Generates concussive blasts with his hands",
        hobbies: "General villainy, doggie dancing"
    }
]

export const ActionCreators = {
    requestVillains: () => async (dispatch, getState) => {

        dispatch({ type: requestVillainsType });

        dispatch({ type: receiveVillainsType, allvillains });
    },

    addVillain: (villain) => async (dispatch, getState) => {

        dispatch({ type: addVillainsType, villain })
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestVillainsType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveVillainsType) {
        return {
            ...state,
            villains: action.allvillains,
            isLoading: false
        }
    }

    if (action.type === addVillainsType) {

        const newVillains = allvillains;

        newVillains.push({ name: action.villain.name, powers: action.villain.powers, hobbies: action.villain.hobbies })

        return {
            ...state,
            villains: newVillains,
            isLoading: false
        }
    }
    return state
};