import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection'
import { useCallback, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { calculateEAR, LEFT_EYE, RIGHT_EYE } from '@/lib/ear'
import { Card } from './ui/card'
import { drawResults } from '@/lib/draw-canvas'

export function WebcamCard() {
  const detector = useRef<faceLandmarksDetection.FaceLandmarksDetector>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [eyesClosed, setEyesClosed] = useState<boolean | null>(null)
  const webcamRef = useRef<Webcam>(null)
  const [isDetecting, setIsDetecting] = useState(false)
  const [isFace, setIsFace] = useState(false)
  const requestRef = useRef<number>(null)

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
    if (!detector.current) {
      detector.current = await loadModel()
    }

    if (
      webcamRef.current?.video?.readyState !== 4 ||
      !detector.current ||
      !canvasRef.current
    ) {
      setIsDetecting(false)
      requestRef.current = requestAnimationFrame(detect)
      return
    }

    setIsDetecting(true)
    const video = webcamRef.current.video

    const faces = await detector.current.estimateFaces(video)
    // console.log(faces)
    if (!faces || faces.length === 0) {
      setIsFace(false)
      requestRef.current = requestAnimationFrame(detect)
      return
    }
    const face = faces[0]
    setIsFace(true)

    // Get video dimensions
    const videoWidth = webcamRef.current.video.videoWidth
    const videoHeight = webcamRef.current.video.videoHeight

    // Set canvas dimensions to match video
    canvasRef.current.width = videoWidth
    canvasRef.current.height = videoHeight

    // Clear canvas
    if (!canvasRef.current) return
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return
    drawResults(ctx, face, false, false)

    const keypoints = face.keypoints.map((k) => [k.x, k.y] as [number, number])
    const leftEAR = calculateEAR(LEFT_EYE, keypoints)
    const rightEAR = calculateEAR(RIGHT_EYE, keypoints)

    // Typical threshold for eye closure is 0.2
    if (leftEAR < 0.2 && rightEAR < 0.2) {
      setEyesClosed(true)
    } else {
      setEyesClosed(false)
    }
    requestRef.current = requestAnimationFrame(detect)
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(detect)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [detect])

  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-6">
      <Card className="w-full py-0 relative">
        <Webcam
          ref={webcamRef}
          width={'100%'}
          height={'auto'}
          className="rounded-lg"
        />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <div className="text-sm text-muted-foreground">Status</div>
          <div className="font-medium">
            {isDetecting ? (
              <span className="flex items-center text-green-600">
                <span className="relative flex size-3 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-green-700"></span>
                </span>
                Active
              </span>
            ) : (
              <span className="text-gray-500">Inactive</span>
            )}
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <div className="text-sm text-muted-foreground">Eyes state</div>
          <div className="font-medium">
            {!isDetecting || !isFace ? (
              <span className="text-gray-500">Not detecting</span>
            ) : eyesClosed ? (
              <span className="text-red-600">Closed</span>
            ) : (
              <span className="text-green-600">Open</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
