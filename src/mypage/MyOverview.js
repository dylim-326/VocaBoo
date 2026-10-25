export default function MyOverview({user}){
    return(
        <div>
            <h3>개요</h3>
            <ul>
                <li>이름 : {user.name}</li>
                <li>등급</li>
                <li>최근 주문 내역</li>
            </ul>
        </div>
    );
}