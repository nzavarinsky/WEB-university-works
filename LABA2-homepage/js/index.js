var app = angular.module('portfolio', [])

//navigation controller
.controller('navCtrl', function($scope) {
  //navigation menu items
  $scope.navigation = [
    {
      id: '#home',
      name: 'Головна'
    },{
      id: '#news',
      name: 'Новини'
    },{
      id: '#contact',
      name: 'Контакти'
    },{
      id: '',
      name: 'Відгуки'
    },{
      id: '',
      name: 'Admin'
  }];




  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top'
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
  });

  //animation on Scroll
  $scope.animateHeader = function() {
    var doc = document,
      elem = doc.documentElement,
      header = doc.querySelector('.navbar-inverse'),
      didScroll = false,
      changeEffect = 220;

    window.addEventListener('scroll', function(e) {
      if (!didScroll) {
        didScroll = true;
        setTimeout($scope.scrollPage, 250);
      }
    }, false);

    $scope.scrollPage = function() {
      var sy = window.scrollY;
      if (sy >= changeEffect) {
        $('.navbar-inverse').addClass('navbar-animated');
      } else {
        $('.navbar-inverse').removeClass('navbar-animated');
      }
      didScroll = false;
    };
  };

  $scope.animateHeader();
})

//home controller
.controller('homeCtrl', function($scope) {
  $scope.title = "Порівняльне цивільне судочинство з правом Європейського Союзу";
  $scope.description = "Доц. Коссак С. М.";
})

//about controller
.controller('aboutCtrl', function($scope) {
  $scope.aboutText = {
    title: "Про нас",
    copyText1: `Мета: засвоєння студентами правових норм, теоретичних і практичних знань та
    вмінь з порівняльного аналізу цивільної процесуальної форми відкриття, розгляду,
    вирішення та перегляду цивільних справ за процесуальним законодавством України
    та держав ЄС, на прикладі ФРН, Англії та Франції, ознайомлення з інститутом
    судового доказування, основними учасниками цивільного процесу.
    Предмет: цивільне судочинство України та кріаїн Європейського Союзу, зокрема
    ФРН, Англії та Франції.`,
    copyText2: `Зміст: Cудові системи України та держав ЄС (ФРН, Франція, Англія). Цивільне
    процесуальне право України та держав ЄС. Учасники цивільного процесу.
    Порівняльна характеристика. Судові докази. Відкриття провадження у цивільних
    справах. Порівняльна характеристика. Попередній судовий розгляд. Судовий
    розгляд цивільних справ. Судові рішення. Перегляд судових рішень`,
    copyText3: `Місце у навчальному процесі – обов’язкова, 1 семестр.
    У результаті вивчення дисципліни «Порівняльне цивільне судочинство з правом
    Європейського Союзу» здобувач вищої освіти повинен:`,
    copyText4:`
    - знати:
    - судові системи України та держав ЄС (ФРН, Англії, Франції);
    - джерела цивільного процесуального законодавства України та держав ЄС щодо
    відкриття, розгляду, вирішення та перегляду цивільних справ; судового
    доказування, основних учасників цивільного процесу;
    - порівняльну характеристику окремих визначених інститутів процесуального права;
    - питання судової практики щодо тлумачення і застосування законодавства.
   `,
    copyText5: ` -вміти: - порівнювати та аналізувати процесуальні норми і формулювати власну позицію;
    - застосовувати правові норми для вирішення конкретних практичних ситуацій
    (казусів), узагальнювати матеріали судової практики, виявляти прогалини правового
    регулювання і подавати пропозиції щодо вдосконалення процесуального
    законодавства.
    Декан проф. Бурдін`,
    facebookUrl: "",
    githubUrl: "",
    codepenUrl: ""
  };

})

.controller('newsCtrl', function($scope) {
    $scope.works = [{
      id: 1,
      thumbnail: 'http://placehold.it/360x400',
      url: '',
      caption: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
      title: 'Новина 1'
    }, {
      id: 2,
      thumbnail: 'http://placehold.it/360x400',
      url: '',
      caption: 'Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
      title: 'Новина 2'
    }, {
      id: 3,
      thumbnail: 'http://placehold.it/360x400',
      url: '',
      caption: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      title: 'Новина 1'
    }];
  })
  //contact controller
  .controller('contactCtrl', function($scope) {
    $scope.contact = {};
  });
