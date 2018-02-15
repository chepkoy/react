// Card component
var Card = React.createClass({
    // Initializing the component with an empty state object
    getInitialState: function() {
        return {};
    },
    //Enough time to make the component fetch the data
    // Changing data through a lifecycle hook
    componentDidMount: function() {
        var component = this;
        $.get("https://api.github.com/users/" + this.props.login, function(data) {
            component.setState(data);
        });
    },


    render: function() {
        return(
            <div>
                <img src= {this.state.avatar_url} width="120" />
                <h3>{this.state.name}</h3>
                <hr/>
            </div>
        );
    }
});
// Form Component
var Form = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var loginInput = React.findDOMNode(this.refs.login);
        this.props.addCard(loginInput.value);
        loginInput.value = '';
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="github login" ref="login" />
                <button>Add</button>
            </form>
        );
    }
});
// Main component
var Main = React.createClass({
    getInitialState: function() {
        return {logins: []};
    },
    addCard: function(loginToAdd) {
        this.setState({logins: this.state.logins.concat(loginToAdd)});
    },

    render: function() {
        var cards = this.state.logins.map(function(login) {
            return(<Card login={login} />);
        });
        return (
            <div>
                <Form addCard={this.addCard}/>
                {cards}
            </div>
        )
    }
});

React.render(<Main />, document.getElementById("root"));