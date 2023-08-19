import { Component } from "react";

class MovieCard extends Component {
    render() {
        const { title, plot,poster, price, rating, stars , fav , isIncard } = this.props.movies;
        const { movies, addStars, subStars ,Favourite , AddToCard  } = this.props;
        
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={poster} />
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
                                    onClick={() => {this.props.subStars(this.props.movies)}}
                                />

                                <img
                                    alt="star"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                                    className="stars" />

                                <img
                                    className="str-btn" alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png"
                                    // onClick={this.addStars.bind(this)}
                                    onClick={() => {this.props.addStars(this.props.movies)}}
                                />

                                <span className="starCount">{stars}</span>

                            </div>
                            
                            {/* method 1 to convert fav to un-fav or viseversa */}
                            {/* {fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> 
                            : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                            
                            {/* Method 2 */}
                            <button className={fav?"unfavourite-btn":"favourite-btn"} 
                            onClick={() => this.props.Fav(this.props.movies)}>{fav?"UnFavourite":"Favourite"}</button> 

                            <button className={ isIncard?"remove-btn":"cart-btn" }
                            onClick={() => this.props.AddToCard(this.props.movies)}>{ isIncard?"Remove-from-card":"Add-to-card"}</button>

                            {/* {card? <button className="remove-btn" onClick={this.handleCard}>Remove-from-card</button>
                            :<button className="cart-btn" onClick={this.handleCard}>Add-To-Card</button>} */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieCard;