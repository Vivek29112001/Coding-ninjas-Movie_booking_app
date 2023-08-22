import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div style={ styles.nav}>
                    <div style={styles.title}>
                        Movie App
                    </div>
                    <div style={styles.cartContainer}>
                        <img alt="Card Icon" src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" style={styles.cartIcon} />
                        <span style={styles.cartCount}>3</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;

const styles = {
    nav: {
        // width: "100% ",
        height: 70,
        background: "#4267b2",
        display: "flex",
        justifyContent: "space-between",
        alignItem:"center",
        position:"relative"
    },

    title:{
        fontSize:30,
        Color:"white",
        fontWeight: 600,
        fontFamily: '" Montserrat", "sans-serif"',
        textTransform:"uppercase",
        marginTop:15,
        marginLeft: 20
    },

    cartContainer:{
        position:"relative",
        cursor:"pointer",
    },
    cartIcon:{
        height: 40,
        marginRight:20,
        marginTop:10,
    },
    cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding:"4px 8px",
        position:"absolute",
        right:10,
        top:-5,
        fontSize: 12,
        marginTop:10
    }
 }