export default function MyProfile({user}){
    return(
        <div>
            <h3>개인정보 조회</h3>
            <ul>
                <li>이름 : {user.name}</li>
                <li>연락처</li>
            </ul>
        </div>
    );
}