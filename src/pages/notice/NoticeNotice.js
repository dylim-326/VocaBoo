import { ALL } from './NoticeData';
import '../../css/NoticeNotice.css';

export default function NoticeNotice() {
    const notices = ALL.filter(m => m.type === '공지');

    return (
        <div className="notice-container">
            <h3>공지사항</h3>
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
                    {notices.map(m => (
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
