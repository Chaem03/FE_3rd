/* signup page - JS */

// document.addEventListener("DOMContentLoaded", function() {
//     const inputs = document.querySelectorAll("#form input");
//     const signupButton = document.getElementById('button');
  
//     function validateInput() {
//       // 모든 입력 필드를 검사하여 빈 값이 있는지 확인
      
//       const filled = Array.from(inputs).every(input => input.value.trim() !== '');
//       // 모든 필드가 채워져 있으면 버튼을 활성화, 아니면 비활성화
//       if (filled) {
//         signupButton.disabled = false;
//         console.log('가입버튼을 누르세요')
//         signupButton.parentElement.style.backgroundColor = '#5E0080';
//         signupButton.parentElement.style.color = 'white';
//       } 
//     }
  
//     // 각 입력 필드에 'input' 이벤트 리스너를 추가
//     inputs.forEach(input => {
//       input.addEventListener('input', validateInput);
//     });
//   });
  




  // document.addEventListener("DOMContentLoaded", function() {
  //   const username = document.getElementById('username');
  //   const password = document.getElementById('password');
  //   const passwordConfirm = document.getElementById('password-confirm');
  //   const signupButton = document.getElementById('button');
  
  //   function validateInput() {
  //     // 모든 입력 필드가 비어 있지 않은지 확인
  //     if (username.value.trim() !== '' && password.value.trim() !== '' && passwordConfirm.value.trim() !== '') {
  //       signupButton.disabled = false; 
  //       signupButton.parentElement.style.backgroundColor = '#5E0080';
  //     signupButton.parentElement.style.color = 'white';// 버튼 활성화
  //     } else {
  //       signupButton.disabled = true; // 버튼 비활성화
  //     }
  //   }
  
  //   // 각 입력 필드에 이벤트 리스너 추가
  //   username.addEventListener('input', validateInput);
  //   password.addEventListener('input', validateInput);
  //   passwordConfirm.addEventListener('input', validateInput);
  // });
  







  document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("#form input");
    const signupButton = document.getElementById('button');
    const su=document.querySelector(".su");
  
    function validateInput() {
      let allFilled = true;
      inputs.forEach(input => {
        if (input.value.trim() === '') {
          allFilled = false;
        }
      });
  
      // 비밀번호 추가 검증
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('password-confirm').value;
      const isValidPassword = password.length >= 8 &&
                              /[a-zA-Z]/.test(password) &&
                              /[0-9]/.test(password) &&
                              /[@!?\-_]/.test(password);
      const isPasswordMatch = password === passwordConfirm;
  
      // 최종 검증 결과로 버튼 활성화 결정
     
     
      if(allFilled && isValidPassword && isPasswordMatch)
        {  signupButton.disabled =false;
          su.style.backgroundColor = '#5E0080';
      su.style.color = 'white';}
    
  if(isPasswordMatch==false)  {
       document.getElementsByClassName('none')[0].style.display='block';
       }
    
       if(isPasswordMatch==true)  {
        document.getElementsByClassName('none')[0].style.display='none';
        }

 }
    
 signupButton.addEventListener('click', function() {
  if (!signupButton.disabled) {
    form.submit();
  }
});
   
    // 모든 입력 필드에 대해 이벤트 리스너 추가
    inputs.forEach(input => {
      input.addEventListener('input', validateInput);
    });
  });
  