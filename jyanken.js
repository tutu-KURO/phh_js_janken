window.addEventListener('load',function(){
    let playerHand;
    let rock =document.getElementById('rock');
    let scissor =document.getElementById('scissor');
    let paper = document.getElementById('paper');
    let robot_HandField=document.getElementById('robot_Hand');
    let result = document.getElementById('result');

    function jyanken(hand){
        //1,robotHandの手を決める。乱数を使おう！
        //2,勝敗判定の処理を書いてみよう、別に関数にしたほうがいいかも
        //3,勝敗判定とロボットの手をHTMLに書き込みましょう。
        let hands =['rock','scissor','paper'];
        robot_Hand = hands[Math.floor(Math.random() * hands.length)];
        robot_HandField.innerHTML='相手の手は' +robot_Hand + 'です'
        result.innerHTML = judge(hand,robot_Hand) + 'です'
        // judge(hand,robot_Hand);

    }

    function judge(myHand,robot_Hand) {
        if(myHand===robot_Hand){
            return 'draw';
        }
        if(myHand==='rock' && robot_Hand==='scissor'){
            return 'WIN!';
        }
        if(myHand==='rock' && robot_Hand==='paper'){
            return 'lose...';
        }
        if(myHand==='paper' && robot_Hand==='rock'){
            return 'WIN!';
        }
        if(myHand==='paper' && robot_Hand==='scissor'){
            return 'lose...';
        }
        if(myHand==='scissor' && robot_Hand==='paper'){
            return 'WIN!';
        }
        if(myHand==='scissor' && robot_Hand==='rock'){
            return 'lose...';
        }
        
    }


        // function judge(myHand,robot_Hand) {
        // if(myHand===robot_Hand){
        //     return 'draw';
        // }else if(
        //     (myHand ==='rock' && robot_Hand === 'scissor')||
        //     (myHand ==='scissor' && robot_Hand === 'paper')||
        //     (myHand ==='paper' && robot_Hand === 'rock')){
        //         return 'WIN!'
        // }else{
        //     return 'lose...'
        // }
        // }

    //    function judge(a, b) {
	//    var c = (a - b + 3) % 3;
	//    if (c == 0) {
	// 	  return "DRAW";
	//    } else if (c == 2) {
	// 	  return "WIN";
	//    } else {
	// 	return "LOSE";
	//    }
    //    }   
    
    
    
    rock.addEventListener('click',function(){
        jyanken('rock');
    });
    
    scissor.addEventListener('click',function(){
        jyanken('scissor');
    });

    paper.addEventListener('click',function(){
        jyanken('paper');
    });
    
});

