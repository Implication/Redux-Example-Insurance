/*People dropping off a form(Action Creator)*/
const createPolicy = (name, amount) => {
  return {
    //Action (a form in our analogy)
    type: "CREATE_POLICY",
    payload: {
      name,
      amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};

//Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    //WE CARE ABOUT THE ACTION(CLAIM)
    return [...oldListOfClaims, action];
  }

  return oldListOfClaims;
  //WE DONT CARE THE ACTION (FORM!!)
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }

  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("Alex", 20));
console.log(store.getState());
store.dispatch(createPolicy("Jen", 40));
console.log(store.getState());
store.dispatch(createPolicy("Bop", 50));
console.log(store.getState());
store.dispatch(createClaim("Alex", 24));
console.log(store.getState());
store.dispatch(deletePolicy("Alex"));
console.log(store.getState());
const createPolicy = (name, amount) => {
  return {
    //Action (a form in our analogy)
    type: "CREATE_POLICY",
    payload: {
      name,
      amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};

//Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    //WE CARE ABOUT THE ACTION(CLAIM)
    return [...oldListOfClaims, action];
  }

  return oldListOfClaims;
  //WE DONT CARE THE ACTION (FORM!!)
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }

  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("Alex", 20));
console.log(store.getState());
store.dispatch(createPolicy("Jen", 40));
console.log(store.getState());
store.dispatch(createPolicy("Bop", 50));
console.log(store.getState());
store.dispatch(createClaim("Alex", 24));
console.log(store.getState());
store.dispatch(deletePolicy("Alex"));
console.log(store.getState());
