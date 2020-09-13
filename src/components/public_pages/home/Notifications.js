import React from 'react'

const Notifications = () => {
    return (
        <section className="modals">
            <div className="container">
                <div className="modal fade" id="notification" role="dialog" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content unread-notification">
                            <div className="modal-body">
                                <div className="chatting-page">
                                    <div className="chat-freelancers">
                                        <div className="users">
                                            <ul>
                                                <li>
                                                    <div className="user-img">
                                                        <img src="img/chatting/user1.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="notification-details">
                                                        <p className="notification-text"><b>Rafsan</b> released a $300.00 USD milestone payment for project <b>Website Designing</b></p>
                                                        <p className="notification-time">About 20 minutes ago</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="user-img">
                                                        <img src="img/chatting/user2.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="notification-details">
                                                        <p className="notification-text"><b>John Deo</b> released a $450.00 USD milestone payment for project <b>Website Development</b></p>
                                                        <p className="notification-time">About 40 minutes ago</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="user-img">
                                                        <img src="img/chatting/user3.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="notification-details">
                                                        <p className="notification-text"><b>Denial Cook</b> released a $550.00 USD milestone payment for project <b>Graphic Design</b></p>
                                                        <p className="notification-time">About 50 minutes ago</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="user-img">
                                                        <img src="img/chatting/user4.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="notification-details">
                                                        <p className="notification-text"><b>Mikel</b> released a $700.00 USD milestone payment for project <b>Logo Design</b></p>
                                                        <p className="notification-time">About 1 hour ago</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="user-img">
                                                        <img src="img/chatting/user5.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="notification-details">
                                                        <p className="notification-text"><b>Reek</b> released a $850.00 USD milestone payment for project <b>Wordpress Development</b></p>
                                                        <p className="notification-time">About 1 hour 20 minutes ago</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Notifications