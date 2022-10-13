import { InputHTMLAttributes } from 'react'

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>{}

export function InputField(props : InputFieldProps) {
  return <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none' {...props} />
}

InputField.displayName = 'Input.Field'