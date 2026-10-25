export const NOTICE = [
    {id: 1, title: '공지사항1', name: '홍길동', date: '2025. 05. 06', type: '공지'},
    {id: 2, title: '공지사항2', name: '김춘향', date: '2025. 03. 09', type: '공지'},
    {id: 3, title: '공지사항3', name: '신짱구', date: '2025. 07. 17', type: '공지'},
    {id: 4, title: '공지사항4', name: '길복순', date: '2025. 02. 15', type: '공지'},
    {id: 5, title: '공지사항5', name: '이유리', date: '2025. 06. 26', type: '공지'},
    {id: 6, title: '공지사항6', name: '신짱아', date: '2025. 10. 03', type: '공지'},
    {id: 7, title: '공지사항7', name: '김제니', date: '2025. 10. 06', type: '공지'}
];

export const QNA = [
    {id: 8, title: '문의사항1', name: '홍길동', date: '2025. 05. 06', type: '문의'},
    {id: 9, title: '문의사항2', name: '김춘향', date: '2025. 03. 09', type: '문의'},
    {id: 10, title: '문의사항3', name: '신짱구', date: '2025. 07. 17', type: '문의'},
    {id: 11, title: '문의사항4', name: '길복순', date: '2025. 02. 15', type: '문의'},
    {id: 12, title: '문의사항5', name: '이유리', date: '2025. 06. 26', type: '문의'},
    {id: 13, title: '문의사항6', name: '신짱아', date: '2025. 10. 03', type: '문의'},
    {id: 14, title: '문의사항7', name: '김제니', date: '2025. 10. 06', type: '문의'}
];

export const ALL = [...NOTICE, ...QNA].sort((a, b) => new Date(b.date) - new Date(a.date));
