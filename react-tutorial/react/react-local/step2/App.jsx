// variable App
let CardView = React.createClass({
  // create a class that can render something
  render: function(){
    let question = this.props.card.question;
    let answer = this.props.card.answer;
    // card print  
    return(<div> 
        <p> Question: {question}</p>
        <p> Answer: {answer}</p>
      </div>);
  }
});

let App = React.createClass({
  render: function(){
    return(
      // pass card to cardView
      // myCard object passes to the App. 
      // The App accesses the card using this.props.card
      <CardView card={this.props.card}/>
    )
  }
});

// create a cerd object
let myCard = {
  question: "What is the ultimate answer to life, universe, and everything?",
  answer: "42"
};

// put the component on the screen.
// pass card as an attribute to the App component
React.render(<App card={myCard} />, document.getElementById('page'));

