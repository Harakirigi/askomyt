import React, { useState, useEffect, forwardRef, Ref } from "react";
import showToast from "@utils/showToast";

interface InputProps {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value?: string;
    placeholder?: string;
    type?: string;
    inputText?: string;
    inputLabel?: string;
    letCount?: boolean;
    maxChar?: number | null;
    id?: string;
    readOnly?: boolean;
    textarea?: boolean;
    name?: string;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    [key: string]: any;
}

type InputRef = HTMLInputElement | HTMLTextAreaElement;

const Input = forwardRef<InputRef, InputProps>(
    (
        {
            className = "",
            onClick,
            onChange,
            value,
            placeholder = "",
            type = "text",
            inputText = "",
            inputLabel = "",
            letCount = false,
            maxChar = null,
            id,
            readOnly = false,
            textarea = false,
            name,
            ...props
        },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const [inputValue, setInputValue] = useState(value || "");

        useEffect(() => {
            if (value !== undefined) {
                setInputValue(value);
            }
        }, [value]);

        useEffect(() => {
            if (maxChar && inputValue.length > maxChar) {
                showToast("Вы превысили ограничение по количеству символов", "warning");
            }
        }, [maxChar, inputValue]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (readOnly) return;
            setInputValue(e.target.value);
            if (onChange) onChange(e);
        };

        const baseStyle =
            "w-full\
                    border\
                    border-gray-300\
                    bg-black\
                    px-3\
                    py-2\
                    text-sm\
                    text-gray-400\
                    placeholder-transparent\
                    focus:placeholder-gray-600\
                    hover:placeholder-gray-600\
                    active:placeholder-gray-600\
                    rounded-xl\
                    hover:border-accent\
                    focus:border-accent\
                    focus:outline-none\
                    focus:ring-1\
                    focus:ring-accent\
                    disabled:cursor-not-allowed\
                    disabled:opacity-50\
                    transition\
                    duration-200\
                    ease-in-out";

        return (
            <>
                {inputLabel && (
                    <label
                        htmlFor={id}
                        className={`mx-2 mb-2 text-sm transition-opacity duration-300 ease-in-out ${isFocused ? "text-accent" : "text-gray-400"
                            }`}
                    >
                        {inputLabel}
                    </label>
                )}
                {textarea ? (
                    <textarea
                        id={id}
                        ref={ref as Ref<HTMLTextAreaElement>}
                        className={`${baseStyle} h-32 ${className}`}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleChange}
                        onClick={onClick}
                        onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                            setIsFocused(true);
                            if (props.onFocus) props.onFocus(e);
                        }}
                        onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                            setIsFocused(false);
                            if (props.onBlur) props.onBlur(e);
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        readOnly={readOnly}
                        name={name}
                        {...props}
                    />
                ) : (
                    <input
                        id={id}
                        ref={ref as Ref<HTMLInputElement>}
                        className={`${baseStyle} h-[45px] ${className}`}
                        placeholder={placeholder}
                        type={type}
                        value={inputValue}
                        onChange={handleChange}
                        onClick={onClick}
                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                            setIsFocused(true);
                            if (props.onFocus) props.onFocus(e);
                        }}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            setIsFocused(false);
                            if (props.onBlur) props.onBlur(e);
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        readOnly={readOnly}
                        name={name}
                        {...props}
                    />
                )}
                <p
                    className={`
                mt-2
                mx-2
                text-sm
                text-gray-500
                transition-opacity
                duration-300
                ease-in-out
                ${isFocused ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
                >
                    {letCount ? inputValue.length : ""}
                    {inputText}
                </p>
            </>
        );
    }
);

Input.displayName = "Input";

export default Input;