'use client'

import { getCookie, setCookie } from "cookies-next"

export function logIn(user: string, password: string, idFuncionario: number) {
  setCookie('user', user)
  setCookie('password', password)
  setCookie('idFuncionario', idFuncionario)
}

export function signOut() {
  setCookie('user', null)
  setCookie('password', null)
  setCookie('idFuncionario', null)
}

export function isLoggedIn(): boolean {
  const user = getCookie('user') as string
  const password = getCookie('password') as string
  const idFuncionario = getCookie('idFuncionario') as string

  return (user !== null && password !== null && idFuncionario !== null)
}

export function getUser() {
  return getCookie('user') as string
}

export function getPassword() {
  return getCookie('password') as string
}

export function getId() {
  return parseInt(getCookie('idFuncionario') as string)
}