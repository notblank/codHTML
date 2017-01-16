// variable App
let App = React.createClass({
  // create a class that can render something
  render: function(){
    // print on the screen 
    // returns some html
    return(<div> 
        <p> Question: What is the ultimate answer to life, universe, and everythin?</p>
        <p> Answer: 42</p>
      </div>);
  }
});

// put the component on the screen.
React.render(<App />, document.getElementById('page'));

