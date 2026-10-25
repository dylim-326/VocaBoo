import '../css/Footer.css';

export default function Footer(){
    return(
        <footer>
            <img id="footer-logo" src={process.env.PUBLIC_URL + "/images/main_logo.png"} alt='logo' />
            <div id="copy">© 2025 Vocaboo.</div> <p> 개인 포트폴리오 목적으로 제작된 웹사이트입니다.</p>
            <p>본 사이트에 사용된 모든 이미지는 pixabay, ChatGPT 및 Freepik Pikaso AI Image Generator
            를 통해 생성되었으며, 상업적 사용 목적이 없음을 알려드립니다.</p>
        </footer>
    );
}