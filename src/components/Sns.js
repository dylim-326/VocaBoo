import '../css/Sns.css';

export default function Sns(){
    return(
        <div className="Sns">
            <img id="blog" src={process.env.PUBLIC_URL + '/images/ico_blog_h.png'} alt='sns-blog' />
            <img id="kakao" src={process.env.PUBLIC_URL + '/images/ico_channel_h.png'} alt='sns-kakao' />
        </div>
    );
}