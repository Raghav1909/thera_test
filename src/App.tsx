import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

const App = () => {
  const [count, setCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 2000)
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Simple Button Demo</h1>

      <div className="space-y-4">
        <div className="text-center p-4 bg-gray-100 rounded-lg">
          <p className="text-xl mb-2">Count: {count}</p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={handleIncrement}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Increment
          </Button>

          <Button onClick={handleReset} variant="destructive">
            Reset
          </Button>
        </div>

        {showAlert && (
          <Alert className="mt-4">
            <AlertDescription>Counter has been reset to zero!</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}

export default App
