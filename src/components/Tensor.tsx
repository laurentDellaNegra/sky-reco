import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection'
import { useCallback, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { calculateEAR, LEFT_EYE, RIGHT_EYE } from '@/lib/ear'

export default function Tensor() {
  const detector = useRef<faceLandmarksDetection.FaceLandmarksDetector | null>(
    null
  )
  const [eyesClosed, setEyesClosed] = useState<boolean | null>(null)

  const webcamRef = useRef<Webcam | null>(null)

  const loadModel = () => {
    return faceLandmarksDetection.createDetector(
      faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
      {
        runtime: 'mediapipe', // or 'tfjs'
        solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
        refineLandmarks: true,
      }
    )
  }

  const detect = useCallback(async () => {
    if (!detector.current) detector.current = await loadModel()

    if (webcamRef.current?.video?.readyState !== 4 || !detector.current) return

    const video = webcamRef.current.video

    const faces = await detector.current.estimateFaces(video)
    console.log(faces)
    if (!faces) return
    console.log(faces)

    console.log(
      faces[0].keypoints
        .filter((k) => k.name?.toLowerCase().includes('eye'))
        .map((k) => k)
    )

    const keypoints = faces[0].keypoints.map(
      (k) => [k.x, k.y] as [number, number]
    )
    const leftEAR = calculateEAR(LEFT_EYE, keypoints)
    const rightEAR = calculateEAR(RIGHT_EYE, keypoints)

    // Typical threshold for eye closure is 0.2
    if (leftEAR < 0.2 && rightEAR < 0.2) {
      setEyesClosed(true)
    } else {
      setEyesClosed(false)
    }
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      detect()
    }, 100)
    return () => clearInterval(id)
  }, [detect])

  return (
    <>
      <Webcam ref={webcamRef} />
      {eyesClosed !== null && <>Eyes closed: {eyesClosed ? 'YES' : 'NO'}</>}
    </>
  )
}
