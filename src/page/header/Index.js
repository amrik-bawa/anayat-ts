import Logo from "../../assets/images/logo.png";
import Avtar from "../../assets/images/avtar.svg";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counter/counterSlice'
import { changeName,getEnquiriesList } from '../../store/enquiries/enquiriesSlice'
const Header =()=>{

    const {value} = useSelector((state) => state.counter)
    const {enquiriesList}=useSelector((state)=>state.enquiries)
    const dispatch = useDispatch()
console.log(enquiriesList)
// const test =()=>dispatch(increment)

    return <>
        <header className="nav-bar">
                    <div className="container-fluid">
                        <div className="d-md-flex justify-content-between py-3">
                        <button aria-label="Decrement value" onClick={() => dispatch(changeName('abc'))}> - </button>
                            <h1>Conter is </h1>
                            <button aria-label="Increment value" onClick={() => dispatch(changeName('sqrer'))}> - </button>
                            <button aria-label="Increment value" onClick={() => dispatch(getEnquiriesList())}> - </button>

                            <div>
                                <a href="#"><img src={Logo} /></a>
                            </div>
                            <div className="d-sm-flex align-items-center">
                                <div className="position-relative">
                                    <span className="search-icon position-absolute">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11Z"
                                                fill="#71717A" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929Z"
                                                fill="#71717A" />
                                        </svg>
                                    </span>
                                    <input className="form-control search-bar me-2 ps-5" type="search" placeholder="Search"
                                        aria-label="Search"></input>
                                    <div>

                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h3 className="fw-bold fs-6 mb-0 ps-2">Hi, Coby F,</h3>
                                    <p className="mb-0 text-gray fs-14 px-2"> Admin</p>
                                    <div className="form-check form-switch ">
                                        <input className="form-check-input" type="checkbox" role="switch"
                                            id="flexSwitchCheckChecked" checked></input>
                                    </div>
                                    <div className="border-gray d-flex justify-content-center align-items-center mx-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 8.99401C1.99947 8.20621 2.15435 7.42605 2.45577 6.69819C2.75718 5.97034 3.19921 5.30909 3.75655 4.75231C4.31388 4.19553 4.97558 3.75416 5.70373 3.45348C6.43189 3.15279 7.21221 2.99869 8 3.00001H16C19.313 3.00001 22 5.69501 22 8.99401V21H8C4.687 21 2 18.305 2 15.006V8.99401ZM20 19V8.99401C19.9974 7.93451 19.5749 6.91925 18.8251 6.17063C18.0754 5.42201 17.0595 5.00106 16 5.00001H8C7.47485 4.99869 6.9546 5.10106 6.4691 5.30123C5.98359 5.50141 5.54238 5.79546 5.17076 6.16652C4.79914 6.53758 4.50443 6.97835 4.30353 7.46356C4.10262 7.94876 3.99947 8.46886 4 8.99401V15.006C4.00265 16.0655 4.42511 17.0808 5.17486 17.8294C5.9246 18.578 6.9405 18.999 8 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z"
                                                fill="#595959" />
                                        </svg>
                                    </div>
                                    <div className="border-gray d-flex justify-content-center align-items-center mx-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                                                stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                                                stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <img src={Avtar} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
    </>
}
export default Header;