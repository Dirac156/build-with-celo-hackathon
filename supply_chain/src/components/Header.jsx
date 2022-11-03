import React from "react"
import "./Header.css"
//write a react navbar header here

function Header() {
    return (
        <div class="header">
            <div className="navbar navbar-expand-lg text-white bg-black ml-8 mr-8">
                <nav className="flex p-6 content-center">
                    <div className="flex-grow content-center">
                        <h1 className="text-1xl font-bold text-white">sale <span>40%</span> of on bulk shopping!</h1>
                    </div>
                </nav>
            </div>
            <div className="navbar navbar-expand-lg text-white bg-green-500 ml-8 mr-8">
                <nav className="flex p-6 content-center">
                    <div className="content-left">
                        <h1 className="text-2xl font-bold text-white">Supply Chain</h1>
                    </div>
                    <div className="flex-grow content-center">
                        <ul className="flex justify-center">
                            <li className="mr-6">
                                <a href="#" className="text-white hover:text-black">Home</a>
                            </li>
                            <li className="mr-6">
                                <a href="#" className="text-white hover:text-black">About</a>
                            </li>
                            <li className="mr-6">
                                <a href="#" className="text-white hover:text-black">Contact</a>
                            </li>
                            <li className="mr-6">
                                <a href="#" className="text-white hover:text-black">Blog</a>
                            </li>
                            <li className="mr-6">
                                <a href="#" className="text-white hover:text-black">Shop</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>

        </div>

    )

}


export default Header