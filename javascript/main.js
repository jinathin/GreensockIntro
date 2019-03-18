(() => {
	console.log('fired')

	const targetBox = document.querySelector('.box');


	function runAnimation() {
		TweenMax.to(targetBox. 0.8, {
			x: 450,
			roation: 180,
			scaleX: 1.5,
			scaleY: 1.5
		});
	}

	function runAnimation() {
		TweenMax.to(targetBox. 0.8, {
			x: 450,
			roation: 0,
			scaleX: 1,
			scaleY: 1
		});
	}

	targetBox.addEventListener("mouseover", runAnimation);
	targetBox.addEventListener("mouseout", resetAnimation);


})();