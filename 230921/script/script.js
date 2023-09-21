$('.sub').hide()
$('nav > ul > li').on('mouseover',function(){
    $(this).find('.sub').stop().slideDown()
})
$('nav > ul > li').on('mouseout',function(){
    $(this).find('.sub').stop().slideUp()
})

// 공지사항 첫 글 클릭 시 팝업 보이기
$('.c1 a:first-child').on('click',function(){
    $('#popup').show()
})
// 팝업 닫기 클릭 시 팝업 숨기기
$('#popup a').on('click',function(){
    $('#popup').hide()
})

// 공지, 갤러리 탭 구조
// 공지 클릭 시 갤러리(숨기기) 공지(보이기)
$('.c2').hide()
$('.c12 .title a:nth-child(1)').on('click',function(){
    // active Class 활용
    // 모든 제목 active 클래스 해제
    // 클릭한 제목 대상이 active 적용
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').show()
    $('.c2').hide()
})
// 갤러리 클릭 시 갤러리(보이기) 공지(숨기기)
$('.c12 .title a:nth-child(2)').on('click',function(){
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').hide()
    $('.c2').show()
})

// 슬라이드
$('.slide').hide()
$('.slide').eq(0).show() 
//eq = css nth / 모든 슬라이드 중 몇번째만 보이게 하겠다

let count = 0
// 상수라 const가 아닌 let이라고 적어야함
setInterval(function(){
    count++
    // count>2, count==3 둘 중 하나로 적으면 됨
    // if(count>2){count=0} 
    if(count==3){count=0}
    console.log(count)
    $('.slide').fadeOut() //제자리에 모든 슬라이드 숨기기
    $('.slide').eq(count).fadeIn()
},3000)