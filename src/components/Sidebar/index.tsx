import useOutsideElement from 'hooks/useOutsideElement';
import React, { useRef } from 'react'
import './index.scss'

interface IProps { }

const Sidebar: React.FC<IProps> = () => {

    const wrapperRef = useRef<HTMLDivElement>(null)

    const handleToogleMenu = () => {
        let nav = document.getElementById('navbar');
        if (nav?.classList.contains('show-menu')) {
            nav?.classList.toggle('show-menu')
        }
    }

    useOutsideElement(wrapperRef, handleToogleMenu, ["bx-menu"]);

    return (
        <div className="nav" id="navbar" ref={wrapperRef}>
            <nav className="nav__container">
                <div>
                    <a href="#" className="nav__link nav__logo">
                        <i className="fa-solid fa-code"></i>
                        <span className="nav__logo-name">DixonAlbi</span>
                    </a>

                    <div className="nav__list">
                        <div className="nav__items">
                            <h3 className="nav__subtitle">Profile</h3>

                            <a href="#" className="nav__link active">
                                <i className='bx bx-home nav__icon' ></i>
                                <span className="nav__name">Home</span>
                            </a>

                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i className='bx bx-user nav__icon' ></i>
                                    <span className="nav__name">Profile</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <a href="#" className="nav__dropdown-item">Passwords</a>
                                        <a href="#" className="nav__dropdown-item">Mail</a>
                                        <a href="#" className="nav__dropdown-item">Accounts</a>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className="nav__link">
                                <i className='bx bx-message-rounded nav__icon' ></i>
                                <span className="nav__name">Messages</span>
                            </a>
                        </div>

                        <div className="nav__items">
                            <h3 className="nav__subtitle">Menu</h3>

                            <div className="nav__dropdown">
                                <a href="#" className="nav__link">
                                    <i className='bx bx-bell nav__icon' ></i>
                                    <span className="nav__name">Notifications</span>
                                    <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div className="nav__dropdown-collapse">
                                    <div className="nav__dropdown-content">
                                        <a href="#" className="nav__dropdown-item">Blocked</a>
                                        <a href="#" className="nav__dropdown-item">Silenced</a>
                                        <a href="#" className="nav__dropdown-item">Publish</a>
                                        <a href="#" className="nav__dropdown-item">Program</a>
                                    </div>
                                </div>

                            </div>

                            <a href="#" className="nav__link">
                                <i className='bx bx-compass nav__icon' ></i>
                                <span className="nav__name">Explore</span>
                            </a>
                            <a href="#" className="nav__link">
                                <i className='bx bx-bookmark nav__icon' ></i>
                                <span className="nav__name">Saved</span>
                            </a>
                        </div>
                    </div>
                </div>

                <a href="#" className="nav__link nav__logout">
                    <i className='bx bx-log-out nav__icon' ></i>
                    <span className="nav__name">Log Out</span>
                </a>
            </nav>
        </div>
    )
}

export default Sidebar
