import React from 'react';
import Hero from '../components/Hero';
import "./styles.css";


function SavedPage(props) {

    return (
    <div>
        <Hero title={props.title} />

    </div>
    );
}

export default SavedPage;