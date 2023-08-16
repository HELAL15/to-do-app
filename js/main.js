

let sun_btn = document.getElementById('sun');
let moon_btn = document.getElementById('moon');
let add = document.querySelector('.add');
let text = document.querySelectorAll('.text');
let items = document.querySelector('.items');
let item = document.querySelectorAll('.item');
let deleteAll = document.querySelectorAll('.delete');
let header = document.getElementsByTagName('header')[0];

sun_btn.addEventListener('click', () => {
    document.body.classList.add('light-theme');
    header.classList.add('light-themes');
    sun_btn.style.display = 'none';
    moon_btn.style.display = 'block';
    add.classList.add('light-themes');
    items.classList.add('light-themes');


text.forEach((txt)=>{
    txt.classList.add('light-themes');
})

deleteAll.forEach((del)=>{
  del.classList.add('light-themes');
})

item.forEach((tem)=>{
  tem.classList.add('light-themes');
})



}
);
moon_btn.addEventListener('click',()=>{
    document.body.classList.remove('light-theme');
    header.classList.remove('light-themes');
    sun_btn.style.display = 'block';
    moon_btn.style.display = 'none';
    add.classList.remove('light-themes');
    items.classList.remove('light-themes');


    text.forEach((txt)=>{
      txt.classList.remove('light-themes');
  })
  
  deleteAll.forEach((del)=>{
    del.classList.remove('light-themes');
  })
  
  item.forEach((tem)=>{
    tem.classList.remove('light-themes');
  })


    // text.classList.remove('light-themes');
    // deleteAll.classList.remove('light-themes');
    // item.classList.remove('light-themes');
}
);


/*============ add ===================*/
add.addEventListener('click' ,()=>{

  let input = document.getElementById('input').value;

  if(input == ''){
    alert('please enter your task');
  }else{

    let item = document.createElement('div');
    item.className = 'item light-themes';

    item.innerHTML = `
    
    <div class="check">
            <div class="img light-themes">
              <img src="images/icon-check.svg" alt="" class="checked-icon light-themes">
            </div>
          </div>
          <p class="text  light-themes">${input}</p>
          <i class="fas fa-times delete light-themes"></i>
    
    `

      let items = document.querySelector('.items');
      items.appendChild(item);

      document.getElementById('input').value = '';
  }
/*============== delete======================*/
  let delete_btn = document.querySelectorAll('.delete');

  delete_btn.forEach((btn)=>{
      btn.addEventListener('click',()=>{
          btn.parentElement.remove();
      })
  });
  /*================================*/

  /*============== check======================*/

  // let check_btn = document.querySelectorAll('.check');

  // check_btn.forEach((btn) => {
  //   btn.addEventListener('click', () => {

  //     let text = btn.closest('.item').querySelectorAll('.text');
  
  //     let img_container = btn.closest('.item').querySelectorAll('.img');
  //     let img = btn.closest('.item').querySelectorAll('.checked-img');
  
  //     img_container.forEach((one) => {
  //       one.classList.toggle('back-color');
  //     });
  
  //     img.forEach((one) => {
  //       one.classList.toggle('checked-icon');
  //     });
  

  //     text.forEach((one)=>{
  //       one.classList.toggle('done');
  //     });

  //   });
  // });


  function handleCheck(btn) {
    let text = btn.closest('.item').querySelectorAll('.text');
    let img_container = btn.closest('.item').querySelectorAll('.img');
    let img = btn.closest('.item').querySelectorAll('.checked-img');
  
    img_container.forEach((one) => {
      one.classList.toggle('back-color');
    });
  
    img.forEach((one) => {
      one.classList.toggle('checked-icon');
    });
  
    text.forEach((one) => {
      one.classList.toggle('done');
    });
  }
  
  let check_btn = document.querySelectorAll('.check');
  
  check_btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    handleCheck(btn);
  });
  });

  /*=======================================*/

})

// let check_btn = document.querySelectorAll('.check');

//   check_btn.forEach((btn) => {
//     btn.addEventListener('click', () => {

//       let text = btn.closest('.item').querySelectorAll('.text');
  
//       let img_container = btn.closest('.item').querySelectorAll('.img');
//       let img = btn.closest('.item').querySelectorAll('.checked-img');
  
//       img_container.forEach((one) => {
//         one.classList.toggle('back-color');
//       });
  
//       img.forEach((one) => {
//         one.classList.toggle('checked-icon');
//       });
  

//       text.forEach((one)=>{
//         one.classList.toggle('done');
//       });

//     });
//   });
//   let delete_btn = document.querySelectorAll('.delete');

//   delete_btn.forEach((btn)=>{
//       btn.addEventListener('click',()=>{
//           btn.parentElement.remove();
//       })
//   });
// let check_btn = document.querySelectorAll('.check');

// check_btn.forEach((btn) => {
//   btn.addEventListener('click', () => {

//     let img_container = btn.closest('.item').querySelectorAll('.img');
//     let img = btn.closest('.item').querySelectorAll('.checked-img');

//     img_container.forEach((one) => {
//       one.classList.toggle('back-color');
//     });

//     img.forEach((one) => {
//       one.classList.toggle('checked-icon');
//     });

//   });
// });



