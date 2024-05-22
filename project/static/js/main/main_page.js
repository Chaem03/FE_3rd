/* main page - JS */

const checkboxes=document.querySelectorAll("input[type='checkbox'][name='boxes']");
 
const main=()=>{
   const checkedboxes=document.querySelectorAll("input[type='checkbox'][name='boxes']:checked");

  
    const checkedValues = [];
    const checkedNumbers=[];

    checkedboxes.forEach(checkbox => {

        if (checkedboxes.length>0) {
            document.querySelector('.categoryfilter').style.display = 'flex';
            document.querySelector('.setting>#set').style.color='var(--font-font2, #999)';
            
          } else {
            document.querySelector('.categoryfilter').style.display = 'none';
          }

          if (checkbox.checked) {  
            // 체크된 항목들을 확인하고 배열에 추가
            checkedValues.push(checkbox.id);
            checkedNumbers.push(checkbox.nextElementSibling.nextElementSibling);
            
        }

        });


// console.log(checkedNumbers)
// console.log(checkedValues)



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
    let checkedNumbers=[];
    checkedNumbers.push(checkbox.nextElementSibling.nextElementSibling);
    const selectedNumbers=checkedNumbers;
     selectedNumbers.forEach(selectedNumber => {
              const number = parseInt(selectedNumber.textContent);
              totalNumber += number;
          });

      });
      // 총합 갱신
      document.getElementById('total').textContent = totalNumber;




}// main함수 끝


document.querySelector('.categoryfilter').addEventListener('click', event => {
    if (event.target.classList.contains('remove')) {
        // 클릭된 .remove 요소에서 데이터를 찾아서 연결된 체크박스와 .number 요소를 찾습니다.
        const divToRemove = event.target.closest('div'); // 삭제할 div
        const valueID = divToRemove.querySelector('i').textContent; // 체크박스 ID를 텍스트로 가져옵니다.

        // 원래 페이지에서 해당 ID를 찾아 .number 요소의 값을 가져옵니다.
        const originalCheckbox = document.getElementById(valueID);
        const numberElement = originalCheckbox ? originalCheckbox.nextElementSibling.nextElementSibling : null;
        const number = numberElement ? parseInt(numberElement.textContent) : 0;

        divToRemove.remove(); // div 삭제

        let totalNumber = parseInt(document.getElementById('total').textContent);
        totalNumber -= number;

        document.getElementById('total').textContent = totalNumber; // 총합 갱신
        if (!document.querySelector('.categoryfilter').querySelector('div')) {
            document.querySelector('.categoryfilter').style.display = 'none'; // categoryfilter를 숨김
            // 또는 document.querySelector('.categoryfilter').remove(); // categoryfilter를 완전히 제거
        }
    }

    
});




document.querySelector('.setting').addEventListener('click', function() {
        // 모든 체크박스를 순회하면서 체크 상태를 해제합니다.
        document.querySelectorAll("input[type='checkbox'][name='boxes']").forEach(checkbox => {
          checkbox.checked = false;
          document.querySelector('.categoryfilter').style.display = 'none';
          document.getElementById('total').textContent=508;
        });
      });
 




checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', main); // 각 체크박스에 대해 change 이벤트 리스너 추가
});
