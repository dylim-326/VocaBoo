import { ALL } from './NoticeData';
import '../../css/NoticeQna.css';

export default function NoticeQna() {
    const qnas = ALL.filter(m => m.type === '문의');

    return (
        <div className="notice-container">
            <h3>문의사항</h3>
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
                    {qnas.map(m => (
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
