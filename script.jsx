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

// Main component
var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Card login="cosmas28" />
                <Card login="chepkoy" />
            </div>
        )
    }
});

React.render(<Main />, document.getElementById("root"));