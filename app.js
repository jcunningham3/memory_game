
  //create cards
  let ars1 = 'img/ars.png';
  let ars2 = 'img/ars.png';
  let tot1 = 'img/tot.png';
  let tot2 = 'img/tot.png';
  let che1 = 'img/che.png';
  let che2 = 'img/che.png';
  let whu1 = 'img/whu.png';
  let whu2 = 'img/whu.png';
  let ful1 = 'img/ful.png';
  let ful2 = 'img/ful.png';
  let cry1 = 'img/cry.png';
  let cry2 = 'img/cry.png';

  //add cards to a deck
  let deck = [
    ars1,
    ars2,
    tot1,
    tot2,
    che1,
    che2,
    whu1,
    whu2,
    ful1,
    ful2,
    cry1,
    cry2
  ];

  //create a start screen
  function create_game(){
    let x =
      '<div>' +
        '<h1 class="w3-center">ePremier League Memory Game <i class="w3-small">demo</i></h1>' +
        '<img id="splash_img" class= "w3-btn w3-ripple w3-margin" src="img/epl_splash.png" onclick="put_cards_into_play()">' +
      '</div>';
    document.querySelector("#game_area").innerHTML = x;
  }

  //shuffle the deck
  function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
  let shuffled_deck = shuffle(deck);

  //assign cards froms shuffled deck (could be a for loop)
  let card1 = shuffled_deck[0];
  let card2 = shuffled_deck[1];
  let card3 = shuffled_deck[2];
  let card4 = shuffled_deck[3];
  let card5 = shuffled_deck[4];
  let card6 = shuffled_deck[5];
  let card7 = shuffled_deck[6];
  let card8 = shuffled_deck[7];
  let card9 = shuffled_deck[8];
  let card10 = shuffled_deck[9];
  let card11 = shuffled_deck[10];
  let card12 = shuffled_deck[11];


  //deal cards out (could have created elements based on deck.length....advantage being cards are created rather than manually creating divs etc)
  function put_cards_into_play(){
    let x =
    '<h1 class="w3-center">ePremier League Memory Game <i class="w3-small">demo</i></h1>' +
    '<h3>London Derby <i>Edition</i></h3>'+
    '<div id="game_board_color">' +
      '<div class="w3-animate-left">' +
        //card 1
        '<div id="c1" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card1_click()">' +
          '<img id="img1" class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 2
        '<div id="c2" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card2_click()">' +
          '<img id="img2" class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 3
        '<div id="c3" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card3_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 4
        '<div id="c4" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card4_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 5
        '<div id="c5" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card5_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 6
        '<div id="c6" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card6_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
      '</div>' +
      '<div class="w3-animate-right">' +
        //card 7
        '<div id="c7" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card7_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 8
        '<div id="c8" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card8_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 9
        '<div id="c9" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card9_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 10
        '<div id="c10" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card10_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 11
        '<div id="c11" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card11_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
        //card 12
        '<div id="c12" class="card_back w3-margin w3-border w3-btn w3-ripple" onclick="card12_click()">' +
          '<img class="card_back_img" src="img/card_back.png">' +
        '</div>' +
      '</div>' +
    '</div>';
    document.querySelector("#game_area").innerHTML = x;
  }

  //keep track of count (the always dangerous global variables)
  let count = 0;
  let pics = [];
  let card_id = '';
  let matched = 0;
  let timing = 1000;

  //card 1 funcitonality
  function card1_click(){
    count ++;
    let x =
      '<img id="card1_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card1 + '>';
    document.querySelector('#c1').innerHTML = x;

    //checking if catd is the 1st or 2nd card turned?
    if(count === 1){
      pics.push(card1);
      card_id = '#c1';
      document.querySelector('#test4').innerHTML = 'pics array: ' + pics;
    }
    else {
      pics.push(card1);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
        document.querySelector('#test4').innerHTML = 'pics array: ' + pics;
      }
      else {
        setTimeout(function(){
          let x =
            '<img id="card2_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c1').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }
      //reset
      count = 0;
      pics = [];
    }
  }
  //card 2 funciton
  function card2_click(){
    count ++;
    let x =
      '<img id="card2_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card2 + '>';
    document.querySelector('#c2').innerHTML = x;

    if(count === 1){
      pics.push(card2);
      card_id = '#c2';
      document.querySelector('#test4').innerHTML = 'pics array: ' + pics;
    }
    else {
      pics.push(card2);
      document.querySelector('#test4').innerHTML = 'pics array: ' + pics;
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      else {
        setTimeout(function(){
          let x =
            '<img id="card2_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c2').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }

      count = 0;
      pics = [];
    }
  }
  //card 3 funcitonality
  function card3_click(){
    count ++;
    let x =
      '<img id="card3_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card3 + '>';
    document.querySelector('#c3').innerHTML = x;

    //checking if catd is the 1st or 2nd card turned?
    if(count === 1){
      pics.push(card3);
      card_id = '#c3';
      document.querySelector('#test4').innerHTML = '1st card_id: ' + card_id;
    }
    else {
      pics.push(card3);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card2_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c3').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }
      //reset
      count = 0;
      pics = [];
    }
  }
  //card 4 funciton
  function card4_click(){
    count ++;
    let x =
      '<img id="card4_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card4 + '>';
    document.querySelector('#c4').innerHTML = x;

    if(count === 1){
      pics.push(card4);
      card_id = '#c4';
      document.querySelector('#test4').innerHTML = '1st card_id: ' + card_id;
    }
    else {
      pics.push(card4);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card4_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c4').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }

      count = 0;
      pics = [];
    }
  }
  //card 5 funcitonality
  function card5_click(){
    count ++;
    let x =
      '<img id="card5_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card5 + '>';
    document.querySelector('#c5').innerHTML = x;

    //checking if catd is the 1st or 2nd card turned?
    if(count === 1){
      pics.push(card5);
      card_id = '#c5';
      document.querySelector('#test4').innerHTML = '1st card_id: ' + card_id;
    }
    else {
      pics.push(card5);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card5_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c5').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }
      //reset
      count = 0;
      pics = [];
    }
  }
  //card 6 funciton
  function card6_click(){
    count ++;
    let x =
      '<img id="card6_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card6 + '>';
    document.querySelector('#c6').innerHTML = x;

    if(count === 1){
      pics.push(card6);
      card_id = '#c6';
      document.querySelector('#test4').innerHTML = '1st card_id: ' + card_id;
    }
    else {
      pics.push(card6);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card6_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c6').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }

      count = 0;
      pics = [];
    }
  }
  //card 7 funcitonality
  function card7_click(){
    count ++;
    let x =
      '<img id="card7_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card7 + '>';
    document.querySelector('#c7').innerHTML = x;

    //checking if catd is the 1st or 2nd card turned?
    if(count === 1){
      pics.push(card7);
      card_id = '#c7';
      document.querySelector('#test4').innerHTML = '1st card_id: ' + card_id;
    }
    else {
      pics.push(card7);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card7_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c7').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }
      //reset
      count = 0;
      pics = [];
    }
  }
  //card 8 funciton
  function card8_click(){
    count ++;
    let x =
      '<img id="card8_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card8 + '>';
    document.querySelector('#c8').innerHTML = x;

    if(count === 1){
      pics.push(card8);
      card_id = '#c8';
      document.querySelector('#test4').innerHTML = '1st card_id: ' + card_id;
    }
    else {
      pics.push(card8);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card8_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c8').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }

      count = 0;
      pics = [];
    }
  }
  //card 9 funciton
  function card9_click(){
    count ++;
    let x =
      '<img id="card9_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card9 + '>';
    document.querySelector('#c9').innerHTML = x;

    if(count === 1){
      pics.push(card9);
      card_id = '#c9';
    }
    else {
      pics.push(card9);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card4_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c9').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }

      count = 0;
      pics = [];
    }
  }
  //card 10 funcitonality
  function card10_click(){
    count ++;
    let x =
      '<img id="card10_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card10 + '>';
    document.querySelector('#c10').innerHTML = x;

    //checking if catd is the 1st or 2nd card turned?
    if(count === 1){
      pics.push(card10);
      card_id = '#c10';
      document.querySelector('#test4').innerHTML = '1st card_id: ' + card_id;
    }
    else {
      pics.push(card10);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card10_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c10').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }
      //reset
      count = 0;
      pics = [];
    }
  }
  //card 11 funciton
  function card11_click(){
    count ++;
    let x =
      '<img id="card11_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card11 + '>';
    document.querySelector('#c11').innerHTML = x;

    if(count === 1){
      pics.push(card11);
      card_id = '#c11';
    }
    else {
      pics.push(card11);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card11_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c11').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }

      count = 0;
      pics = [];
    }
  }
  //card 12 funcitonality
  function card12_click(){
    count ++;
    let x =
      '<img id="card12_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src=' + card12 + '>';
    document.querySelector('#c12').innerHTML = x;

    //checking if catd is the 1st or 2nd card turned?
    if(count === 1){
      pics.push(card12);
      card_id = '#c12';
    }
    else {
      pics.push(card12);
      if(pics[0] === pics[1]){
        document.querySelector('#test4').innerHTML = 'A Match!!';
        matched++;
        if(matched === 6){
          alert("Great Job! Regenerating new game board!");
          create_game();
        }
      }
      if(pics[0] != pics[1]){
        setTimeout(function(){
          let x =
            '<img id="card12_face" class="card_back w3-center" style="height: 100px; width:auto; margin:25px 0px; " src="img/card_back.png">';
          document.querySelector('#c12').innerHTML = x;
          document.querySelector(card_id).innerHTML = x;
        },timing);
      }
      //reset
      count = 0;
      pics = [];
    }
  }



  //test for a match
  function matching(){
    if(pics.length === 2){
      if(pics[0] === pics[1]){
        document.querySelector('#test3').innerHTML = 'A Match!!';
      }
      else{
        setTimeout(function(){
          let c1 = document.getElementById('pics_ids[0]');
          c1.setAttribute('src',"img/card_back.png");
          let c2 = document.getElementById('pics_ids[1]');
          c2.setAttribute('src',"img/card_back.png");
        },2000);
      }
    }
  }
