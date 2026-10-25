import {Link, Outlet} from 'react-router-dom';

export default function AdminLayout(){
    return(
        <div>
            <h3>관리자 페이지</h3>
            <nav>
                <Link to="/admin">사용자 관리</Link>
                <Link to="/admin/product">상품 관리</Link>
            </nav>
            <Outlet />
        </div>
    );
}