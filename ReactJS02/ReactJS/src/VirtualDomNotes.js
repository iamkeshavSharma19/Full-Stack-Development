//^Q === What is virtual DOM ?
//^Ans === The virtual DOM (VDOM) is a lightweight in-memory Javascript representation (a tree of javascript objects) of the Real Dom.

//^2.Instead of updating the Real DOM every time something changes,React maintains a virtual copy of it in memory.

//^3.React uses it to create a new tree on every re-render and then compares it with previous one to optimise DOM updates.

//&Q === What is Reconcilliation ?
//&Reconciliation is the process React uses to figure out how to effecienty update the DOM (Document Object Model) when changes occur in the UI.

//~Q === What is Diffing Algorithm ?
//~Diffing Algorithm is a React heuristic-based [O(n)] comparison algorithm that effeciently finds the difference between the new and old virtual dom trees.
