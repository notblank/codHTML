// variable App
// to add states we only touch one comp.
let CardView = React.createClass({
  getInitialState: function(){
    return{
      front: true
    };
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
    
    return(<div> 
        <p> {text}</p>
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
  question: "What is the ultimate answer to life, the universe, and everything?",
  answer: "42"
};

// put the component on the screen.
// pass card as an attribute to the App component
React.render(<App card={myCard} />, document.getElementById('page'));

