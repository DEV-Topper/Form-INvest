import {Document} from 'mongoose'
import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export interface iNav {
  link?: string;
  name?: string;
}

export interface iHIW {
  small?: string;
  icon?: JSX.Element;
  bold?: string;
}

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface iService {
  type?: string;
  img?: string;
  price?: string;
}

export interface iBenefit {
  icon?: ReactNode;
  b?: string;
  p?: string;
}

export interface iTestimony {
  img?: string;
  b?: string;
  p?: string;
  city?: string;
}


export interface iEmail extends Document {
  email: string
}