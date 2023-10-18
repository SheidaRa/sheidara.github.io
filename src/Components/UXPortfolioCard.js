import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const UXPortfolioCard = ({ project, tools, link, image = 'images/placeholder.jpg' }) => {

    const divStyle = {
        backgroundImage: `url(${image})`
    }

    return (
        <div className='portfolio-card'>
            <div className='portfolio-img' style={divStyle}>
                <div className='portfolio-content'>
                    <h3>{project}</h3>
                    <div className='tools'>
                        {tools.map((tool, index) =>
                            <span key={index}>
                                <p>{tool}</p>
                            </span>
                        )}
                    </div>
                    <a className='button' href={link} target='blank'>
                        <span> View design or code  </span><FontAwesomeIcon icon={''} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UXPortfolioCard