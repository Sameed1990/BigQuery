import React, { useEffect, useState } from 'react'


export default function Main() {
    const [check, setCheck] = useState(1)
    const [data, setData] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
    // console.log("before " ,SetTemp);
    const AddRow = () => {
        var SetTemp = data
        SetTemp.push("", "", "", "", "")
        setData(SetTemp)
        console.log("push", SetTemp);
        setCheck(check+1)
    }


    const List =["Home","Product","Carts", "Shops"]
    return (
        <>
            <nav className="navbar bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="table-name">
                        <h3>Table Name</h3>
                    </div>
                    {/* center  */}
                    <div className="center">
                        <div className="filter-drop">

                            <select className="form-select" aria-label="Default select example">
                                <option selected>Choose Filter Here </option>
                                <option value="1">A to Z</option>
                                <option value="2">Z to A</option>
                                <option value="1">High to Low</option>
                                <option value="2">Low to High</option>

                            </select>
                        </div>
                        <div className="filter-btn">
                            <button className='btn btn-primary' >Filter</button>
                        </div>
                    </div>



                    {/* right  */}
                    <div className="right">
                        <div className="upgrade-btn">
                            <button className='btn btn-primary' >Update to Bigquery</button>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Table Name</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {
                                        List.map(element => {
                                                console.log(element);
                                                return(  <li className="nav-item">
                                                {element}
                                            </li>
                                            )
                              
                                        })
                                }
                                {/* <li className="nav-item">
                                    Link
                                </li>
                                <li className="nav-item">
                                    Home
                                </li>
                                <li className="nav-item">
                                    Link
                                </li>
                                <li className="nav-item">
                                    Home
                                </li>
                                <li className="nav-item">
                                    Link
                                </li> */}
                            </ul>
                            <div className="upgrade-btn" id='show'>
                                <button className='btn btn-primary' >Update to Bigquery</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="table-responsive main-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">First</th>
                            <th scope="col">First</th>
                            <th scope="col">First</th>
                            <th scope="col">First</th>
                            <th scope="col">First</th>
                            <th scope="col">First</th>
                            <th scope="col">First</th>
                            <th scope="col">First</th>
                            <th scope="col">First</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* Row 1  */}
                        {
                            data?.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                        <td> <input type="text" className="main-body-input form-control" id="inputPassword2" /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn">
                <button onClick={AddRow} className='btn btn-primary'> Add More Row </button>
            </div>
        </>
    )
}