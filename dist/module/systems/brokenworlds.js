const fraction = function (token) {
	const wounds = token.actor.data.data.attributes.wounds
	return Math.min(wounds.value / wounds.max, 1)
}

export {fraction}
