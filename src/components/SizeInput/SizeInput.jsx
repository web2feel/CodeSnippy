import React from 'react'

export default function SizeInput() {
    return (
        <div className="w-20 h-8 rounded-sm border border-gray-300 flex items-center justify-around text-gray-500 text-xs px-3">
            W <div contentEditable className="text-gray-700 px-2 outline-none">132</div>
        </div>
    )
}
