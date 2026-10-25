import '../css/TodayVoca.css';

export default function TodayVoca(){
    return(
        <div className="TodayVoca">
            <h3>오늘의 단어</h3>
            <img src={process.env.PUBLIC_URL + '/images/today_voca.png'} alt='today_voca' />
        </div>
    );
}