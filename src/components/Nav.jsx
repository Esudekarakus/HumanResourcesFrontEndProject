import { NavLink } from "react-router-dom";


export default function Nav(){
    return (
        <nav >
            <ul>
                <li>
                    <NavLink to="/">Ana Sayfa</NavLink>
                </li>
                <li>
                    <NavLink to="/employer-details">
                       Şirket Yöneticisi Detayları
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )
    
}