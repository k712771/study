const appendDatas = function() {
	// DOM으로 변경해주는 함수
	function make_dom( datas ) {
		let 
			ul = document.createElement("ul")
		,	li = document.createElement("li")
		,	div = document.createElement("div")
		;

		ul.classList.add("data-list");	//	css를 위한 class추가
		
		// 받은 데이터는 최상위가 배열로 되어있기 때문에 반복문을 돌림
		datas.forEach( data => {
			let new_li = li.cloneNode( true );	// li를 계속 넣기 위해 복사
			// data는 object형태로 들어가기 때문에 for in문으로 데이터 별로 돌려서 DOM Element에 추가
			for( const property in data ) {
				/**
				 * @property : object property명
				 * @data : object 한개의 데이터
				 */
				let new_div = div.cloneNode( true );	//	데이터를 넣기 위한 div를 복사
				new_div.innerHTML = `<span class="label">${ property }</span>:<span class="text">${ data[property] }</span>`;	// 복사한 div에 데이터를 넣음
				new_li.appendChild( new_div );	// 복사인 li에 div를 넣음
			}
			// 각 object의 속성별로 li에 넣는 것 완료

			ul.appendChild( new_li );	// 완료된 li를 ul에 추가
		});

		document.querySelector(".wrap").appendChild( ul );	// 완성된 ul DOM Element를 .wrap에 넣음
	}

	// json데이터를 fetch로 받는 함수
	function get_json_data() {
		fetch("/json/data.json")	// json폴더에서 data.json을 읽음
		.then( response => response.json() )	// 읽어온 json데이터를 javascript에서 인식할 수 있는 Object로 변경
		.then( data => {	//	변경한 Object를 data 변수에 담음
			make_dom( data );	// data를 dom형태로 변경
		});
	}

	function init() {
		get_json_data();
	}

	( _ => {
		init();
	})();
}

new appendDatas;