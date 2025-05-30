"use client"

import React, { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PersonalityResult } from "@/components/personality-result"
import { mbtiTypes } from "../data/mbti-types"
import { useRouter } from 'next/navigation';

interface MBTIPercentages {
  E: number
  I: number
  S: number
  N: number
  T: number
  F: number
  J: number
  P: number
}

export default function ResultPage() {
  const [mbtiType, setMbtiType] = useState<string>("")
  const [percentages, setPercentages] = useState<MBTIPercentages | null>(null)
  const [traits, setTraits] = useState<any>(null)
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const percentagesStr = params.get('percentages');

    if (type) {
      setMbtiType(type);
      const typeInfo = mbtiTypes[type];
      if (typeInfo) {
        setTraits(typeInfo);
      } else {
        console.error(`MBTI type data not found for: ${type}`);
        setTraits(null);
      }
    } else {
       console.error('MBTI type not found in URL parameters.');
       setMbtiType('');
       setTraits(null);
    }

    if (percentagesStr) {
      try {
         setPercentages(JSON.parse(decodeURIComponent(percentagesStr)));
      } catch (error) {
         console.error('Error parsing percentages from URL:', error);
         setPercentages(null);
      }
    } else {
       console.warn('Percentages not found in URL parameters.');
       setPercentages(null);
    }

  }, [router]);

  const renderDimensionBar = (dimension: string, leftValue: number, rightValue: number) => {
    const total = leftValue + rightValue
    const leftPercentage = (leftValue / total) * 100
    const rightPercentage = (rightValue / total) * 100

    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">{dimension[0]}</span>
          <span className="text-sm font-medium text-gray-700">{dimension[1]}</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="flex h-full">
            <div
              className="bg-blue-500 transition-all duration-500"
              style={{ width: `${leftPercentage}%` }}
            />
            <div
              className="bg-green-500 transition-all duration-500"
              style={{ width: `${rightPercentage}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">{Math.round(leftPercentage)}%</span>
          <span className="text-xs text-gray-500">{Math.round(rightPercentage)}%</span>
        </div>
      </div>
    )
  }

  if (!mbtiType || !traits) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Your MBTI Type is</h1>
              <div className="text-5xl font-bold text-blue-600 mb-4">{mbtiType}</div>
              <div className="text-xl text-gray-600">{traits.name}</div>
            </div>

            {percentages && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Dimension Analysis</h2>
                {renderDimensionBar("EI", percentages.E, percentages.I)}
                {renderDimensionBar("SN", percentages.S, percentages.N)}
                {renderDimensionBar("TF", percentages.T, percentages.F)}
                {renderDimensionBar("JP", percentages.J, percentages.P)}
              </div>
            )}

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Personality Traits</h2>
                <p className="text-gray-600 leading-relaxed">{traits.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Strengths</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {traits.strengths && traits.strengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Potential Challenges</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {traits.weaknesses && traits.weaknesses.map((weakness: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Suitable Career Paths</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {traits.careers && traits.careers.map((career: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => window.location.href = "/en"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
