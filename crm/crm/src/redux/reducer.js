import { GET_USERS, GET_COUNTRIES, UPDATE_FILTERED_USERS, ORDER} from "./actions";

const initialState = {
  users: [],
  count: 0,
  countries: [],
  accessCode: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      const count = action.payload.count
      const rows = action.payload.rows
      let sortedArr = []
      let sortOrder = 1
      sortedArr = [...rows].sort(function(a, b) {
        if (a.createdAt > b.createdAt) {
          return sortOrder;
        }
        if (a.createdAt < b.createdAt) {
          return -sortOrder;
        }
        return 0;
      }); 
      console.log(sortedArr);
      return { ...state, users: sortedArr, count: count };
    case GET_COUNTRIES:
      const modifiedCountries = action.payload.map(country => {
        if (Array.isArray(country.suf) && country.suf.length === 1) {
          return {
            ...country,
            code: `${country.code}${country.suf[0]}`,
          };
        }
        return country;
      });
      return{...state, countries: modifiedCountries}
    case UPDATE_FILTERED_USERS:
      const usersFiltered = action.payload.rows
      const contados = action.payload.count
      return { ...state, users: usersFiltered, count: contados };
      case ORDER:
        let sortedArray = []
        let sortOrdered 
        if(action.payload === "asc" || action.payload === "dsc"){
          sortOrdered = action.payload === "asc" ? 1 : -1;
          sortedArray = [...state.users].sort(function(a, b) {
           if (a.createdAt > b.createdAt) {
             return sortOrdered;
           }
           if (a.createdAt < b.createdAt) {
             return -sortOrdered;
           }
           return 0;
         }); 
        }
        if(action.payload === "ascR" || action.payload === "dscR"){
          sortOrdered = action.payload === "ascR" ? 1 : -1;
          sortedArray = [...state.users].sort(function(a, b) {
           if (a.Rating > b.Rating) {
             return sortOrdered;
           }
           if (a.Rating < b.Rating) {
             return -sortOrdered;
           }
           return 0;
         }); 
        }
        return {...state, users: sortedArray};
      default:
        return{...state};
  }
};

export default reducer;
