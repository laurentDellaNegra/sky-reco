import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection'
import { useCallback, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { calculateEAR, LEFT_EYE, RIGHT_EYE } from '@/lib/ear'
import { Card } from './ui/card'

export function WebcamCard() {
  const detector = useRef<faceLandmarksDetection.FaceLandmarksDetector | null>(
    null
  )
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null)
  const [eyesClosed, setEyesClosed] = useState<boolean | null>(null)
  const webcamRef = useRef<Webcam | null>(null)
  const [isDetecting, setIsDetecting] = useState(false)
  const [isFace, setIsFace] = useState(false)

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

    if (webcamRef.current?.video?.readyState !== 4 || !detector.current) {
      setIsDetecting(false)
      return
    }

    setIsDetecting(true)
    const video = webcamRef.current.video

    const faces = await detector.current.estimateFaces(video)
    // console.log(faces)
    if (!faces || faces.length === 0) {
      setIsFace(false)
      return
    }
    setIsFace(true)

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

  const startDetecting = useCallback(() => {
    intervalId.current = setInterval(() => {
      detect()
    }, 100)
  }, [detect])

  const stopDetecting = useCallback(() => {
    if (intervalId.current) clearInterval(intervalId.current)
  }, [])

  useEffect(() => {
    startDetecting()
    return () => {
      stopDetecting()
    }
  }, [startDetecting, stopDetecting])

  // const handleRetryPermission = async () => {
  //   await navigator.permissions.query({ name: 'camera' as PermissionName })
  //   window.location.reload()
  // }

  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-6">
      <Card className="w-full py-0 relative">
        {/* {!isDetecting && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <AlertCircleIcon className="w-12 h-12 mb-2 text-red-400" />
            <h3 className="text-xl font-bold">Camera Access Required</h3>
            <p className="mt-2 max-w-md">
              {permissionError ||
                'Please allow access to your camera to use the eye detection feature.'}
            </p>

            <div className="mt-6 space-y-4">
              <div className="bg-black/40 p-4 rounded-lg max-w-md text-sm">
                <h4 className="font-bold mb-2">How to enable camera access:</h4>
                <ol className="list-decimal list-inside space-y-2 text-left">
                  <li>Click the camera icon in your browser's address bar</li>
                  <li>Select "Allow" for camera access</li>
                  <li>Refresh the page or click the retry button below</li>
                </ol>
              </div>

              <Button onClick={handleRetryPermission} className="mt-4">
                <RefreshCwIcon className="w-4 h-4 mr-2" />
                Retry Camera Access
              </Button>
            </div>
          </div>
        )} */}
        <Webcam
          ref={webcamRef}
          width={'100%'}
          height={'auto'}
          className="rounded-lg"
        />
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
