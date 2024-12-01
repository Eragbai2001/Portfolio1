import React from 'react'
interface ProfileCardProps {
    name: string;
    jobTitle: string;
    description: string;
    params:string;
  }
const page = ({params}:ProfileCardProps) => {
  return (
    <div>page</div>
  )
}

export default page