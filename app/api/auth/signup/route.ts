import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, password, state } = await req.json()
    
    // In a real application, you would save the user to a database here
    
    return NextResponse.json({ message: 'Signup successful' }, { status: 201 })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 })
  }
}

