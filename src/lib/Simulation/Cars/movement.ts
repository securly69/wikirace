import { accelerate } from '../Physics/acceleration'

export const applyForce = (box: HitBox) => (actions: CarActions) => accelerate(actions)(box)

export const worldWrap = (size: Size) => (box: HitBox) => {
	box.x = box.x < 0 ? size.width : box.x > size.width ? 0 : box.x
	box.y = box.y < 0 ? size.height : box.y > size.height ? 0 : box.y
	return box
}
