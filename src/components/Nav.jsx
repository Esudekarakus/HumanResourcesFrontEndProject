import { NavLink } from "react-router-dom";


export default function Nav(){
    return (
        <nav >
            <ul>
                <li>
                    <NavLink to="/">Ana Sayfa</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/employer-details/:id">
                       Şirket Yöneticisi Detayları
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/deneme">
                        Test
                    </NavLink>
                </li> */}
                
            </ul>
        </nav>
    )
    
}