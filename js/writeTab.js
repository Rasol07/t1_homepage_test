// + 버튼 누르면 저기 탭 내용 나오게 해야함
// 샤갈 이 감정 없는 미친 자식이 뭐가 좋다고 다민아 미안하다
// 머리 깨버리고 싶네

function handleFile(input) {
            const file = input.files[0];

            if(file){
                const label = input.nextElementSibling;
                const previewImg = label.querySelector('#preview-image');
                const plusIcon = label.querySelector('#plus');
                const reader = new FileReader();

                reader.onload = function(e) {
                    plusIcon.style.display = 'none';
                    previewImg.src = e.target.result;
                    previewImg.style.display = 'block';
                    console.log("인식");
                    // 클래스 구분으로 가능하지 않는가.
                    if(!label.classList.contains('has-image')) {
                        // 지금 내가 추가하려는 버튼
                        label.classList.add('has-image');
                        console.log("새버튼");
                        addNewButton();
                    }
                }
                reader.readAsDataURL(file);
            }
        }

        // 버튼 옆에 추가하기
        function addNewButton() {
            // 어디탭에 추가할지
            const fileSection = document.querySelector('.file-section');
            const uniqueID = `file-${Date.now()}`;
            
            const fileHTML = `
                <input type = "file" id = "${uniqueID}" onchange = "handleFile(this)" accept = ".jpg, .png, .jpeg, .gif" multiple style = "display : none;">
        
                <label for = "${uniqueID}" class = "file-button"> 
                    <span id = "plus" style = "display : block;"> + </span>
                    
                    <!-- 미리보기 -->
                    <img src = "" id = "preview-image" alt = "미리보기" style = "display : none;">
                </label>
            `;
            console.log("작동");
            fileSection.insertAdjacentHTML('beforeend', fileHTML);
        }
const nameDiv = document.querySelector('.name');



