//&Difference between useState And useEffect Hook
//&useState ===
//&1.Used to add and manage state (data) in functional components.
//&2.Returns an array with 2 values [currentState, setState].
//&3.Updating state with setState() triggers a re-render of the component.
//&4.Preserves value between re-renders.

//~useEffect:
//~1.used to perform side effects (actions outside normal rendering)
//~2.Runs after the component renders (and after pain in most cases)
//~3.Common uses : data fetching, DOM manipulation, subscriptions, timers, event listeners.
//~4.The useEffect Hook does'not return any value (it returns undefined).

//^What is React Lifecycle methods in function based components ?
//^Every react component goes through 3 phases in it's file.
//^Mount(born) == update(changes) == Unmount(dies)

//^Phase 1 === MOUNTING
//^Component is created and inserted into the DOM for the first time.
//^On mounting phase useEffect Runs only once after component is added to DOM.
//* useEffect(() => { console.log("runs once like componentDidMount");}, []) */

//?Phase 2: UPDATING
//?1.Component re-renders due to state or prop changes.
//?2.On Updating phase useEffect runs when a specific value changes.
//? useEffect(() => { console.log("runs when count or name changes"); [count, name]}) ?//

//!phase 3 Unmounting
//!1.Component is removed from the DOM.
//!2.useEffect cleanup function will be called in this phase.
/*

useEffect(() => {

    console.log("runs when count or name changes");

    return () => {

        console.log("Cleanup functions") //this cleanup function will be called

        }

    })

*/

//*very very very important Note ===
//?whenver state variable updates,[setState] triggers re-rendering of hee component before re-rendering component === useEffect Hook's clean up function will be called, when our useEffect hook is dependent on state variables [UpdatingPhase].state change karne se pehle baar baar cleanUp function chalega.first cleanUp function runs, then effect function of the useEffect will run.useEffect hook ke returned cleanUp function ko next render se pehle store kar lenge and phir component ko unmount karne se pehle us cleanup function ko call kar denge.
