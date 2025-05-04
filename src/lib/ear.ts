// https://www.researchgate.net/figure/The-examples-of-open-eyes-and-closed-eyes-with-facial-landmarks-P1-P6-Full-size-DOI_fig1_360021129

/**
 * Calculate Eye Aspect Ratio (EAR)
 */

export const LEFT_EYE = [33, 160, 158, 133, 153, 144]
export const RIGHT_EYE = [362, 385, 387, 263, 373, 380]

function euclideanDist(a: [number, number], b: [number, number]) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)
}

export function calculateEAR(
  eye: Array<number>,
  landmarks: Array<[number, number]>
) {
  // eye: array of indices
  // landmarks: array of [x, y, z]
  const p1 = landmarks[eye[0]]
  const p2 = landmarks[eye[1]]
  const p3 = landmarks[eye[2]]
  const p4 = landmarks[eye[3]]
  const p5 = landmarks[eye[4]]
  const p6 = landmarks[eye[5]]
  const vertical1 = euclideanDist(p2, p6)
  const vertical2 = euclideanDist(p3, p5)
  const horizontal = euclideanDist(p1, p4)

  // console.log({ vertical1 })
  // console.log({ vertical2 })
  // console.log({ horizontal })

  // console.log({ p1 })
  // console.log({ p2 })
  // console.log({ p3 })
  // console.log({ p4 })
  // console.log({ p5 })
  // console.log({ p6 })
  // console.log(
  //   '(vertical1 + vertical2) / (2.0 * horizontal)',
  //   (vertical1 + vertical2) / (2.0 * horizontal)
  // )

  return (vertical1 + vertical2) / (2.0 * horizontal)
}
