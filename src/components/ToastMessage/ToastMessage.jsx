import { CheckIcon, XIcon } from "lucide-react";
import { useEffect } from "react";

export default function ToastMessage({ isShown, message, type, onClose }) {
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose()
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [onClose])

  return (
    <div className={`absolute top-20 right-6 transition-all duration-400 ${isShown ? "opacity-100" : "opacity-0"}`}>
      <div className={`min-w-52 bg-white border border-[#d7d7d7] shadow-2xl rounded-md after:w-[5px] after:h-full ${type === "delete" ? "after:bg-red-500" : "after:bg-green-500"
        } after:absolute after:left-0 after:top-0 after:rounded-l-lg`}>
        <div className="flex items-center gap-3 py-2 px-4">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${type === "delete" ? "bg-red-50" : "bg-green-50"}`}>
            {type === "delete" ? (
              <XIcon size={20} className="text-red-600"/>
            ) : (
              <CheckIcon size={20} className="text-green-600" />
            )}
          </div>
          <p className="text-sm text-neutral-800">{message}</p>
        </div>
      </div>
    </div>
  )
}