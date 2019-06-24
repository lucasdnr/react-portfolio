import React from 'react';

const Modal = (props) => {
    return (
        <div className="portfolio-modal modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times"></i>
                        </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title  */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{props.tittle}</h2>
                                    {/* Icon Divider  */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* Portfolio Modal - Image  */}
                                    <img className="img-fluid rounded mb-5" src={props.img} alt="" />
                                    {/* Portfolio Modal - Text  */}
                                    <p className="mb-5">{props.description}</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal" >
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;