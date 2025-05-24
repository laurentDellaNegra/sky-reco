import { useRef, useState } from 'react'
import * as speechCommands from '@tensorflow-models/speech-commands'
import '@tensorflow/tfjs-backend-webgl'
import * as tf from '@tensorflow/tfjs'
import { Button } from '@/components/ui/button'
import warningWords from '../../assets/colors.bin?arraybuffer'

tf.setBackend('webgl').then(() => {
  console.log('Backend set to WebGL')
})

export function VoiceCard() {
  const targetWord = 'yes'
  const [wordCount, setWordCount] = useState<number>(0)
  const baseRecognizer = useRef<speechCommands.SpeechCommandRecognizer>(null)
  const recognizer =
    useRef<speechCommands.TransferSpeechCommandRecognizer>(null)

  const load = async () => {
    baseRecognizer.current = speechCommands.create('BROWSER_FFT')
    await baseRecognizer.current.ensureModelLoaded()
  }

  const listen = async () => {
    if (!baseRecognizer.current) return

    recognizer.current = baseRecognizer.current.createTransfer('warning-words')
    console.log({ warningWords })
    // recognizer.current.loadExamples(warningWords)
    recognizer.current.load()

    await recognizer.current.listen(
      async (result) => {
        if (!recognizer.current) return
        // - result.scores contains the probability scores that correspond to
        //   recognizer.wordLabels().
        // - result.spectrogram contains the spectrogram of the recognized word.

        console.log(result.scores)
        //   console.log(recognizer.wordLabels())
        //   console.log(result.spectrogram)

        const words = recognizer.current.wordLabels()
        console.log({ words })
        // console.log(result.scores[18])
        // const indexTargetWord = 18
        // const closestIndex = findClosestIndexToOne(
        //   result.scores as Array<number>
        // )
        // console.log({ closestIndex })
        // // const highestScoreIndex = result.scores.indexOf(
        // //   Math.max(...result.scores)
        // // )
        // // console.log([highestScoreIndex])
        // // const detectedWord = words[highestScoreIndex]
        // if (indexTargetWord === closestIndex) {
        //   setWordCount((prevCount) => prevCount + 1)
        // }
      },
      {
        includeSpectrogram: false,
        probabilityThreshold: 0.75, // Confidence threshold
      }
    )
  }

  const stop = () => {
    recognizer.current?.stopListening()
  }

  const train = async () => {
    if (!recognizer.current) return
    const transferRecognizer = recognizer.current.createTransfer('warnings')
    console.log({ transferRecognizer })
    if (!transferRecognizer) return

    await transferRecognizer.collectExample('repeat')
    await transferRecognizer.collectExample('standby')
    await transferRecognizer.collectExample('repeat')
    await transferRecognizer.collectExample('standby')
    await transferRecognizer.collectExample('standby')
    await transferRecognizer.collectExample('repeat')
    await transferRecognizer.collectExample('repeat')
    await transferRecognizer.collectExample('_background_noise_')
    await transferRecognizer.collectExample('repeat')
    await transferRecognizer.collectExample('standby')
    await transferRecognizer.collectExample('_background_noise_')
    await transferRecognizer.collectExample('_background_noise_')
    await transferRecognizer.collectExample('standby')
    await transferRecognizer.collectExample('repeat')
    await transferRecognizer.collectExample('_background_noise_')
    await transferRecognizer.collectExample('standby', {})
    await transferRecognizer.collectExample('_background_noise_')
    await transferRecognizer.collectExample('repeat')
    await transferRecognizer.collectExample('stop')
    console.log(transferRecognizer.countExamples())
    await transferRecognizer.train({
      epochs: 25,
      callback: {
        onEpochEnd: async (epoch: number, logs?: tf.Logs) => {
          console.log(
            `Epoch ${epoch}: loss=${logs?.loss}, accuracy=${logs?.acc}`
          )
        },
      },
    })
    const serialized = transferRecognizer.serializeExamples()
    const data = serialized
    const blob = new Blob([data], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'warning-words.txt'
    document.body.appendChild(a)
    a.click()

    // Clean up
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    console.log('File downloaded successfully!')
  }
  return (
    <div>
      <Button onClick={load}>Load</Button>
      <Button onClick={listen}>Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={train}>Learn</Button>
      <h1>Speech Command Counter</h1>
      <p>Target Word: {targetWord}</p>
      <p>Word Count: {wordCount}</p>
    </div>
  )
}

function findClosestIndexToOne(numbers: number[]): number | null {
  if (numbers.length === 0) {
    return null // Return null if the array is empty
  }

  let closest = numbers[0] // Initialize with the first number in the array
  let smallestDifference = Math.abs(closest - 1)

  let i = 0
  for (let index = 0; index < numbers.length; index++) {
    const num = numbers[index]

    const difference = Math.abs(num - 1)

    if (difference < smallestDifference) {
      closest = num
      i = index
      smallestDifference = difference
    }
  }

  return i
}
