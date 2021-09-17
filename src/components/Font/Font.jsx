import React from 'react'
import SizeInput from '../SizeInput/SizeInput'

export default function Font() {
    return (
            <div className="mt-5 w-full">
                <span className="text-xs text-gray-600 font-medium mb-3 inline-block">TEXT</span><br />
                <select name="" id="" className="w-full dark:bg-dark">
                    <option value="">Fira Code</option>
                    <option value="">Roboto Mono</option>
                    <option value="">Fira Sans</option>
                </select>
                <div className="flex items-center justify-between w-full">
                <select name="" id="" className="w-half mt-3 dark:bg-dark">
                    <option value="">Medium</option>
                    <option value="">Bold</option>
                    <option value="">Regular</option>
                </select>
                <select name="" id="" className="w-half mt-3 dark:bg-dark">
                    <option value="">10</option>
                    <option value="">12</option>
                    <option value="">14</option>
                    <option value="">14</option>
                    <option value="">14</option>
                    <option value="">14</option>
                    <option value="">14</option>
                </select> 
                </div>
            </div>
    )
}
