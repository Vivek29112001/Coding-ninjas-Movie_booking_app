import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    title: 'The Avenger..',
                    plot: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
                    poster: "https://images5.alphacoders.com/481/481123.jpg",
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: false,
                    isIncard: false,
                },
                {
                    title: 'Avengers: Age of Ultron',
                    plot: " In the Eastern European country of Sokovia, the Avengers—Tony Stark, Thor, Bruce Banner, Steve Rogers, Natasha Romanoff, and Clint Barton—raid a Hydra facility commanded by Baron Wolfgang von Strucker, who has experimented on humans using the scepter previously wielded by Loki.",
                    poster: "https://images7.alphacoders.com/113/1134920.jpg",
                    price: 299,
                    rating: 9.4,
                    stars: 0,
                    fav: false,
                    isIncard: false,
                },
                {
                    title: 'Avengers: Infinity War',
                    plot: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.",
                    poster: "https://images4.alphacoders.com/909/909185.jpg",
                    price: 1111.00,
                    rating: 9.6,
                    stars: 0,
                    fav: false,
                    isIncard: false,
                },
                {
                    title: 'Avengers: Endgame',
                    plot: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
                    poster: "https://images8.alphacoders.com/100/1003220.png",
                    price: 2000,
                    rating: 9.9,
                    stars: 0,
                    fav: false,
                    isIncard: false,
                }
            ]
        }
        // this.addStars = this.addStars.bind(this);
    };

    handleIncStar = (movie) => {
        const { movies } = this.state;

        const mid = movies.indexOf(movie);

        if (movies[mid].stars >= 5) {
            return;
        }

        movies[mid].stars += 0.5;

        this.setState({
            movies: movies
        })
    }


    handelDecStar = (movie) => {
        const { movies } = this.state;

        const mid = movies.indexOf(movie);

        if (movies[mid].stars <= 0) {
            return;
        }

        movies[mid].stars -= .5;

        this.setState({
            movies: movies
        })
    }


    handelFav = (movie) =>{

        const {movies} = this.state;

        const mid = movies.indexOf(movie);

        movies[mid].fav= !movies[mid].fav;

        this.setState({
            movies: movies
        })
    }

    handelCard = (movie) =>{

        const {movies} = this.state;

        const mid = movies.indexOf(movie);

        movies[mid].isIncard = !movies[mid].isIncard;

        this.setState({
            movies: movies
        })
    }

    render() {
        // const { title, plot, price, rating, stars, fav, isIncard , poster} = this.state.movies;
        const { movies } = this.state;
        return (
            <>
                {movies.map((movie) =>
                    <MovieCard movies={movie}
                        key={movie.title}
                        addStars={this.handleIncStar}
                        subStars={this.handelDecStar}
                        Fav={this.handelFav} 
                        AddToCard={this.handelCard}/>)
                }

                {/* title={title} 
                 plot={plot}
                price={price}
                rating={rating}
                stars={stars}
                fav={fav}
                isIncard={isIncard} */}

            </>
        )
    }

}

export default MovieList;