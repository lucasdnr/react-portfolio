import React from "react";
import Cabin from '../../assets/img/portfolio/cabin.png';
import Cake from '../../assets/img/portfolio/cake.png';
import Circus from '../../assets/img/portfolio/circus.png';
import Game from '../../assets/img/portfolio/game.png';
import Safe from '../../assets/img/portfolio/safe.png';
import Submarine from '../../assets/img/portfolio/submarine.png';


const portfolio = () => {
    const portItems = [
        {
            target: '#portfolioModal1',
            src: Cabin,
        },
        {
            target: '#portfolioModal2',
            src: Cake,
        },
        {
            target: '#portfolioModal3',
            src: Circus,
        },
        {
            target: '#portfolioModal4',
            src: Game,
        },
        {
            target: '#portfolioModal5',
            src: Safe,
        },
        {
            target: '#portfolioModal6',
            src: Submarine,
        }
    ];

    const portLinks = portItems.map((section, index) => {
        return (
            <div className="col-md-6 col-lg-4" key={index}>
                {/* Portfolio Item */ } 
                <div className="portfolio-item mx-auto" data-toggle="modal" data-target={section.target}>
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={section.src} alt="" />
                </div>
            </div >
        )
    });

    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">

                {/* Portfolio Section Heading */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                {/* Icon Divider */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                {/* Portfolio Grid Items */}
                <div className="row">
                    {portLinks}
                </div>
                {/*.row */}
            </div>
        </section>
    );
}

export default portfolio;