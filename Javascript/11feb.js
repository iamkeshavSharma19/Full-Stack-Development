function outer() {
  console.log("I am outer");
  parent();
  function parent() {
    console.log("I am parent");
    child();
    function child() {
      console.log("I am child");
    }
  }
}

outer();
