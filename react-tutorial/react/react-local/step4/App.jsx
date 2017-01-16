// variable App
// to add states we only touch one comp.
let CardView = React.createClass({
  getInitialState: function(){
    return{
      front: true
    };
  },
  
  flip: function(){
      /* cannot use this.state to change state you need*/
    this.setState({
      front: !this.state.front
    });
  },
  
  // create a class that can render something
  // show only one side at the time
  render: function(){
    let text;
    if(this.state.front){
      text = this.props.card.question;
    } else {
      text = this.props.card.answer;
    }
    
    // add button to flip the card
    return(<div> 
        <p> {text}</p>
        <button onClick = {this.flip}> flip </button>
      </div>);
  }
});

let App = React.createClass({
  getInitialState: function(){
    return {
      activeIndex: 2
    };
  }, 
  
  render: function(){
    // gets a list of cards and pass one to cardview.
    // use a state to figure out which card.
    let activeCard = this.props.cards[this.state.activeIndex];
    return(
      <CardView card={activeCard}/>
    )
  }
});

// list of cards
let cards = [
  {
    question: "What is the ultimate answer to life, the universe, and everything?",
    answer: "42"
  }, {
    question: "When was Harvard founded?",
    answer: "1636"
}, {
    question: "What is the capital of Massachusetts?",
    answer: "Boston"
}
];

// put the component on the screen.
// pass card as an attribute to the App component
React.render(<App cards={cards} />, document.getElementById('page'));

