'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Mic,
  MicOff,
  Play,
  Square,
  Upload,
  Save,
  Plus,
  X,
  Trash2,
} from 'lucide-react'

interface Word {
  id: string
  name: string
  recordings: number
  maxRecordings: number
}

interface SavedModel {
  id: string
  name: string
  baseModel: string
  words: string[]
  createdAt: string
}

interface BaseModel {
  id: string
  name: string
  isLoaded: boolean
}

export function SpeechCommandInterface() {
  const [activeTab, setActiveTab] = useState('create-model')

  // Saved Models State
  const [savedModels, setSavedModels] = useState<SavedModel[]>([
    {
      id: 'model-1',
      name: 'Home Automation',
      baseModel: 'model-2025-05-11T15:39.45',
      words: ['lights', 'on', 'off', 'bedroom', 'kitchen'],
      createdAt: '2025-05-20',
    },
    {
      id: 'model-2',
      name: 'Navigation Commands',
      baseModel: 'model-basic',
      words: ['left', 'right', 'forward', 'back', 'stop'],
      createdAt: '2025-05-18',
    },
  ])

  // Live recording state for each model
  const [modelRecordingStates, setModelRecordingStates] = useState<
    Record<
      string,
      {
        isRecording: boolean
        detectedWords: Record<string, number>
      }
    >
  >({})

  // Model Creation State
  const [baseModel, setBaseModel] = useState<BaseModel | null>(null)
  const [customWords, setCustomWords] = useState<Word[]>([])
  const [newWord, setNewWord] = useState('')
  const [duration, setDuration] = useState('x1')
  const [isRecording, setIsRecording] = useState(false)
  const [currentRecordingWord, setCurrentRecordingWord] = useState<
    string | null
  >(null)
  const [isTransferring, setIsTransferring] = useState(false)
  const [transferProgress, setTransferProgress] = useState(0)
  const [newModelName, setNewModelName] = useState('')
  const [audioLevel, setAudioLevel] = useState(0)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const detectionIntervalsRef = useRef<Record<string, NodeJS.Timeout>>({})

  // Sample base models
  const availableBaseModels = [
    {
      id: 'model-2025-05-11T15:39.45',
      name: 'model-2025-05-11T15:39.45',
      isLoaded: false,
    },
    { id: 'model-basic', name: 'Basic Speech Model', isLoaded: false },
    { id: 'model-advanced', name: 'Advanced Speech Model', isLoaded: false },
  ]

  // Initialize recording state for a model if it doesn't exist
  const initializeModelState = (modelId: string, words: string[]) => {
    if (!modelRecordingStates[modelId]) {
      const initialCounts: Record<string, number> = {}
      words.forEach((word) => {
        initialCounts[word] = 0
      })

      setModelRecordingStates((prev) => ({
        ...prev,
        [modelId]: {
          isRecording: false,
          detectedWords: initialCounts,
        },
      }))
    }
  }

  // Model Tab Functions
  const deleteModel = (modelId: string) => {
    // Stop recording if active
    if (modelRecordingStates[modelId]?.isRecording) {
      stopLiveRecording(modelId)
    }

    // Remove model
    setSavedModels((prev) => prev.filter((m) => m.id !== modelId))

    // Clean up state
    setModelRecordingStates((prev) => {
      const newState = { ...prev }
      delete newState[modelId]
      return newState
    })

    // Switch to create model tab if current tab is deleted
    if (activeTab === modelId) {
      setActiveTab('create-model')
    }
  }

  const startLiveRecording = async (modelId: string) => {
    const model = savedModels.find((m) => m.id === modelId)
    if (!model) return

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      // Update recording state
      setModelRecordingStates((prev) => ({
        ...prev,
        [modelId]: {
          ...prev[modelId],
          isRecording: true,
        },
      }))

      // Simulate word detection
      const detectionInterval = setInterval(() => {
        if (model.words.length > 0) {
          const randomWord =
            model.words[Math.floor(Math.random() * model.words.length)]
          if (Math.random() > 0.7) {
            // 30% chance of detection
            setModelRecordingStates((prev) => ({
              ...prev,
              [modelId]: {
                ...prev[modelId],
                detectedWords: {
                  ...prev[modelId].detectedWords,
                  [randomWord]:
                    (prev[modelId].detectedWords[randomWord] || 0) + 1,
                },
              },
            }))
          }
        }
      }, 2000)

      detectionIntervalsRef.current[modelId] = detectionInterval
    } catch (error) {
      console.error('Error starting live recording:', error)
    }
  }

  const stopLiveRecording = (modelId: string) => {
    setModelRecordingStates((prev) => ({
      ...prev,
      [modelId]: {
        ...prev[modelId],
        isRecording: false,
      },
    }))

    if (detectionIntervalsRef.current[modelId]) {
      clearInterval(detectionIntervalsRef.current[modelId])
      delete detectionIntervalsRef.current[modelId]
    }
  }

  // Model Creation Functions
  const loadBaseModel = (modelId: string) => {
    const model = availableBaseModels.find((m) => m.id === modelId)
    if (model) {
      setBaseModel({ ...model, isLoaded: true })
      setCustomWords([
        { id: 'noise', name: 'noise', recordings: 0, maxRecordings: 8 },
        {
          id: 'background',
          name: '_background_noise_',
          recordings: 0,
          maxRecordings: 8,
        },
      ])
    }
  }

  const addCustomWord = () => {
    if (newWord.trim() && !customWords.find((w) => w.name === newWord.trim())) {
      const word: Word = {
        id: Date.now().toString(),
        name: newWord.trim(),
        recordings: 0,
        maxRecordings: 8,
      }
      setCustomWords([...customWords, word])
      setNewWord('')
    }
  }

  const removeWord = (wordId: string) => {
    setCustomWords(customWords.filter((w) => w.id !== wordId))
  }

  const getDurationInMs = (duration: string) => {
    return duration === 'x1' ? 1000 : 2000
  }

  const startRecordingWord = async (wordId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      // Setup audio visualization
      audioContextRef.current = new AudioContext()
      const source = audioContextRef.current.createMediaStreamSource(stream)
      analyserRef.current = audioContextRef.current.createAnalyser()
      source.connect(analyserRef.current)

      setCurrentRecordingWord(wordId)
      setIsRecording(true)

      mediaRecorder.start()

      setTimeout(() => {
        stopRecording(wordId)
      }, getDurationInMs(duration))

      updateAudioLevel()
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  const stopRecording = (wordId: string) => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop())
    }

    setIsRecording(false)
    setCurrentRecordingWord(null)
    setAudioLevel(0)

    setCustomWords((words) =>
      words.map((w) =>
        w.id === wordId
          ? { ...w, recordings: Math.min(w.recordings + 1, w.maxRecordings) }
          : w
      )
    )
  }

  const updateAudioLevel = () => {
    if (analyserRef.current && isRecording) {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
      analyserRef.current.getByteFrequencyData(dataArray)
      const average = dataArray.reduce((a, b) => a + b) / dataArray.length
      setAudioLevel(average)
      requestAnimationFrame(updateAudioLevel)
    }
  }

  const canStartTransfer = () => {
    return (
      customWords.length > 0 &&
      customWords.every((w) => w.recordings >= w.maxRecordings)
    )
  }

  const startTransferLearning = () => {
    if (!canStartTransfer()) return

    setIsTransferring(true)
    setTransferProgress(0)

    const interval = setInterval(() => {
      setTransferProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsTransferring(false)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  const saveNewModel = () => {
    if (!newModelName.trim() || !baseModel) return

    const newModel: SavedModel = {
      id: Date.now().toString(),
      name: newModelName.trim(),
      baseModel: baseModel.name,
      words: customWords.map((w) => w.name),
      createdAt: new Date().toISOString().split('T')[0],
    }

    setSavedModels((prev) => [...prev, newModel])

    // Initialize state for the new model
    initializeModelState(newModel.id, newModel.words)

    // Reset creation state
    setNewModelName('')
    setBaseModel(null)
    setCustomWords([])
    setTransferProgress(0)

    // Switch to the new model tab
    setActiveTab(newModel.id)
  }

  // Initialize states for existing models
  savedModels.forEach((model) => {
    initializeModelState(model.id, model.words)
  })

  return (
    <div className="flex flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Speech Command Interface</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList
              className="grid w-full"
              style={{
                gridTemplateColumns: `repeat(${savedModels.length + 1}, 1fr)`,
              }}
            >
              {savedModels.map((model) => (
                <TabsTrigger
                  key={model.id}
                  value={model.id}
                  className="relative"
                >
                  {model.name}
                  {modelRecordingStates[model.id]?.isRecording && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  )}
                </TabsTrigger>
              ))}
              <TabsTrigger value="create-model">Create Model</TabsTrigger>
            </TabsList>

            {/* Model Tabs */}
            {savedModels.map((model) => (
              <TabsContent
                key={model.id}
                value={model.id}
                className="space-y-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{model.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Base: {model.baseModel} • Created: {model.createdAt} •
                      Words: {model.words.length}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteModel(model.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Model
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Available Words:</h4>
                    <div className="flex flex-wrap gap-2">
                      {model.words.map((word) => (
                        <Badge key={word} variant="secondary">
                          {word}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => startLiveRecording(model.id)}
                      disabled={modelRecordingStates[model.id]?.isRecording}
                      className="flex items-center gap-2"
                      variant="default"
                    >
                      <Play className="h-4 w-4" />
                      Start Recording
                    </Button>

                    <Button
                      onClick={() => stopLiveRecording(model.id)}
                      disabled={!modelRecordingStates[model.id]?.isRecording}
                      className="flex items-center gap-2"
                      variant="destructive"
                    >
                      <Square className="h-4 w-4" />
                      Stop Recording
                    </Button>
                  </div>

                  {modelRecordingStates[model.id]?.isRecording && (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {model.words.map((word) => (
                          <Card key={word}>
                            <CardContent className="p-4 text-center">
                              <div className="font-medium mb-2">{word}</div>
                              <Badge variant="secondary" className="text-lg">
                                {modelRecordingStates[model.id]?.detectedWords[
                                  word
                                ] || 0}
                              </Badge>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Live recording active
                      </div>
                    </>
                  )}

                  {!modelRecordingStates[model.id]?.isRecording && (
                    <Card>
                      <CardContent className="p-6 text-center text-muted-foreground">
                        <p>
                          Click "Start Recording" to begin live speech detection
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            ))}

            {/* Create Model Tab */}
            <TabsContent value="create-model" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Create New Model</h3>

                {/* Base Model Selection */}
                <div className="space-y-4">
                  <h4 className="font-medium">Select Base Model</h4>
                  <div className="flex gap-4 items-center">
                    <Select onValueChange={loadBaseModel}>
                      <SelectTrigger className="w-64">
                        <SelectValue placeholder="Select base model" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableBaseModels.map((model) => (
                          <SelectItem key={model.id} value={model.id}>
                            {model.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {baseModel && (
                      <Badge variant="secondary">
                        {baseModel.isLoaded ? 'Model Loaded' : 'Loading...'}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Word Extension Section */}
                {baseModel && (
                  <div className="space-y-4">
                    <h4 className="font-medium">Add Custom Words</h4>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter new word"
                        value={newWord}
                        onChange={(e) => setNewWord(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addCustomWord()}
                      />
                      <Button onClick={addCustomWord} size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Duration Selection */}
                    <div className="flex gap-4 items-center">
                      <label className="text-sm font-medium">
                        Recording Duration:
                      </label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="x1">x1 (1s)</SelectItem>
                          <SelectItem value="x2">x2 (2s)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Words List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {customWords.map((word) => (
                        <Card key={word.id} className="relative">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium">{word.name}</h4>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => removeWord(word.id)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Recordings:</span>
                                <span>
                                  {word.recordings}/{word.maxRecordings}
                                </span>
                              </div>
                              <Progress
                                value={
                                  (word.recordings / word.maxRecordings) * 100
                                }
                              />

                              <Button
                                className="w-full"
                                onClick={() => startRecordingWord(word.id)}
                                disabled={
                                  isRecording ||
                                  word.recordings >= word.maxRecordings
                                }
                                variant={
                                  currentRecordingWord === word.id
                                    ? 'destructive'
                                    : 'default'
                                }
                              >
                                {currentRecordingWord === word.id ? (
                                  <>
                                    <MicOff className="h-4 w-4 mr-2" />
                                    Recording... ({duration})
                                  </>
                                ) : (
                                  <>
                                    <Mic className="h-4 w-4 mr-2" />
                                    Record
                                  </>
                                )}
                              </Button>
                            </div>

                            {/* Audio Level Visualization */}
                            {currentRecordingWord === word.id && (
                              <div className="mt-2">
                                <div className="h-2 bg-gray-200 rounded">
                                  <div
                                    className="h-full bg-green-500 rounded transition-all duration-100"
                                    style={{
                                      width: `${(audioLevel / 255) * 100}%`,
                                    }}
                                  />
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Transfer Learning Section */}
                {customWords.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-medium">Transfer Learning</h4>
                    <div className="flex gap-4 items-center">
                      <Button
                        onClick={startTransferLearning}
                        disabled={!canStartTransfer() || isTransferring}
                        className="flex items-center gap-2"
                      >
                        <Upload className="h-4 w-4" />
                        {isTransferring
                          ? 'Transferring...'
                          : 'Start Transfer Learning'}
                      </Button>

                      {!canStartTransfer() && (
                        <Badge variant="outline">
                          Need 8 recordings per word
                        </Badge>
                      )}
                    </div>

                    {isTransferring && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Transfer Progress:</span>
                          <span>{transferProgress}%</span>
                        </div>
                        <Progress value={transferProgress} />
                      </div>
                    )}
                  </div>
                )}

                {/* Model Saving Section */}
                {transferProgress === 100 && (
                  <div className="space-y-4">
                    <h4 className="font-medium">Save New Model</h4>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter model name"
                        value={newModelName}
                        onChange={(e) => setNewModelName(e.target.value)}
                      />
                      <Button
                        onClick={saveNewModel}
                        className="flex items-center gap-2"
                        disabled={!newModelName.trim()}
                      >
                        <Save className="h-4 w-4" />
                        Save Model
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
