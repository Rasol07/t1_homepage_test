// + 버튼 누르면 저기 탭 내용 나오게 해야함

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

// 어짜피 여기선 this를 안 써도 됨. 왜냐하면 id에 따라서 달라지는 것이기 때문
// 저 아래에 d가 뭐인지 파악할 필요가 있을 듯.
// 비슷한 거라도 만들어봐야하지 않을까?

$(document).on('click', '.complete-button', function() {
    const text = $('.write').val(); // val()이라는 걸 사용해서 내용 가져오는 걸 할 수 있음
    const imgPadding = $('#preview-image').attr('src');


    if(!text) {
        alert("내용을 입력해주세요!");
        return;
    }

    // 해당 캐릭터 id가 뭐였는지 알아야 함
    const targetData = characterData.find(d => d.id === currentCharacterId);
    const newPost = {
        contentImg: imgPadding || "images/default.png", // 사진 없으면 기본이미지
        text: text.replace(/\n/g, '<br>'), // 줄바꿈 유지
        time: "방금 전"
    }

    // unshift로 바로 위로 올라가게 함.
    // 저거 삭제시키는 것도 만들어야겠네
    targetData.posts.unshift(newPost);
    updateTab(targetData);
    $('.write').val(''); // 입력창 초기화
    $('#preview-image').hide().attr('src', '');
    $('#modalOverlay').removeClass('active');

    const initialID = `file-${Date.now()}`;
    $('.file-section').html(`
        <input type = "file" id = "${initialID}" onchange = "handleFile(this)" accept = ".jpg, .png, .jpeg, .gif" style = "display : none;">
        <label for = "${initialID}" class = "file-button"> 
            <span id = "plus" style = "display : block;"> + </span>
            <img src = "" id = "preview-image" alt = "미리보기" style = "display : none;">
        </label>
    `);
    console.log("되나요?")
})



