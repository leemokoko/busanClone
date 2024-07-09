document.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded 이벤트가 발생하면 실행
    const loginForm = document.getElementById('loginForm'); // loginForm 요소를 가져옴
    const usernameInput = document.getElementById('username'); // username 입력 필드 요소를 가져옴
    const passwordInput = document.getElementById('password'); // password 입력 필드 요소를 가져옴
    const messageElement = document.getElementById('message'); // 메시지 출력 요소를 가져옴

    // 페이지 로드 시 로그인 상태 확인
    if (localStorage.getItem('isLoggedIn') === 'true') { // 로컬 스토리지에서 로그인 상태를 확인
        messageElement.style.color = 'green'; // 메시지 색상을 초록색으로 설정
        messageElement.textContent = 'Already logged in!'; // 로그인 상태 메시지 출력
    }

    loginForm.addEventListener('submit', function(event) { // 로그인 폼 제출 이벤트 처리
        event.preventDefault(); // 폼 제출 기본 동작 방지

        const username = usernameInput.value; // 입력된 사용자 이름 가져옴
        const password = passwordInput.value; // 입력된 비밀번호 가져옴

        const userData = JSON.parse(localStorage.getItem('userData')); // 로컬 스토리지에서 저장된 사용자 데이터 가져옴

        if (userData && username === userData.username && password === userData.password) { // 입력된 정보가 저장된 정보와 일치하면
            localStorage.setItem('isLoggedIn', 'true'); // 로컬 스토리지에 로그인 상태 저장
            messageElement.style.color = 'green'; // 메시지 색상을 초록색으로 설정
            messageElement.textContent = '로그인 성공!'; // 로그인 성공 메시지 출력
            setTimeout(() => {
                window.location.href = 'login.html'; // 2초 후 로그인 페이지로 리디렉션
            }, 2000);
        } else { // 입력된 정보가 일치하지 않으면
            localStorage.setItem('isLoggedIn', 'false'); // 로컬 스토리지에 로그인 상태 저장
            messageElement.style.color = 'red'; // 메시지 색상을 빨간색으로 설정
            messageElement.textContent = '아이디 또는 비밀번호가 틀립니다!!'; // 오류 메시지 출력
        }
    });
});
