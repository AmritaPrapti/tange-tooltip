// /** Default config */
// const rangeSlider_min = 
// 	  0;
// const rangeSlider_max = 100;

// document.querySelector("#RangeSlider .range-slider-val-left").style.width = `${
// 	rangeSlider_min + (100 - rangeSlider_max)
// }%`;
// document.querySelector("#RangeSlider .range-slider-val-right").style.width = `${
// 	rangeSlider_min + (100 - rangeSlider_max)
// }%`;

// document.querySelector(
// 	"#RangeSlider .range-slider-val-range"
// ).style.left = `${rangeSlider_min}%`;
// document.querySelector("#RangeSlider .range-slider-val-range").style.right = `${
// 	100 - rangeSlider_max
// }%`;

// document.querySelector(
// 	"#RangeSlider .range-slider-handle-left"
// ).style.left = `${rangeSlider_min}%`;
// document.querySelector(
// 	"#RangeSlider .range-slider-handle-right"
// ).style.left = `${rangeSlider_max}%`;

// document.querySelector(
// 	"#RangeSlider .range-slider-tooltip-left"
// ).style.left = `${rangeSlider_min}%`;
// document.querySelector(
// 	"#RangeSlider .range-slider-tooltip-right"
// ).style.left = `${rangeSlider_max}%`;

// document.querySelector(
// 	"#RangeSlider .range-slider-tooltip-left .range-slider-tooltip-text"
// ).innerText = rangeSlider_min;
// document.querySelector(
// 	"#RangeSlider .range-slider-tooltip-right .range-slider-tooltip-text"
// ).innerText = rangeSlider_max;

// document.querySelector(
// 	"#RangeSlider .range-slider-input-left"
// ).value = rangeSlider_min;
// document
// 	.querySelector("#RangeSlider .range-slider-input-left")
// 	.addEventListener("input", (e) => {
// 		e.target.value = Math.min(
// 			e.target.value,
// 			e.target.parentNode.childNodes[5].value - 1
// 		);
// 		var value =
// 			(100 / (parseInt(e.target.max) - parseInt(e.target.min))) *
// 				parseInt(e.target.value) -
// 			(100 / (parseInt(e.target.max) - parseInt(e.target.min))) *
// 				parseInt(e.target.min);

// 		var children = e.target.parentNode.childNodes[1].childNodes;
// 		children[1].style.width = `${value}%`;
// 		children[5].style.left = `${value}%`;
// 		children[7].style.left = `${value}%`;
// 		children[11].style.left = `${value}%`;

// 		children[11].childNodes[1].innerHTML = e.target.value;
// 	});

// document.querySelector(
// 	"#RangeSlider .range-slider-input-right"
// ).value = rangeSlider_max;
// document
// 	.querySelector("#RangeSlider .range-slider-input-right")
// 	.addEventListener("input", (e) => {
// 		e.target.value = Math.max(
// 			e.target.value,
// 			e.target.parentNode.childNodes[3].value - -1
// 		);
// 		var value =
// 			(100 / (parseInt(e.target.max) - parseInt(e.target.min))) *
// 				parseInt(e.target.value) -
// 			(100 / (parseInt(e.target.max) - parseInt(e.target.min))) *
// 				parseInt(e.target.min);

// 		var children = e.target.parentNode.childNodes[1].childNodes;
// 		children[3].style.width = `${100 - value}%`;
// 		children[5].style.right = `${100 - value}%`;
// 		children[9].style.left = `${value}%`;
// 		children[13].style.left = `${value}%`;

// 		children[13].childNodes[1].innerHTML = e.target.value;
// 	});


    class PriceRange extends HTMLElement {
        constructor() {
          super();
            this.rangeSlider_min = this.querySelector('.range-slider-input-left').value ;
            this.rangeSlider_max = this.querySelector('.range-slider-input-right').value;
            this.customDesign();
            this.querySelector('.range-slider-input-left').addEventListener('input change', this.onRangeLeftinput.bind(this));
            // this.querySelector('.range-slider-input-left').addEventListener('change', this.onRangeLeftChange.bind(this));
            this.querySelector('.range-slider-input-right').addEventListener('input change', this.onRangeRightinput.bind(this));
            // this.querySelector('.range-slider-input-right').addEventListener('change', this.onRangeRightChange.bind(this));

          console.log('this :>> ', this.rangeSlider_min , this.rangeSlider_max);
        }

        customDesign() {
            
            let totalWidth = this.querySelector('.range-slider-input-right').value - this.querySelector('.range-slider-input-left').value;
            
            document.querySelector("#RangeSlider .range-slider-val-left").style.width = `${this.rangeSlider_min + (totalWidth - this.rangeSlider_max)}%`;
            document.querySelector("#RangeSlider .range-slider-val-right").style.width = `${this.rangeSlider_min + (totalWidth - this.rangeSlider_max)}%`;
            document.querySelector("#RangeSlider .range-slider-val-range").style.left = `${this.rangeSlider_min}%`;
            document.querySelector("#RangeSlider .range-slider-val-range").style.right = `${totalWidth - this.rangeSlider_max}%`;

            document.querySelector("#RangeSlider .range-slider-handle-left").style.left = `${this.rangeSlider_min}%`;
            document.querySelector("#RangeSlider .range-slider-handle-right").style.left = `${this.rangeSlider_max - (this.rangeSlider_max - 100)}%`;

            document.querySelector("#RangeSlider .range-slider-tooltip-left").style.left = `${this.rangeSlider_min}%`;
            document.querySelector("#RangeSlider .range-slider-tooltip-right").style.left = `${this.rangeSlider_max - (this.rangeSlider_max - 100)}%`;

            document.querySelector("#RangeSlider .range-slider-tooltip-left .range-slider-tooltip-text").innerText = this.rangeSlider_min;
            document.querySelector("#RangeSlider .range-slider-tooltip-right .range-slider-tooltip-text").innerText = this.rangeSlider_max;



            document
	            .querySelector("#RangeSlider .range-slider-input-left")
	            .addEventListener("change", (e) => {
                e.target.value = Math.min(
                    e.target.value,
                    e.target.parentNode.childNodes[5].value - 1
                );
            var value =
                (totalWidth / (parseInt(e.target.max) - parseInt(e.target.min))) *
                    parseInt(e.target.value) -
                (totalWidth / (parseInt(e.target.max) - parseInt(e.target.min))) *
                    parseInt(e.target.min);

            var children = e.target.parentNode.childNodes[1].childNodes;
            children[1].style.width = `${value}%`;
            children[5].style.left = `${value}%`;
            children[7].style.left = `${value}%`;
            children[11].style.left = `${value}%`;

            children[11].childNodes[1].innerHTML = e.target.value;
	        });
        }
        onRangeLeftChange(e) {
            this.rangeSlider_min = Number(e.target.value);

        }

        onRangeLeftinput(e) {
            this.rangeSlider_min = Number(e.target.value);
            let totalWidth = this.querySelector('.range-slider-input-right').value - this.querySelector('.range-slider-input-left').value;
            console.log('this. :>> ', this.rangeSlider_min);
            e.target.value = Math.min(
                e.target.value,
                e.target.parentNode.childNodes[5].value - 1
            );
            console.log('e.target.value :>> ', e.target.value);
            let value =
			(totalWidth / (parseInt(e.target.max) - parseInt(e.target.min))) *
				parseInt(e.target.value) -
			(totalWidth / (parseInt(e.target.max) - parseInt(e.target.min))) *
				parseInt(e.target.min);

            console.log('value :>> ', value);
            let children = e.target.parentNode.childNodes[1].childNodes;
            children[1].style.width = `${value}%`;
            children[5].style.left = `${value}%`;
            children[7].style.left = `${value}%`;
            children[11].style.left = `${value}%`;
    
            children[11].childNodes[1].innerHTML = e.target.value;

        }

        onRangeRightChange(e) {
            this.rangeSlider_max = Number(e.target.value);
        }

        onRangeRightinput(e) {
            this.rangeSlider_max = Number(e.target.value);
            let totalWidth = this.querySelector('.range-slider-input-right').value - this.querySelector('.range-slider-input-left').value;
            console.log('this. :>> ', this.rangeSlider_max);
            e.target.value = Math.max(
                e.target.value,
                e.target.parentNode.childNodes[3].value - -1
            );
            console.log('e.target.value :>> ', e.target.value);
            let value = (totalWidth / (parseInt(e.target.max) - parseInt(e.target.min))) *
                parseInt(e.target.value) -
            (totalWidth / (parseInt(e.target.max) - parseInt(e.target.min))) *
                parseInt(e.target.min) - (totalWidth - 100);
            console.log('value :>> ', value);
            let children = e.target.parentNode.childNodes[1].childNodes;
            children[3].style.width = `${100 - value}%`;
            children[5].style.right = `${100 - value}%`;
            children[9].style.left = `${value}%`;
            children[13].style.left = `${value}%`;
    
            children[13].childNodes[1].innerHTML = e.target.value;
        }
    }
    customElements.define('price-range', PriceRange);
