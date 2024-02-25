
$(function () {
// ゆっくりページ移動
	$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
		var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
		var pos = $(elmHash).offset().top-70;//idの上部の距離からHeaderの高さを引いた値を取得
		$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
		return false;
	});

	// モーダルウィンドウ
	//モーダル表示
	$(".modal-open").modaal({
		overlay_close:true,//モーダル背景クリック時に閉じるか
		before_open:function(){// モーダルが開く前に行う動作
			$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
		},
		after_close:function(){// モーダルが閉じた後に行う動作
			$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
		}
	});
});