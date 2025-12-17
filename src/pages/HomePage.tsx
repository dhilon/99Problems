import { useState, useMemo } from 'react'

const cardInfos = [
  {
    title: 'Applihero',
    description: 'A web app that uses a personalized RAG model on a user\'s resume/background to coach them through job applications. The app lets users upload resumes and create job-specific "sessions". For each application, Applihero provides unique advice, generates survey answers and cover letters, and includes a simple feedback module (ratings + comments).',
    image: '/applihero.PNG',
    link: 'https://applihero.com',
    goal: 'Create an AI-powered job application assistant that helps users craft personalized resumes, cover letters, and application responses based on their unique background and the specific job requirements. The app enables users to upload resumes, create job-specific sessions, receive tailored advice, write and save their own answers, and get feedback through scores and comments.',
    howWeDidIt: 'We built a personalized RAG (Retrieval-Augmented Generation) system using Next.js for the frontend and Supabase for the backend. The system processes user resumes and job descriptions, using vector embeddings to match user qualifications with job requirements. We implemented a session-based architecture where users can manage multiple applications simultaneously, with the ability to write and save their own answers. The RAG model is user-specific, allowing for personalized coaching based on each user\'s unique background.',
    issues: 'Key challenges included setting up user-specific RAG models, managing file viewing and storage in Supabase, optimizing the RAG pipeline for faster response times, and ensuring the resume optimizer worked correctly. We also faced issues with frontend RAG setup and had to implement proper database schema migrations. Storage setup and verification required careful attention to ensure user data was properly handled.',
    languages: ['TypeScript', 'Next.js', 'React', 'Supabase', 'PLpgSQL', 'Tailwind CSS', 'OpenAI API'],
  },
  {
    title: 'Pettrics',
    description: 'Pettrics that helps pet owners create healthy, structured routines through intuitive logging, personalized schedules, and actionable insights — all in a simple, cross-platform Flutter app. The app has a heavy focus on health and insights based on data analytics.',
    image: '/pettrics.png',
    link: 'https://github.com/Dnemni/Pettrics',
    goal: 'Develop a comprehensive pet care management app that helps pet owners track their pets\' health, create structured routines, and gain insights from their pet care data to improve overall pet wellness.',
    howWeDidIt: 'We used Flutter for cross-platform development, allowing us to build for both iOS and Android simultaneously. The app features a local database for offline functionality, with cloud sync capabilities. We implemented data analytics to identify patterns in pet behavior and health metrics, providing actionable insights to users.',
    issues: 'Synchronizing data across devices was challenging, especially with offline-first architecture. We also had to handle various pet types with different care requirements. Performance optimization for large datasets of logged activities was another key challenge.',
    languages: ['Dart', 'Flutter', 'Firebase', 'SQLite'],
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
  {
    title: '',
    description: '',
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E",
    link: 'https://applihero.com',
  },
]

export function HomePage() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const randomProject = useMemo(() => {
    const validProjects = cardInfos.filter(info => info.title !== '')
    return validProjects[Math.floor(Math.random() * validProjects.length)]
  }, [])

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCards(newExpanded)
  }

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Home</h1>
        <h2 className="text-2xl font-bold tracking-tight">
          <span
            className="inline-block"
            style={{
              background: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            2 Problems Deep
          </span>
        </h2>
        <p className="max-w-prose text-slate-700">
          Discover our collection of innovative projects.
        </p>
      </div>

      {randomProject && (
        <div className="bg-linear-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-slate-900">Project Spotlight</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
              <img
                src={randomProject.image}
                alt={randomProject.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">{randomProject.title}</h3>
              <p className="text-slate-700">{randomProject.description}</p>
              {randomProject.link && (
                <a
                  href={randomProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Visit Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardInfos.map((info, index) => {
          const isClickable = info.title !== ""
          const isExpanded = expandedCards.has(index)
          const hasDetails = 'goal' in info && info.goal

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border-blue-300 flex flex-col"
            >
              {isClickable ? (
                <a
                  href={info.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex-1"
                >
                  <div className="relative aspect-square overflow-hidden bg-linear-to-br from-blue-50 to-indigo-100">
                    <img
                      src={info.image}
                      alt={info.title}
                      className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                      {info.description}
                    </p>
                  </div>
                </a>
              ) : (
                <>
                  <div className="relative aspect-square overflow-hidden bg-linear-to-br from-blue-50 to-indigo-100">
                    <img
                      src={info.image}
                      alt={info.title}
                      className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                      {info.description}
                    </p>
                  </div>
                </>
              )}
              {hasDetails && (
                <>
                  <div className="px-5 pb-3 border-t border-slate-200 pt-3">
                    <button
                      onClick={() => toggleCard(index)}
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 w-full"
                    >
                      <span>Learn More</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="px-5 pb-5 space-y-4 border-t border-slate-200 pt-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Goal</h4>
                        <p className="text-sm text-slate-700">{info.goal}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">How We Did It</h4>
                        <p className="text-sm text-slate-700">{info.howWeDidIt}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Issues We Faced</h4>
                        <p className="text-sm text-slate-700">{info.issues}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Languages & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {info.languages?.map((lang, langIndex) => (
                            <span
                              key={langIndex}
                              className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none" />
            </div>
          )
        })}
      </div>
    </section>
  )
}
