//import PropTypes from 'prop-types';

function Stuff({name = "Employee Man",
title = "Worker"}){

    return(
        <div className="myCard">
            <img className="CardPic" src="https://placehold.co/100x100"></img>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    );
}

export default Stuff