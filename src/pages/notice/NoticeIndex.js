import { ALL } from './NoticeData';

export default function NoticeIndex() {
    return (
        <div className="notice-container">
            <h3>전체 공지·문의</h3>
            <table border='1'>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {ALL.map(m => (
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.title}</td>
                            <td>{m.name}</td>
                            <td>{m.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
