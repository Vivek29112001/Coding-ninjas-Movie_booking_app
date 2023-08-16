import { Component } from "react";

class MovieCard extends Component {
    constructor() {
        super();
        this.state = {
            title: 'The Avenger..',
            plot: "Supernatural power shown in the movie",
            price: 199,
            rating: 8.9,
            stars: 0,
        }
        // this.addStars = this.addStars.bind(this);
    };


    // eventhandler of increase button
    addStars = () => {

        // Form1 of set state
        if(this.state.stars >=5){
            return;
        }
            this.setState({
                stars : this.state.stars +0.5 
           } );


        // Form2 of set state
        // this.setState((prevState) => {

        //         return {
        //             stars: prevState.stars + 0.5
        //         };
             
        // });


        // this.state.stars += 0.5;
        // console.log('this.state.stars', this.state.stars);


    }


    subStars = () => {
        // Form1 of set state
        if (this.state.stars <= 0) {
            return;
        }
        this.setState({
            stars: this.state.stars - 0.5
        });

        // this.setState((prevState) => {
        //     if (prevState.stars > 0) {
        //       return {
        //         stars: prevState.stars - 0.5
        //       };
        //     }
        //     return null; // Don't update if limit is reached
        //   });
    }



    render() {
        const { title, plot, price, rating, stars } = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://images5.alphacoders.com/481/481123.jpg" />
                    </div>
                    <div className="right">
                        {/* <div className="title">{this.state.title}</div>
                        <div className="plot">{this.state.plot}</div>
                        <div className="price">Rs.{this.state.price}</div> */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>

                        <div className="footer">
                            {/* <div className="rating">{this.state.rating}</div> */}
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img
                                    className="str-btn" alt="decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                    onClick={this.subStars}
                                />

                                <img
                                    alt="star"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                                    className="stars" />

                                <img
                                    className="str-btn" alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png"
                                    // onClick={this.addStars.bind(this)}
                                    onClick={this.addStars}
                                />

                                <span className="starCount">{stars}</span>

                            </div>
                            <button className="favorite-btn">Favourite</button>
                            <button className="cart-btn">Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieCard;