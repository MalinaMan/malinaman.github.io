
 export function superExample()
 {
 	let Ukraine = {
 		live() {
 			return "I live in Ukraine";
 		}
 	};

 	let Kyiv = {
 		live() {
 			return super.live() + ", in Kyiv !";
 		}
 	};

 	Object.setPrototypeOf(Kyiv, Ukraine);
 	return Kyiv.live();
 }
