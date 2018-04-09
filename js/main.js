'use strict';

var products = Array.from(document.querySelectorAll('.product'));

products.forEach(function (product) {
  product.addEventListener('click', function (evt) {
    // если клик попадает на ссылку - отменяем переход по ней
    if (evt.target.closest('a')) {
      evt.preventDefault();
    }
    // добавляем/удаляем класс активности у выбранного элемента
    if (!product.classList.contains('product--selected')) {
      product.classList.add('product--selected');
      product.classList.remove('product--hover');
    } else {
      product.classList.remove('product--selected');
      product.classList.remove('product--selected-hover');
    }
  });
  // при убирании мышки с элемента добавляем ему класс сховерами
  product.addEventListener('mouseleave', function () {
    if (!product.classList.contains('product--selected')) {
      product.classList.add('product--hover');
    } else {
      product.classList.add('product--selected-hover');
    }
  });
});
