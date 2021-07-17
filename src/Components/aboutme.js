import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class About extends Component {
    render() {
        return (
            <div className={"section-dark"}>
                <div className="section-content" id={"section2"}>
                    <Grid className="about-grid">
                        <Cell col={6} className="about-cell">
                            <img 
                                src={process.env.PUBLIC_URL + '/profile_circle.png'}
                                alt="avatar"
                                className="avatar-img"
                            />
                        </Cell>
                        <Cell id="particles" col={6}>
                            <h1>About Me</h1>
                            <p>
                            I am a junior in CS at the UIUC. Currently, I'm working with IBM C3SR and I'm interning at Facebook AI.
                            I am interested in studying the linguistic and psycholinguistic characteristics of deception and persuasion
                            (e.g. what makes fake news so popular, how to prevent deception in social media platforms).
                            Feel free to ask me about any of my current work (won't be linked in the projects section below).
                            </p>
                        </Cell>
                        
                    </Grid>
                </div>
            </div>
        )
    }
}

export default About;
