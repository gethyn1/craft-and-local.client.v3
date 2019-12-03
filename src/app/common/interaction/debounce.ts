// https://davidwalsh.name/javascript-debounce-function
function debounce (fn: Function, wait: number, immediate?: boolean) {
	let timeout: number

  return function (): void {
    const context = this
    const args = arguments
		const later = function() {
			timeout = null
			if (!immediate) {
        fn.apply(context, args)
      }
		}
		const callNow = immediate && !timeout
		clearTimeout(timeout)
    timeout = setTimeout(later, wait)

		if (callNow) {
      fn.apply(context, args)
    }
	}
}

export {
  debounce
}
