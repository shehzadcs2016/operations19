import React from 'react'

const Messages = (props) => {
    return (
        <section className="modals">
            <div className="container">
                <div className="modal fade" id="unread-messages" role="dialog" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content unread-messages">
                            <div className="modal-body">
                                <div className="chatting-page">
                                    <div className="chat-freelancers">
                                        <div className="users">
                                            <ul>
                                                <li className="active">
                                                    <div className="user-img">
                                                        <img src="img/chatting/user1.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="user-details">
                                                        <p><a href="# ">Amazingsoftware</a></p>
                                                        <p><a href="# " className="project-name">Multi Vendor Website</a></p>
                                                    </div>
                                                </li>
                                                <li className="active">
                                                    <div className="user-img">
                                                        <img src="img/chatting/user2.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="user-details">
                                                        <p><a href="# ">John65</a></p>
                                                        <p><a href="# " className="project-name">Write Some Software</a></p>
                                                    </div>
                                                </li>
                                                <li className="active">
                                                    <div className="user-img">
                                                        <img src="img/chatting/user3.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="user-details">
                                                        <p><a href="# ">BabyGirl</a></p>
                                                        <p><a href="# " className="project-name">Create Powerpoint Templete</a></p>
                                                    </div>
                                                </li>
                                                <li className="active">
                                                    <div className="user-img">
                                                        <img src="img/chatting/user3.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="user-details">
                                                        <p><a href="# ">MarketingWizard</a></p>
                                                        <p><a href="# " className="project-name">Write code get google drive</a></p>
                                                    </div>
                                                </li>
                                                <li className="active">
                                                    <div className="user-img">
                                                        <img src="img/chatting/user4.jpg" alt="" />
                                                        <span className="online-icon"><i className="icofont icofont-ui-press"></i></span>
                                                    </div>
                                                    <div className="user-details">
                                                        <p><a href="# ">Jenelia</a></p>
                                                        <p><a href="# " className="project-name">Google Write Code</a></p>
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

export default Messages