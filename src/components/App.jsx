import React from "react";

// let count = 0;

function App() {
  // const state = React.useState(0);
  //this is how we can declare a hook in javascript,it has to be declared within
  // the jsx function,the React.useState hook function assigns an array to the State variable and the array contains a value(this value is passed once a hook useState is created) at 0th index and a function at 1st index and it looks like
  // [0, ƒ bound dispatchAction()],here we have set the initial value of state[0]=0,now the function returned at the 1st index can be used
  //to update the value at 0th index,now there is a concept destructuring of an array where if we declare an array as let color=["red","green","blue"],now we can destrucutre this array as
  //let [r,g,b]=["red","green","blue"] now this is a destrucured array,now here r=array[0]="red",g=aray[1]="green",b=array[2]="blue".
  //we use this destrucutred array while declaring the useState hook also because using state[0],state[1] can create confusion,so now we can declare the
  //now since the usestate hook function returns an array so we can declare the hook as const [count,setCount]=React.useState(0),now the initial value is 0 and it is pointed by the count variable,and the function is mapped by setCount function,now the initial value of count is set as 0 and we can use the setCount function to update the count and we can use this hook items to show them dynamically i.e this will do the dynamic rendering for us

  let [count, setCount] = React.useState(0);

  function increase() {
    //count++;
    //the count will increase but the updated value of count would not be
    // visible on screen because the return in App function is called only once
    //from index.js and rendered while the html is loaded,so we have to find some way
    //using which we can render the updated count value always the + button is clicked
    //so here we would be using the useState hook.

    // console.log(state);

    setCount(count + 1);
    //the above function is increasing the hook variables count value every time the user clicks on + button,count+1 will be assigned to count and count will be rendered on screen
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
