window.onload = function(){

        const signupForm = document.getElementById('sign-up-form'); // signupForm 요소를 가져옴
        const newUsernameInput = document.getElementById('newusername'); // newUsername 입력 필드 요소를 가져옴
        const newPasswordInput = document.getElementById('newpassword'); // newPassword 입력 필드 요소를 가져옴
        const signupMessageElement = document.getElementById('sign-up-message'); // 메시지 출력 요소를 가져옴
    
        signupForm.addEventListener('submit', function(event) { // 회원가입 폼 제출 이벤트 처리
            event.preventDefault(); // 폼 제출 기본 동작 방지
    
            const newUsername = newUsernameInput.value; // 입력된 사용자 이름 가져옴
            const newPassword = newPasswordInput.value; // 입력된 비밀번호 가져옴
            if (newUsername && newPassword) { // 모든 필드가 유효한지 확인
                const userData = {
                    username: newUsername,
                    password: newPassword,
                };
    
    
                localStorage.setItem('userData', JSON.stringify(userData)); // 로컬 스토리지에 사용자 데이터 저장
                signupMessageElement.style.color = 'green'; // 메시지 색상을 초록색으로 설정
                signupMessageElement.textContent = '회원가입 성공!'; // 회원가입 성공 메시지 출력
                
                setTimeout(() => {
                    window.location.href = 'login.html'; // 2초 후 로그인 페이지로 리디렉션
                }, 1000);
            } else { // 필드가 유효하지 않으면
                signupMessageElement.style.color = 'red'; // 메시지 색상을 빨간색으로 설정
                signupMessageElement.textContent = '지대로 입력해라 마!'; // 오류 메시지 출력
            }
        });
    }
