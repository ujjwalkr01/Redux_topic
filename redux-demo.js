//first--> we have to install redux package,@reduxjs/toolkit package..
// And then we can import in either way using import as well or like the below mentioned way...
const redux = require("redux");

/*third--> we have to create the reducer function that will hold the prevState and action as parameter and then will return the current updated state */
const counterReducer = (state = { count: 0 }, action) => {
  return {
    count: state.count + 1,
  };
};

/*second--> we have to create the store which will hold all the  reducer function and for that we have to use leagacy_createStore and we can use that by installing the library @reduxjs/toolkit*/
const store = redux.legacy_createStore(counterReducer);

// console.log(store.getState());
/*fourth--> now we have to create the subscriber method that is present in the store to update  the state */
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//whenever the subscriber method will update then .subscribe method will get executed....
store.subscribe(counterSubscriber);

/*last--> we have to write the dispatch method let us to dispatches an action. It's an js object with a type property 
--> using dispatch method our subscriber method will get executed...
*/
store.dispatch({ type: "increment" });
