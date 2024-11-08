"use client";

import React from 'react'

import UserCard from "@/components/cards/UserCard";
import WeekChart from "@/components/charts/WeekChart";
import MonthChart from "@/components/charts/MonthChart";
import DailyChart from "@/components/charts/DailyChart";

export default function page() {
  return (
    <>
      <div className="flex items-center justify-center pt-[10rem]">
        <UserCard />
      </div>
      <div className="flex justify-center h-[100]">
        <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          <WeekChart />
          <MonthChart />
          <DailyChart />
        </div>
      </div>
    </>
  );
}