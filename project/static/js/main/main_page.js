/* main page - JS */

const checkboxes=document.querySelectorAll("input[type='checkbox'][name='boxes']");
//const selectedCategorys = document.querySelector('.categoryfilter i');


const main=()=>{
    const checkedboxes=document.querySelectorAll("input[type='checkbox'][name='boxes']:checked");
  
    checkedboxes.forEach(checkbox => {

        if (checkedboxes.length>0) {
            document.querySelector('.categoryfilter').style.display = 'flex';
          } else {
            document.querySelector('.categoryfilter').style.display = 'none';
          }
        });
    

// checkedboxes.forEach((checkbox, index) => {
//             if (index === 0) {
//                 // 첫 번째 체크된 항목의 이름을 선택된 카테고리로 설정
//                 selectedCategorys.textContent = checkbox.id;
//             } else {
//                 document.querySelector('.categoryfilter').innerHTML = '';
//             const Cgname=checkbox.id;
//             const Cgdiv=document.createElement('div');
//             Cgdiv.innerHTML=`
//                 <i>${Cgname}</i>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//                 <path d="M9.99967 11.1668L5.91634 15.2502C5.76356 15.4029 5.56912 15.4793 5.33301 15.4793C5.0969 15.4793 4.90245 15.4029 4.74967 15.2502C4.5969 15.0974 4.52051 14.9029 4.52051 14.6668C4.52051 14.4307 4.5969 14.2363 4.74967 14.0835L8.83301 10.0002L4.74967 5.91683C4.5969 5.76405 4.52051 5.56961 4.52051 5.3335C4.52051 5.09738 4.5969 4.90294 4.74967 4.75016C4.90245 4.59738 5.0969 4.521 5.33301 4.521C5.56912 4.521 5.76356 4.59738 5.91634 4.75016L9.99967 8.8335L14.083 4.75016C14.2358 4.59738 14.4302 4.521 14.6663 4.521C14.9025 4.521 15.0969 4.59738 15.2497 4.75016C15.4025 4.90294 15.4788 5.09738 15.4788 5.3335C15.4788 5.56961 15.4025 5.76405 15.2497 5.91683L11.1663 10.0002L15.2497 14.0835C15.4025 14.2363 15.4788 14.4307 15.4788 14.6668C15.4788 14.9029 15.4025 15.0974 15.2497 15.2502C15.0969 15.4029 14.9025 15.4793 14.6663 15.4793C14.4302 15.4793 14.2358 15.4029 14.083 15.2502L9.99967 11.1668Z" fill="#DDDDDD"/>
//                 </svg>
//             `;
//            document.querySelector('.categoryfilter').appendChild(Cgdiv);
//             }
//         });


const checkedValues = [];
  
// 체크된 항목들을 확인하고 배열에 추가
checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
        checkedValues.push(checkbox.id);
    }
});

// categoryfilter를 초기화
document.querySelector('.categoryfilter').innerHTML = '';

// 체크된 항목들을 categoryfilter에 추가
checkedValues.forEach(value => {
    const div = document.createElement('div');
    div.innerHTML = `
        <i>${value}</i>
        <svg class="remove" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 15L5 5M5 15L15 5" stroke="#DDDDDD" stroke-width="2"/>
        </svg>
    `;
    document.querySelector('.categoryfilter').appendChild(div);
});



      let totalNumber = 0;
      checkedboxes.forEach(checkbox => {
          const selectedNumbers = checkbox.parentElement.querySelectorAll('.number');
          
          selectedNumbers.forEach(selectedNumber => {
              const number = parseInt(selectedNumber.textContent);
              totalNumber += number;
          });

      });
      // 총합 갱신
      document.getElementById('total').textContent = totalNumber;




      document.querySelector('.categoryfilter').addEventListener('click', event => {
        if (event.target.classList.contains('remove')) {
          
            event.target.parentElement.remove();
        }
    });



    }
// main함수 끝


    document.querySelector('.setting').addEventListener('click', function() {
        // 모든 체크박스를 순회하면서 체크 상태를 해제합니다.
        document.querySelectorAll("input[type='checkbox'][name='boxes']").forEach(checkbox => {
          checkbox.checked = false;
          document.querySelector('.categoryfilter').style.display = 'none';
          document.getElementById('total').textContent=508;
        });
      });
 

    //   document.querySelector('.categoryfilter svg').addEventListener('click', function() {
    //     // 모든 체크박스를 순회하면서 체크 상태를 해제합니다.
    //     document.querySelectorAll("input[type='checkbox'][name='boxes']").forEach(checkbox => {
    //       checkbox.checked = false;
    //       document.querySelector('.categoryfilter').style.display = 'none';

    //     });
    //   });



checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', main); // 각 체크박스에 대해 change 이벤트 리스너 추가
});

